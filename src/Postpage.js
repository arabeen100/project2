import { useParams,Link} from 
"react-router-dom"
import { useStoreActions, useStoreState } from "easy-peasy";
const Postpage = () => {
  const deletePost=useStoreActions((actions)=>actions.deletePost)
  const {id}=useParams() 
  const getPostById=useStoreState((state)=>state.getPostById)
  const post=getPostById(id)
  const handleDelete= (id)=>{
       deletePost(id)
  }
   
    return (
      <main className="postb">
        {post&& (
          <article>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="edit">Edit post</button></Link>
            <button  className="delete" onClick={()=>handleDelete(post.id)}> Delete post </button>
          </article>
        )}
        {!post&&(
          <article>
            <h2>Post not found</h2>
            <p>Well,that's dissappointing</p>
            <p><Link to='/'className="linkhome">Visit our home page</Link></p>

          </article>
        )}
          
      </main>
    )
  }
  
  export default Postpage