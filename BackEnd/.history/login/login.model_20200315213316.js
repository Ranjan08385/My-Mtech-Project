const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    typr: String,
    required: true,
    trim: true,
    minlength: 8,
  },
}, {
  timestamps: true,
});