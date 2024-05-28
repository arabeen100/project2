import { useStoreState } from "easy-peasy"
const Footer = () => {
  const postCount =useStoreState((state)=>state.postCount)
    return (
      <footer className="footer">
          <p> {postCount} Blog posts</p>
      </footer>
    )
  }
  
  export default Footer