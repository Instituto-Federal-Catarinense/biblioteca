const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Genre = new Schema({
    SchemaType: { type: String, required: true, maxLength: 100 },
});

// Virtual for author's full name
Genre.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this. SchemaType) {
    fullname = `${this.SchemaType}`;
  }

  return fullname;
});

// Virtual for author's URL
Genre.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/Genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", Genre);
