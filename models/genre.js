const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Genre = new Schema({
    name: { type: String, required: true,mininumLeght: 3, maxLength: 100 },
});

Genre.virtual("name").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genre/${this._id}`;
  });

// Export model
module.exports = mongoose.model("Genre", Genre);
