import { blogQueryResolvers, blogTypeResolvers } from "./query.js"

export const blogModule = {
    Query: blogQueryResolvers,
    ...blogTypeResolvers
}