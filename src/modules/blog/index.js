import { blogmutationResolver } from "./mutation.js"
import { blogQueryResolvers, blogTypeResolvers} from "./query.js"

export const blogModule = {
    Query: blogQueryResolvers,
    Mutation : blogmutationResolver,
    User : blogTypeResolvers.User,
    Post : blogTypeResolvers.Post,
    Comment : blogTypeResolvers.Comment
}