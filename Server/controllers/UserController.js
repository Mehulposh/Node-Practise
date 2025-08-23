const { response } = require("express");
const UserService = require("../services/UserService");



async function CreateUser(req,res){
   const body = req.body;
    const {name, age,email,password} = body;

    

    try { 
        const response = await UserService.createUser(name,age,email,password);
        
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

async function getAllUsers(req,res){
    try {
        const response = await UserService.getAllUsers();
        res.status(200).json(response);
    } catch (error) {
        res.status(403).json(response)
    }
}


async function getUserById(req,res){
    const params = req.params;
    const id = params.id;
    try {
        const response = await UserService.getUserById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(response);
    }
}

module.exports = {CreateUser,getAllUsers,getUserById};