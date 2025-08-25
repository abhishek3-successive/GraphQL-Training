import { blogModule } from "../modules/blog/index.js";
import { messageModule } from "../modules/messages/index.js";
import { chatModule } from "../modules/chat/index.js";
import { blogModule } from "../modules/blog/index.js";

export const resolvers = {
    Query : {
        ...messageModule.Query,
        ...blogModule.Query,
        ...chatModule.Query
    },
    Mutation : {
        ...messageModule.Mutation,
        ...blogModule.Mutation,
        ...chatModule.Mutation
    },

    Subscription : {
        ...chatModule.Subscribtion
    },


    User: blogModule.User,
    Post: blogModule.Post,
    Comment: blogModule.Comment
}
