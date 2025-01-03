import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

    const {user, signOutUser}= useContext(AuthContext);
    console.log(user);
    const handleSignout=()=>{
      signOutUser()
      .then(()=>{
        console.log('user sign out successfully');
      })
      .catch(error=>{
        console.log('Error:', error.message);
      })
    }
  

    const links =<>
        <NavLink to='/'>Home</NavLink>
        <NavLink className='mx-4' to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
       {
        user &&  <NavLink className='mx-4' to='/order'>Orders</NavLink>
       }
       <NavLink className='ml-4' to='/profile'>Profile</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Authentication</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ?<>
    <p>{user?.email}</p>
    <button className="ml-6 bg-teal-500 px-4 py-1 rounded-2xl text-lg font-semibold" onClick={handleSignout}>Logout</button>
    </> : <Link className="ml-6 bg-teal-500 px-4 py-1 rounded-2xl text-lg font-semibold" to='/login'>Login</Link>
   }
  </div>
</div>
    );
};

export default Navbar;