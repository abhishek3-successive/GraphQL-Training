import { messages } from "./dataSource.js";

export const messageMutationResolvers = {
  postMessages: (_, { content, author }) => {  // _ context of the post message  parent 
    const newMessage = {
      id: String(messages.length + 1),
      content,
      author,
      createdAt: new Date().toISOString(),
    };
    messages.push(newMessage);
    return newMessage;
  },
};