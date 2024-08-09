const User = require("../models/user.model");
const bcrypt = require('bcryptjs');

const signup = async (req,res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(password!=confirmPassword){
            return res.status(400).json({error:"passwords didnt match!"})
        }
        
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"username already exists!"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyPfp = `https://avatar.iran.liara.run/public/boy`
        const girlPfp = `https://avatar.iran.liara.run/public/girl`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyPfp : girlPfp,
        })

        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.log("error in signup controller! ",error);
        res.status(500).json({error:'internal server error.'})
    }
}

const login = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const logout = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {signup, login, logout};