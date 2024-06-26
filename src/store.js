import { createStore,action,thunk,computed } from "easy-peasy";
import api from './api/posts'
export default createStore({
   posts:[],
   setPosts:action((state,payload)=>{
     state.posts= payload
   }),
   postTitle:'',
   setPostTitle:action((state,payload)=>{
     state.postTitle= payload
   }),
   postBody:'',
   setPostBody:action((state,payload)=>{
     state.postBody= payload
   }),
   editTitle:'',
   setEditTitle:action((state,payload)=>{
     state.editTitle= payload
   }),
   editBody:'',
   setEditBody:action((state,payload)=>{
     state.editBody= payload
   }),
   search:'',
   setSearch:action((state,payload)=>{
     state.search= payload
   }),
   searchResult:[],
   setSearchResult:action((state,payload)=>{
     state.searchResult= payload
   }),
   postCount:computed((state)=>state.posts.length),
   getPostById:computed((state)=>{
    return (id)=> state.posts.find(post=>post.id.toString()===id)
   }),
   savePost:thunk(async(actions,myNewPost,helpers)=>{
     const {posts}= helpers.getState();
     try{
        const response=await api.post('/posts',myNewPost)
      const allPosts=[...posts,response.data]
      actions.setPosts(allPosts)
      actions.setPostBody('')
      actions.setPostTitle('')
      }catch(err){
        console.log(`Error:${err.message}`)
      }
   }),
   deletePost:thunk(async(actions,id,helpers)=>{
    const {posts}= helpers.getState();
    try{
        await api.delete(`/posts/${id}`)
      const listPosts=posts.filter(post=> post.id!==id);
      actions.setPosts(listPosts);
      }catch(err){
        console.log(`Error:${err.message}`)
      }
   }),
   editPost:thunk(async(actions,updatedPost,helpers)=>{
    const {posts}= helpers.getState();
    const{id}=updatedPost;
    try {
        const response= await api.put(`/posts/${id}`,updatedPost)
        actions.setPosts(posts.map(post=> post.id===id?{...response.data}:post))
        actions.setEditTitle('')
        actions.setEditBody('')
      } catch (err) {
        console.log(`Error:${err.message}`)
      }
   })
})