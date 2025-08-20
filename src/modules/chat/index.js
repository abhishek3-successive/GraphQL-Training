import { chatQueryResolver } from "./query.js";
import { chatMutationReslover } from "./mutation.js";
import { subscriptionsReslover } from "./subscribtion.js";
import { chatTypeReslover } from "./typeReslover.js";

export const chatModule = {
    Query : chatQueryResolver,
    Mutation : chatMutationReslover,
    Subscribtion : subscriptionsReslover,
    ...chatTypeReslover
}