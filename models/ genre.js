const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, required: true, minlenght:3, maxLength: 100 }
});

// Virtual for author's URL
genreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._name}`;
});

// Export model
module.exports = mongoose.model("genre", genreSchema);