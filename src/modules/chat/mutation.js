import User from "../../models/User.js";
import Message from "../../models/message.js";
import { generateTokken } from "../../utils/auth.js";

export const chatMutationReslover = {
  addUser: async (_, { username, email, role }) => {
    const user = new User({ username, email, role });
    await user.save();
    return user;
  },
  loginUser: async (_, { username }) => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error(`user not found`);
    }

    const tokken = generateTokken(user);

    return { tokken, user };
  },

  sendMessage: async (_, { content, sender }, { pubsub }) => {
    const message = await Message.create({ content, sender });
    await message.populate("sender");
    const payload = {
      id: message._id.toString(),
      content: message.content,
      sender: message.sender,
      createdAt: message.createdAt.toISOString(),
    };

    // publish for subscriptions
    await pubsub.publish("MESSAGE_SENT", { messageSent: payload });

    return payload;
  },

  setUserOnline: async (_, { userId }, { pubsub }) => {
    const user = await User.findByIdAndUpdate(
      userId,
      { isOnline: true },
      { new: true }
    );
    await pubsub.publish("USER_STATUS_CHANGED", { userStatusChanged: user });
    return user;
  },

  setUserOffline: async (_, { userId }, { pubsub }) => {
    const user = await User.findByIdAndUpdate(
      userId,
      { isOnline: false },
      { new: true }
    );
    await pubsub.publish("USER_STATUS_CHANGED", { userStatusChanged: user });
    return user;
  },

  deleteUser: async (_, { id, id2 }) => {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role != "admin") {
      throw new Error("Unauthorized");
    }
    await User.findByIdAndDelete(id2);
    return true;
  },
};
