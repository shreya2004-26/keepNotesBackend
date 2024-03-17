import users from "../Models/users.js";

const Register = async (req, res) => {
  try {
    //accept data send from frontend
    const reqBody = req.body;
    console.log(`reqBody is ${reqBody}`);

    //check if user is already registered or not
    const isUser = await users.findOne({ email: reqBody.email });
    // if user is already registered
    if (isUser) {
      console.log("User is already registered");
      return res.status(200).json({
        message: "user is already registered",
        data: null,
        success: false,
      });
    }

    //if user is not already registered(new user)

    // save the new user to database
    const user = await users.create(reqBody);

    res.status(201).json({
      message: "User is successfully registered",
      data: user,
      success: true,
    });
    console.log(`data is ${data}`);
  } catch (err) {
    res.status(200).json({ message: err.message, data: null });
    // console.log(`data is ${data}`);
  }
};

export default Register;
