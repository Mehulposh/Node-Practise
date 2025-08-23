const { default: mongoose } = require("mongoose");
const UserModel = require('../models/UserModel');


class UserService{
    static async createUser(name,age,email,password) {
        // Logic to create a user
        const UserObject = UserModel({
                name,
                age,
                email,
                password
            });
        
            try { 
                const response = await UserObject.save();
                
                return response
            } catch (error) {
                return error
            }

    }

    static async getAllUsers(){
        try {
            const response = await UserModel.find({});
            return response
        } catch (error) {
            return error
        }
    }
    static async getUserById(userId) {
        // Logic to get a user by ID
        try {
            const response = await UserModel.findOne(userId);
            return response;
        } catch (error) {
            return error
        }
    }

    static async updateUser(userId, updatedData) {
        // Logic to update a user
    }

    static async deleteUser(userId) {
        // Logic to delete a user
    }
}

module.exports = UserService;