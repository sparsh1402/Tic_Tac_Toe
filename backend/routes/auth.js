const express = require("express");
const router = express.Router();  //app.get ka bda version hai
const mongoose = require("mongoose");
const USER = mongoose.model('USER');
const bcrypt = require('bcrypt');


router.get('/', (req, res) => {
    res.send("hello");
});


router.post("/signup", (req, res) => {
    const { name, userName, email, password } = req.body;
    if (!name || !email || !userName || !password) {
       return res.status(422).json({ error: "Please add all the fields" })
    }
    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "user already exists" });
        }
        else {
            bcrypt.hash(password, 12).then((hashedPassword) => {
                const user = new USER({
                    name,
                    email,
                    userName,
                    password:hashedPassword
                })

                user.save()
                    .then(user => { res.json({ message: "Registered successfully" }) })
                    .catch(err => { console.log("Hey" + err) })
                
            });
                
        }
    });
   

});

module.exports = router;