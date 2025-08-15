export const blogData = {
  user: [
    { id: "1", name: "Goku" , email : "GG@gmail.com"},
    { id: "2", name: "Vegeta", email : "GG1@gmail.com" }
  ],
  posts: [
    { id: "1", title: "DragonBallZ", content: "Journey of Goku", authorId: "1" },
    { id: "2", title: "Demon Slayer", content: "Journey of Tanjiro Kamado", authorId: "2" }
  ],
  comments: [
    { id: "1", content: "Great post!", postId: "1", authorId: "2" },
    { id: "2", content: "Loved it!", postId: "1", authorId: "1" }
  ]
};
