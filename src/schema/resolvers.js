import { blogModule } from "../modules/blog/index.js";
import { messageModule } from "../modules/messages/index.js";

export const resolvers = {
    Query : {
        ...messageModule.Query,
        ...blogModule.Query
    },
    Mutation : {
        ...messageModule.Mutation,
        ...blogModule.Mutation
    },
    User: blogModule.User,
    Post: blogModule.Post,
    Comment: blogModule.Comment
}
