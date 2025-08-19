import User from "../../models/User.js";
import Message from "../../models/message.js";

export const chatMutationReslover = {
    async addUser(_, { username, email }) {
      const user = new User({ username, email });
      await user.save();
      return user;
  },

  sendMessage: async (_, { content, sender }, {pubsub}) => {
   const message = await Message.create({ content, sender });

      const payload = {
        id: message._id.toString(),
        content: message.content,  // ✅ must exist
        sender: message.sender,
        createdAt: message.createdAt.toISOString(),
      };

      // publish for subscriptions
      await pubsub.publish("MESSAGE_SENT", { messageSent: payload });

      return payload;
  },


  setUserOnline: async (_, { userId }, {pubsub}) => {
    const user = await User.findByIdAndUpdate(
      userId,
      { isOnline: true },
      { new: true }
    );
    await pubsub.publish("USER_STATUS_CHANGED", { userStatusChanged: user });
    return user;
  },

  setUserOffline: async (_, { userId }, {pubsub}) => {
    const user = await User.findByIdAndUpdate(
      userId,
      { isOnline: false },
      { new: true }
    );
    await pubsub.publish("USER_STATUS_CHANGED", { userStatusChanged: user });
    return user;
  },
}