import express from "express";
import users from "../Models/users.js";

const Login = async (req, res) => {
  try {
    //take the data sent from frontend i.e email, password
    const { email, password } = req.body;

    //database me check krenge ki iss email se koi user present hai ya nhi
    const user = await users.findOne({ email: email });

    //if there is no such user with that email
    if (user === null) {
      return res
        .status(200)
        .json({ message: "User doesn't exist", data: null, success: false });
    }

    //now if user is present then check the password with the sent password .i.e from frontend
    if (user.password === password) {
      res.status(200).json({
        message: "User is successfully login",
        data: user,
        success: true,
      });
    }
    //else
    //if both don't match then input credentials are invalid
    return res
      .status(200)
      .json({ message: "Invalid Credentials", success: false });
  } catch (err) {
    res.status(200).json({ message: err.message, data: null });
  }
};

export default Login;
