const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLenght:3, maxLenght: 100 }})
 

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._name}`});



//Export model
module.exports = mongoose.model("Genre", GenreSchema);
