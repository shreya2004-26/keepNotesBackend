import users from "../Models/users.js";

const AddNotes = async (req, res) => {
  try {
    // console.log("hi");
    //get the data from frontend
    const { email, title, description } = req.body;
    console.log(req.body);
    //get the user
    const user = await users.findOne({ email });
    // console.log(user);
    //add the title and description
    user.notes = [...user.notes, { title, description }];
    //save in database
    const newUser = await user.save();
    return res.status(200).json({
      message: "Notes added successfully",
      success: true,
      data: newUser,
    });
  } catch (err) {
    return res.status(200).json({ message: err.message, success: false });
  }
};
export default AddNotes;
