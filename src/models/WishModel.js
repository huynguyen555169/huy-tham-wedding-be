const mongoose = require('mongoose');
const wishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    wish: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Wish = mongoose.model('Wish', wishSchema);
module.exports = Wish;
