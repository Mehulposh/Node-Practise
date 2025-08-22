const express = require('express');
require('dotenv').config();
const cors = require('cors')
const HomeRoute = require('./routes/HomeRoutes')
const BlogRotes = require('./routes/BlogsRoute')
const {default: mongoose} = require('mongoose');

//PORT from .env file
const PORT = process.env.PORT;

const server = express();

//for cross origin resource sharing
server.use(cors());

//Universal middleware to parse json data
server.use(express.json());

//Home route
server.use('/api/v1/',HomeRoute)

//Blog route
server.use('/api/v1/blogs', BlogRotes);


//database details from .env file
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
// database connection 
mongoose.connect(`${dbHost}:${dbPort}/${dbName}`)
.then(() => {
    console.log("thumbs up DB IS CONNECTED")
})

server.listen(PORT, () => {
    console.log("THumbs up every thins is good port listning is active on expressJS",PORT)
})