const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  ficcao: { type: String, required: true },
  romance: { type: String, required: true },
  historia: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model("Book", BookSchema);
