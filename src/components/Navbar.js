import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history("/login");
  }

  let location = useLocation();

  return (
    <div className='sticky-top' style={{ "backgroundColor": "#0072fc" }}>
      <nav className="navbar container navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/"><i className="fa-solid fa-book"></i> iNoteBook<sup>&#174;</sup></Link>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}, text-white`} aria-current="page" to="/"><i className="fa-solid fa-house"></i> Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}, text-white`} to="/about"><i className="fa-solid fa-circle-info"></i> About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}, text-white`} to="/contact"><i className="fa-solid fa-address-book"></i> Contact</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/more" ? "active" : ""}, text-white`} to="/more"><i className="fa-solid fa-plus"></i> More</Link>
              </li>
            </ul>

            {!localStorage.getItem('token')?<form className='d-flex'>
            <Link className="btn btn-dark mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-dark mx-1" to="/signup" role="button">Signup</Link>
              </form>: <button onClick={handleLogout} className='btn btn-dark'>Logout</button>}

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
