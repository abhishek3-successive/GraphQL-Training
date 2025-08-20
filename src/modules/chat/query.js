import Message from "../../models/message.js";
import User from "../../models/User.js";

export const chatQueryResolver = {
chatMessages: async () => await Message.find().populate("sender"),
users : async(_,args , context) => {
  if(!context.user){
    throw new Error("unauth")
  }
  return await User.find();
},
user : async(_,{id}) => await User.findById(id)

}