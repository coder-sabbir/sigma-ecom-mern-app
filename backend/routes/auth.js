const router = require("express").Router();
const User = require("../models/User");
const jwt=require("jsonwebtoken");
const CryptoJS = require("crypto-js");
//Register
router.post("/register", async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        //if user is not present
        if (!user) {
            res.status(401).json("wrong credentials");
            return;
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        //if password enter is not matched 
        if (OriginalPassword !== req.body.password) {
            res.status(401).json("wrong credentials");
            return;
        }
        //else if everything is ok

        const accessToken=jwt.sign({
            id:user._id,
            isAdmin : user.isAdmin,
        }, process.env.JWT_SEC, {expiresIn:"3d"} )

        const { password, ...others } = user._doc;

        res.status(200).json({...others,accessToken}); 
    }
    catch (err) {
        res.status(500).json(err);
    }

})


module.exports = router;