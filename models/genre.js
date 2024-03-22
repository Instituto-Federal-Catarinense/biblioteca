const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema= new Schema({
    name: {
        type: String,  required: true, minLenght:3, maxLenght: 100}
});

// virtual for genre's URL 
GenderSchema.virtual("url").get(function(){
    //we don't use an_arrow function as we'll need the this object
    return `/catalog/genre/${this.name}`;
});

// Export model
module.exports = mongoose.model("Genre",GenderSchema);