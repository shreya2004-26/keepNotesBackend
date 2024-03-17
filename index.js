//import express module to create server
import express from "express";
import connectDB from "./config/database.js";
import UsersRoute from "./Routes/UsersRoute.js";

//initialize an instance of express function
const app = express();

// Create the server route
app.get("/", (req, res) => {
  res.send("This server created by shreya");
});

// connect database with server
connectDB();

//to accept the data in json format from frontend
app.use(express.json());

app.use("/api", UsersRoute);

const port = "8000";

//to listen the request
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
