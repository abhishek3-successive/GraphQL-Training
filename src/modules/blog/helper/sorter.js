export const sortPost = (post , sort)=>{
if(!sort) return post;

return[...post].sort((a, b)=>{
    if(sort === 'title'){
        return a.title.localeCompare(b.title); //AtoZ
    }
    return 0;
})
}