const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
name: { type: String, required: true, minLenght:3, maxLength: 100 }
});

// Virtual for GenreSchema's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/Genre/${this._name}`;
});

// Export model
module.exports = mongoose.model("Author", GenreSchemaSchema);
