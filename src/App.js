import About from "./About";
import Editpost from "./Editpost";
import Home from "./Home";
import Missing from "./Missing";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import { Route,Routes} from "react-router-dom";
import Layout from "./Layout";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";
function App() {
  const setPosts=useStoreActions((actions)=>actions.setPosts)
  const{data,fetchError,isLoading}=useAxiosFetch('http://localhost:3500/posts')
   
     useEffect(()=>{
        setPosts(data)
     },[data,setPosts])
  return (
       
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route  index element={ <Home fetchError={fetchError} isLoading={isLoading}/>} />
            <Route path="/edit/:id" element={<Editpost/>}/>
            <Route path="post">
            <Route  index element={ <Newpost/> }/> 
            <Route  path=":id" element={<Postpage/>}/>
            </Route>
            <Route  path="/about" element={<About />}/>
            <Route  path="*" element={<Missing />} />
            </Route>
          </Routes>
      
    
      
     
  );
}

export default App;
