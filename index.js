const express = require('express');
require('dotenv').config();
const cors = require('cors')
const HomeRoute = require('./routes/HomeRoutes')


const PORT = process.env.PORT;

const server = express();

server.use(cors());

server.use('/',HomeRoute)
server.listen(PORT, () => {
    console.log("THumbs up every thins is good port listning is active on expressJS",PORT)
})