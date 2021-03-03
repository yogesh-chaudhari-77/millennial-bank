const { stubObject } = require("lodash");
const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * User general information document
 * It will have all the basic details about the user - Demographic data
 */

const userProfileSchema = new Schema({
    
    user_id : {
        type : String,
        required : true
    },
    first_name : {
        type : String,
        required : false
    },
    last_name : {
        type : String,
        required : false
    },
    email_address : 
    {
        type : String,
        required : false
    },
    contact_information : {
        type : Array,
        required : false
    }
}, {timestamps : true} );


/**
 * User account login information
 */
const userAccountSchema = new Schema({
    email : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : false
    }
},{timestamps : true});


/**
 * Creating model with the schema
 * Note that collections with given model names will be created automotically for storing documents
 */ 
const userProfile = mongoose.model("userProfile", userProfileSchema);
const userAccount = mongoose.model("userAccount", userAccountSchema);

module.exports = {
    userAccount, userProfile
};