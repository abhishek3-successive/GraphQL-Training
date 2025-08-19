import Message from "../../models/message.js";

export const chatQueryResolver = {
messages: async () => await Message.find().populate("sender"),

}