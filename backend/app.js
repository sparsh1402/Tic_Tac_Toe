const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const mongoUrl = require("./keys");
require('./models/model');
app.use(express.json());
app.use(require("./routes/auth"));  //we can run middleware function in app.use.....
const cors = require('cors');
app.use(cors());
mongoose.connect(mongoUrl, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
    console.log("Sucessfully connected");
})

mongoose.connection.on("error", () => {
    console.log("Not connected");
})




app.get('/about' , (req, res) => {
    res.json("about page");
});

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});
