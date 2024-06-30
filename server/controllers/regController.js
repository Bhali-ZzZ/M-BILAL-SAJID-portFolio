import validator from "validator";
import regModel from "../models/regModel.js";
import bcryptjs from 'bcryptjs'; // Import bcryptjs instead of bcrypt
import jwt from 'jsonwebtoken';

const registrationUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        const userExist = await regModel.findOne({ email });
        if (userExist) {
            return res.json({ success: false, message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" });
        }

        const hashed_password = await bcryptjs.hash(password, 10); // Use bcryptjs.hash
        const newUser = new regModel({
            name: name,
            email: email,
            phone: phone,
            password: hashed_password
        });
        const newOne = await newUser.save();
        const token = createToken(newOne._id); // Pass newOne._id to createToken function
        res.json({ success: true, newOne, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Function to generate token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await regModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" });
        }
        
        const isPasswordValid = await bcryptjs.compare(password, user.password); // Use bcryptjs.compare
        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        const token = await createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error in loginUser:", error);
        res.json({ success: false, message: "Internal server error" });
    }
};

const user = async (req, res) => {
    try {
        // Access user data from the request object
        const userData = req.user;
        
        // Use userData to retrieve additional information from the database if needed
        const userFromDB = await regModel.findById(userData.id);
        
        // Respond with the user data
        res.json({ success: true, userFromDB });
    } catch (error) {
        console.error("Error in user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { user, registrationUser, loginUser };
