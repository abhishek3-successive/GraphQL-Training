import { messageModule } from "../modules/messages/index.js";

export const resolvers = {
    Query : {
        ...messageModule.Query,
    },
    Mutation : {
        ...messageModule.Mutation
    }
}
