import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  
  try {
    console.log("inside try block of signup")
    const { fullname, email, password, confirmPassword, gender } = req.body;
  
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password does not match" });
    }
  
    const user = await User.findOne({ email });
    console.log("user to be checked in db")
  
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

  
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullname}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${fullname}`;
  
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    
    if(newUser){
      generateTokenAndSetCookie(newUser._id, res);
    
      await newUser.save();
  
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        gender: newUser.gender,
        profilePic: newUser.profilePic
      });
    }
    else{
      res.status(400).json({ error: "User not created" });
    }

    console.log("user created");
    
  } catch (error) {
    console.log("Error in Signup Controller -", error.message);
    res.status(500).json({ error: "internal server error" });
  }

};
export const login = async (req, res) => {
  try{
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    const isPasswordCorrect = bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect){
        return res.status(404).json({error: "Invalid email or pasword"});
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        profilePic: user.profilePic
    })


    
  }
  catch(error){
    console.log("Error in login Controller -", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export const logout = (req, res) => {
  try{
    res.cookie("jwt","", {maxAge: 0});

    res.status(200).json({ message: "Logged out successfully" });
  }
  catch(error){
    console.log("Error in Logout Controller -", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

