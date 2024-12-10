const TodoModel = require("../Models/Todo");

const getTodos = (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

const addTodo = (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  TodoModel.findById(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      todo.done = !todo.done;
      todo
        .save()
        .then((updatedTodo) => res.json(updatedTodo))
        .catch((err) =>
          res.status(500).json({ message: "Error saving todo", error: err })
        );
    })
    .catch((err) =>
      res.status(500).json({ message: "Error finding todo", error: err })
    );
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
