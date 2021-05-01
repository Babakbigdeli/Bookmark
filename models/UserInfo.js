
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    email: {type: mongoose.SchemaTypes.String, required: true},
    books: {type: [mongoose.SchemaTypes.ObjectId], required: true},
})

const User = mongoose.model("UserInfo", userInfoSchema);

module.exports = User; 