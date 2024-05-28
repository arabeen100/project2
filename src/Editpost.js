import { useEffect} from "react"
import { useNavigate,useParams,Link } from 
"react-router-dom"
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
const Editpost = () => {
  const navigate=useNavigate()
  const editPost=useStoreActions((actions)=>actions.editPost)
  const editTitle=useStoreState((state)=>state.editTitle)
  const posts=useStoreState((state)=>state.posts)
  const editBody=useStoreState((state)=>state.editBody) 
  const setEditTitle=useStoreActions((actions)=>actions.setEditTitle)
  const setEditBody=useStoreActions((actions)=>actions.setEditBody)
  const handleEdit=(id)=>{
    const datetime=format(new Date(),'MMMM dd, yyyy pp')
    const updatedPost={id,title:editTitle,datetime,body:editBody}
    editPost(updatedPost);
    navigate(`/post/${id}`)
  }

    const {id}=useParams()
    const post=posts.find(post=> (post.id).toString()===id)
    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post,setEditTitle,setEditBody])
  
  return (
    <main className="post">
        {editTitle &&
        <>
        <h2 className="newpost">Edit post</h2>
        <form  className='postform'onSubmit={(e)=>e.preventDefault()}>
        <label className="la" htmlFor="title">
            Title:

        </label>
        <input required
        
            autoFocus
            id="title"
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}/>
            <label htmlFor="body" className="la">Body:</label>
            <textarea required
            
            id="body"
            cols='30'
            rows='10'
            value={editBody}
            onChange={(e)=>setEditBody(e.target.value)}/>
            <button className='submit'type="submit"onClick={()=>handleEdit(post.id)}>Submit</button>

        </form>
        </>}
        {!editTitle&&
          <>
            <h2>Post not found</h2>
            <p>Well,that's dissappointing</p>
            <p><Link to='/'className="linkhome">Visit our home page</Link></p>
          </>
        }
    </main>
  )
}

export default Editpost