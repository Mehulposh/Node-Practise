const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const server = express();

server.listen(PORT, () => {
    console.log("THumbs up every thins is good port listning is active on expressJS",PORT)
})