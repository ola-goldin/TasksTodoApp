const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
    immutable: true, 
  },
});

// Pre-save middleware to set createdAt
TodoSchema.pre('save', function (next) {
    if (this.isNew) {
        this.createdAt = new Date(); 
    }
    next();
});

const TodoModel = mongoose.model("Todos", TodoSchema);
module.exports = TodoModel;
