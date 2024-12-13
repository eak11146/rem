import React from 'react'
import { Link } from 'react-router-dom'
 
function NavBar() {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    
    <>
    <nav className="navbar">
      <div className="container  mx-auto justify-center   md:max-w-[95%]  lg:max-w-[70%] p-3">

     <div className='flex justify-between'> 

        <div className="logo"> 
         <a href="/" >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Logo
            </span>
          </a>
        </div> 

        <div className="menu-icon" onClick={handleShowNavbar}>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>
        </div> 
       

        <div className={`nav-elements  ${showNavbar && "active"}  `}>
          <ul className=" ">
            <li>
              <Link to="/">Home</Link>
            </li> 
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
          <ul style={{ paddingLeft:'30px'}}>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </ul>
        </div>{/*  menu */}

       </div> 

        
      </div>
    </nav>
    </>
  )
}

export default NavBar
