const express = require("express")
const { default: mongoose } = require("mongoose")

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        require: true
    },
    StudentName: {
        type: String,
        require: true
    },
    StudentPhoneNumber: {
        type: Number,
        require: true
    },
    Day1: {
        type: String,
        require: true
    },
    Department: {
        type: String,
        require: true
    }
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;