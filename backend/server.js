const express = require('express');
// const bodyParser = require('body-parser');       // Not required in newer version of express
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors);
app.use(express.json());

// Mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})