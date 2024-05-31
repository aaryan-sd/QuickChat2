import User from "../models/user.models.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.log("Error in user Controller -", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getLoggedInUser = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const loggedInUser = await User.findById(loggedInUserId).select("-password");

    if (!loggedInUser) {
      return res.status(404).json({ error: "Logged-in user not found" });
    }

    res.status(200).json(loggedInUser);
  } catch (error) {
    console.log("Error in getLoggedInUser controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};