// const { Users } = require("../../models/Users");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const dotenv = require("dotenv");
// const { func } = require("joi");
// const mongoose = require("mongoose");

// async function createUser(req, res) {
//   try {
//     const { userName, email, password } = req.body;
//     const existingUser = await Users.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User is already taken" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new Users({ userName, email, password: hashedPassword });
//     await user.save();
//     const token = jwt.sign({ userId: user._id }, process.env.JWTTOKEN, {
//       expiresIn: "1h",
//     });
//     return res
//       .status(201)
//       .json({ message: "User registered successfully", token });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }

// async function loginUser(req, res) {
//   try {
//     const { email, password } = req.body;
//     console.log("Recived Email is :",email);
//     console.log("Recived password is :",password);
//     const user = await Users.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//     const token = jwt.sign({ userId: user._id }, process.env.JWTTOKEN, {
//       expiresIn: "1h",
//     });
//     return res.status(200).json({ token, message: "Logged in Successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }
// async function forgetPassword(req,res)
// {
//   try {
//    const { email, password } = req.body;
//     const user = await Users.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;
//     await user.save();

//     return res.status(200).json({ message: 'Password reset successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }
// async function getAllUsers(req, res) {
//   try {
//     const users = await Users.find();
//     if (users.length === 0) {
      
//       return res.status(404).json({ message: "No users found" });
//     }
//     return res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }
// async function findOneUser (req,res)
// {
//   const {id}=req.params
 
//   try {
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: 'Invalid User ID format' });
//     }
//     const user=await Users.findById(id)
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     return res.status(200).json(user);
//   }catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }

// module.exports = {
//   createUser,
//   loginUser,
//   getAllUsers,
//   findOneUser,
//   forgetPassword
//   //updateUser
// };
