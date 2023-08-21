import { Outlet, Link, redirect } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
        <div> <Link to="/"  style={{textDecoration:'none'}} className="navItem">Home</Link></div>
        <div> <Link to="/blogs" style={{textDecoration:'none'}}  className="navItem">Blogs</Link></div>
        <div> <Link to="/contact" style={{textDecoration:'none'}} className="navItem" >Contact</Link></div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;