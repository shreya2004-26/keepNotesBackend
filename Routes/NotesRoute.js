import express from "express";
import GetAllNotes from "../Controllers/GetAllNotes.js";
import AddNotes from "../Controllers/AddNotes.js";
import DeleteNotes from "../Controllers/DeleteNotes.js";
//create notes route
const NotesRoute = express.Router();
//create sub routes and their controllers
NotesRoute.route("/").post(AddNotes).get(GetAllNotes).delete(DeleteNotes);
export default NotesRoute;
