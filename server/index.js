const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("./controllers/todoController");

dotenv.config();
const app = express();
const PORT = process.env.PORT;


// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

mongoose.connect(process.env.MONGO_COLLECTION);

app.get("/", (req, res) => {
  res.json("Server is up");
});

app.get("/get", getTodos);
app.post("/add", addTodo);
app.put("/update/:id", updateTodo);
app.delete("/delete/:id", deleteTodo);

app.listen(PORT, () => {
  console.log("server is running at http://localhost:" + PORT);
});
