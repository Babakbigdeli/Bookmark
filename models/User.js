
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: mongoose.SchemaTypes.String, required: true},
    books: {type: [mongoose.SchemaTypes.ObjectId], required: true},
})

const User = mongoose.model("user", userSchema);

module.exports = User; 