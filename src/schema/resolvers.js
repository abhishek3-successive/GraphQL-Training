import { messageModule } from "../modules/messages/index.js";
import { blogModule } from "../modules/Blog/index.js";

export const resolvers = {
    Query : {
        ...messageModule.Query,
        ...blogModule.Query,
    },
    Mutation : {
        ...messageModule.Mutation
    },
    User: {
        ...blogModule.User
    },
    Post: {
        ...blogModule.Post
    },

    Comment: {
        ...blogModule.Comment
    }
}