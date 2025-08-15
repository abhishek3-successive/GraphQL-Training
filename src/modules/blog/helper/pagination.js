export const createPagination = (item , args={} )=>{
   const { sort, page = 1, limit = 10 } = args;
  
  // apply sorting
  let postsData = [...allPosts];
  if (sort) {
    postsData.sort((a, b) => a[sort].localeCompare(b[sort]));
  }

  // apply pagination
  const offset = (page - 1) * limit;
  const paginatedPosts = postsData.slice(offset, offset + limit);

  return paginatedPosts;
}