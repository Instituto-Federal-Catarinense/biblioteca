const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLenght:3, maxLength: 100 },
});


// Virtual for author's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._name}`;
});

// Export model
module.exports = mongoose.model("genre", GenreSchema);
