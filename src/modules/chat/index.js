import { chatQueryResolver } from "./query.js";
import { chatMutationReslover } from "./mutation.js";
import { subscriptionsReslover } from "./subscribtion.js";

export const chatModule = {
    Query : chatQueryResolver,
    Mutation : chatMutationReslover,
    Subscribtion : subscriptionsReslover
}