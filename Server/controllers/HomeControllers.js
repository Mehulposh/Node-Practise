const { response } = require("express");
const UserModel = require("../models/UserModel");

function HomeResponse(req,res) {
   res.json({
    message: 'welcome to the home page'
   })
}

function ContactResponse(req,res){
res.json({
    message: 'welcome to the contacts section'
});
}

async function CreateUser(req,res){
   const body = req.body;
    const {name, age} = body;

    const UserObject = UserModel({
        name,
        age
    });

    try { 
        const response = await UserObject.save();
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

module.exports = {HomeResponse,ContactResponse,CreateUser};