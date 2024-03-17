import mongoose from "mongoose";

//Define the database schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: [{ title: String, description: String }],
});

//create the model using name and schema
const users = mongoose.model("users", userSchema);
export default users;
