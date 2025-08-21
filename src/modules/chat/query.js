import Message from "../../models/message.js";
import User from "../../models/User.js";

export const chatQueryResolver = {
chatMessages: async () => await Message.find().populate("sender"),
users : async(_,args , context) => {
  if(!context.user){
    throw new Error("unauth")
  }
  if(!context.user.role != "admin"){
    throw new Error("Forbidden : Admin only")
  }
  return await User.find();
},
user : async(_,{id}) => await User.findById(id)

}