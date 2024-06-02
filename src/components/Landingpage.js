import React from 'react'
import '../video/HomeVideo.mp4'
import '../LandingPage.css'
import { useNavigate } from "react-router-dom";
 
const Landingpage = () => {
  let history = useNavigate();
  const handleClick = () =>{
    history("/login");
  }
  return (
    <div>
        <div className="video-container d-flex flex-column">
            <video autoPlay muted loop className="background-video">
                <source src={require('../video/v3.mp4')} type="video/mp4" />
            </video>
        </div>
        <div className='overlay'></div>
        <div className="content">
                <h1 style={{fontFamily:'Sedan SC, serif', fontWeight:'400', fontStyle:'normal'}}>Welcome To NoteNimbus</h1>
                <p>Transform the way you take and manage notes with NoteNimbus, the premier online platform designed to enhance your productivity and streamline your workflow.</p>
                <button type="button" class="btn btn-light col-md-3 welcome-button" onClick={handleClick}>Start noting now!</button>
        </div>
    </div>
  )
}

export default Landingpage
