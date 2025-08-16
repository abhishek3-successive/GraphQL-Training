import { blogData } from './mockdata.js';
import { createPagination } from './helper/pagination.js';
import { delay } from './helper/delay.js';

export const blogQueryResolvers = {
  userWithLoading : async(_, {id})=>{
    const startTime = Date.now();
    console.log(`Loading user ${id}... (2 sec delay)`);
    await delay(2000);
    const user = blogData.user.find(u => u.id === id);
    const endTime = Date.now();

    console.log(`user ${id} load Successfully in ${endTime - startTime}ms`);
    return user
  },

paginationPost: (_, { sort, page, limit }) => {
  const paginatedPosts = createPagination(blogData.posts, { sort, page, limit });

  return {
    posts: paginatedPosts,
    total: blogData.posts.length
  };
},

  users: () => blogData.user,
  user: (_, { id }) => blogData.user.find(u => u.id === id),
  posts: () => blogData.posts,
  post: (_, { id }) => blogData.posts.find(p => p.id === id)
};


export const blogTypeResolvers = {
  User: {
    posts: (user) => blogData.posts.filter(p => p.authorId === user.id)
  },

  Post: {
  author: (post) => blogData.user.find(u => u.id === post.authorId) || null,
  comments: (post) => blogData.comments.filter(c => c.postId === post.id)
},

Comment: {
  author: (comment) => blogData.user.find(u => u.id === comment.authorId) || null,
  post: (comment) => blogData.posts.find(p => p.id === comment.postId) || null
}
};