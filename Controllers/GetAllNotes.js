import users from "../Models/users.js";

const GetAllNotes = async (req, res) => {
  try {
    // console.log("hi");
    //get the data from frontend
    const { email } = req.body;
    // get the user whose email matches with the entered email
    const user = await users.findOne({ email });
    // console.log(user, user.notes);
    return res.status(200).json({
      message: "Notes available",
      success: true,
      data: user.data,
    });
  } catch (err) {
    return res.status(200).json({ message: err.message, success: false });
  }
};
export default GetAllNotes;
