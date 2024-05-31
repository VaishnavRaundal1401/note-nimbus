import React from 'react'
import '../video/HomeVideo.mp4'
import '../LandingPage.css'
 
const Landingpage = () => {
  return (
    <div>
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src={require('../video/v1.mp4')} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Welcome to NoteNimbus</h1>
                <p>Transform the way you take and manage notes with NoteNimbus, the premier online platform designed to enhance your productivity and streamline your workflow.</p>
            </div>
        </div>
    </div>
  )
}

export default Landingpage
