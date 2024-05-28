import { useStoreActions,useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { Link } from "react-router-dom"
const Nav = ({search,setSearch}) => {
  const setSearchResult=useStoreActions((actions)=>actions.setSearchResult);
  const posts=useStoreState((state)=>state.posts)
  useEffect(()=>{
    const postsResult=posts.filter(post=>(((post.title).toLowerCase()).includes(search.toLowerCase()))||(((post.body).toLowerCase()).includes(search.toLowerCase())))
    setSearchResult(postsResult.reverse())


  },[posts,search,setSearchResult])
    return (
      <nav>
          <form className="form" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search"className="slabel">search:</label>
            <input id="search"
            type="text"
            placeholder="search posts"
            required
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>


          </form>
          <ul>
            <li> <Link to='/' className="link">Home</Link> </li>
            <li> <Link to='/post'className="link">Post</Link> </li>
            <li> <Link to='/about'className="link">About</Link> </li>
           

          </ul>
       
      </nav>
    )
  }
  
  export default Nav