import { blogData } from "./mockdata.js";

export const blogmutationResolver = {
    updateUser : (_,{id,input})=>{
        const userIndex = blogData.user.findIndex(u => u.id === id);
        if(userIndex === -1){
            throw new Error(`User with ID ${id} not found `)
        }

        const user = blogData.user[userIndex];
        if(input.name) user.name = input.name;
        if(input.email) user.email = input.email;

        blogData.user[userIndex] = user;
        return user;
    }, 
    createPost : (_, {input})=>{
        const newPost = {
            id : String(blogData.posts.length + 1),
            title : input.title,
            content : input.content,
            authorId : 1,
        };
        blogData.posts.push(newPost);
        return newPost;
    },

    createComment : (_ , {input})=>{
        const post = blogData.posts.find(p=> p.id === input.postId);
        if(!post){
            throw new Error(`Post with Id ${input.postId} not found`)
        }
        const newComment ={
            id : String(blogData.comments.length + 1),
            content : input.content,
            authorId : 1,
            postId : input.postId
        }

        blogData.comments.push(newComment)
        return newComment;
    } ,

    deleteComment : (_, {id})=>{
        const commentIndex = blogData.comments.findIndex(c => c.id === id);

        if (commentIndex === -1){
            throw new Error(`Comment with ID ${id} is not found`)
        }
        blogData.comments.splice(commentIndex,1)

        return true;
    },

    simulateError : ()=>{
        throw new Error(`This is a simulated errro for testing `)
    }
}