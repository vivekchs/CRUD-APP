const mongoose1 = require('mongoose');
const validator = require('validator')
const userschema = new mongoose1.Schema({
    name: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength:10
        
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    hobbies: {
        "description": "Hobbies of the employee",
        "type": "string",
        // "properties": {
        //     "indoor": {
        //         "type": "array",
        //         "items": {
        //             "description": "List of indoor hobbies",
        //             "type": "string"
        //         }
        //     },
        //     "outdoor": {
        //         "type": "array",
        //         "items": {
        //             "description": "List of outdoor hobbies",
        //             "type": "string"
        //         }
        //     }
        // }
    }
   
});
module.exports=mongoose1.model('itstudio', userschema);