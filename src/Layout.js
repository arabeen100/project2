import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"
import { useStoreState } from "easy-peasy";
import { useStoreActions } from "easy-peasy";
const Layout = () => {
 const search =useStoreState((state)=>state.search)
 const setSearch =useStoreActions((actions)=>actions.setSearch)
  return (
    <div className="App">
        <Header />
        <Nav search={search}
        setSearch={setSearch}
        />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout