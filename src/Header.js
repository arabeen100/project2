import { FaLaptop,FaMobileAlt,FaTabletAlt } from "react-icons/fa"
import useWindowSize from "./hooks/useWindowSize";
const Header = () => {
  const{width}=useWindowSize();

  return (
    <header className="header">
        <h1 >React JS Blog</h1>
        {width<768?<FaMobileAlt/>
        :width<992?<FaTabletAlt/>
      :<FaLaptop/>}
    </header>
  )
}

export default Header