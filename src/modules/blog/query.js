import { blogData } from './mockdata.js';

export const blogQueryResolvers = {
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