import users from "../Models/users.js";

const DeleteNotes = async (req, res) => {
  console.log("hi");
  try {
    //get the notes id and user email
    const { id, email } = req.query;
    //get the user
    console.log(req.query, req.body, req.params);
    const user = await users.findOne({ email });

    user.notes = user.notes.filter((curr, index) => {
      console.log(curr._id, id); // yaha se ye check ho rha ki _id ek object hai aur id ek string hai
      return JSON.stringify(curr._id) !== JSON.stringify(id);
      //return ke baad kuchh bhi execute nhi hota
    });

    // save the user

    const newUser = await user.save();
    return res
      .status(200)
      .json({ message: "Notes deleted successfully", data: newUser });
  } catch (err) {
    return res.status(200).json({ message: err.message });
  }
};
export default DeleteNotes;
