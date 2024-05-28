import Feed from "./Feed"
import { useStoreState } from "easy-peasy";
const Home = ({fetchError,isLoading}) => {
  const searchResult=useStoreState((state)=>state.searchResult);
  const posts=useStoreState((state)=>state.posts)
    return (
      <main className="home">
        {isLoading &&<p> Loading posts ...</p> }
         {!isLoading && fetchError && <p style={{color:"red"}}>Error:{fetchError}</p>}
         {!isLoading && !fetchError  && (posts.length?<Feed posts={searchResult}/>:<p style={{marginTop:"1rem"}}>No posts to display</p>)}
        
      </main>
    )
  }
  
  export default Home