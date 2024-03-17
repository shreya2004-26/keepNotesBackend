import express from "express";
import Register from "../Controllers/Register.js";
import Login from "../Controllers/Login.js";

// Create a route
const UsersRoute = express.Router();

//Now create subroute and their controller
UsersRoute.route("/register").post(Register);
UsersRoute.route("/login").post(Login);

export default UsersRoute;
