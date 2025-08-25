import mongoose from "mongoose";
import User from "../../models/User.js";


export const chatTypeReslover = {
    Message : {
        sender : async(parent)=>{
            if(typeof parent.sender === 'object' && parent.sender._id){
                return parent.sender;  // Already populated
            }
            // if sender is just an id , populate it.
            if(mongoose.connection.readyState === 1){
                return await User.findById(parent.sender)
            }
        }
    },

    User : {
        displayName : (parent)=>{
            return parent.email ? `${parent.username}(${parent.email})`: parent.username
        }
    }
}