//import mongoose for database connection and designing
import mongoose from "mongoose";

const MONGODB_URL =
  "mongodb+srv://shreyasingh:Shreya123@keepnotes.a9yn4sm.mongodb.net/?retryWrites=true&w=majority&appName=KeepNotes";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Mongodb is successfulyy connected");
  } catch (err) {
    console.log(err.message);
  }
};
export default connectDB;
