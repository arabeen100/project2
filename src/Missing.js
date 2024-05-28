import { Link } from "react-router-dom"
const Missing = () => {
    return (
      <main className="missing">
           <h2>Post not found</h2>
            <p>Well,that's dissappointing</p>
            <p><Link to='/'className="linkhome">Visit our home page</Link></p>
      </main>
    )
  }
  
  export default Missing