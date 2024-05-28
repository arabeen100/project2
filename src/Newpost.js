import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { format } from "date-fns";


const Newpost = () => {
  const savePost=useStoreActions((actions)=>actions.savePost)
  const postTitle=useStoreState((state)=>state.postTitle)
  const posts=useStoreState((state)=>state.posts)
  const postBody=useStoreState((state)=>state.postBody)
  const setPostTitle=useStoreActions((actions)=>actions.setPostTitle)
  const setPostBody=useStoreActions((actions)=>actions.setPostBody)
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const id= (posts.length)?posts[(posts.length)-1].id+1:1;
    const datetime=format(new Date(),'MMMM dd, yyyy pp')
    const myNewPost={id,title:postTitle,datetime,body:postBody}
    savePost(myNewPost)
    navigate('/')


  }
    return (
      <main className="post">
          <h2 className="newpost">New post</h2>
          <form  className='postform'onSubmit={handleSubmit}>
            <label className="la" htmlFor="title">
              Title:

            </label>
            <input required
             
              autoFocus
              id="title"
              value={postTitle}
              onChange={(e)=>setPostTitle(e.target.value)}/>
              <label htmlFor="body" className="la">Body:</label>
              <textarea required
              
              id="body"
              cols='30'
              rows='10'
              value={postBody}
              onChange={(e)=>setPostBody(e.target.value)}/>
              <button className='submit'type="submit">Submit</button>

          </form>
      </main>
    )
  }
  
  export default Newpost