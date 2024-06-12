import React  from 'react'
import {Link} from "react-router-dom";
import { useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import noteNimbusLogo from '../images/Note-Nimbus.png';

function Navbar() {
  let history = useNavigate();
  
  const handleLogout = () =>{
    localStorage.removeItem('token');
    history('/login');
  }
  let location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  return (
    <nav className={`navbar navbar-expand-lg ${isLandingPage ? 'navbar-transparent' : 'navbar-dark bg-dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:'white', fontFamily:"Kalam, cursive", fontWeight:'600', fontStyle:'normal', fontSize:'1.5rem'}}> NoteNimbus</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home"? "active": " " }`} aria-current="page" to="/home" style={{color:'white', fontSize:'1.2rem'}}>Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active": " " }`} to="/about" style={{color:'white', fontSize:'1.2rem'}}>About</Link>
        </li> */}
      </ul>
      {!localStorage.getItem('token')? <form className="d-flex">
      <Link className={`btn btn-success mx-2 ${isLoginPage? 'd-none':''}`} to='/login' role="button">Login</Link>
      <Link className="btn btn-outline-danger mx-2" to='/signup' role="button" style={{borderColor:'white', color:'white'}}>Sign Up</Link>
      </form>: <button onClick={handleLogout} className='btn btn-outline-danger'>Logout</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar
