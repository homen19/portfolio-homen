import React from 'react'
import './Intro.css'

export const Intro = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text">
                        <h1 className='first-text'>Hi, <span className='my-name'>Its me</span></h1>
                        <h1 className='mid-text'>Homen Nath</h1>
                        <h1>I am a <span className='role'>Full Stack Developer</span></h1>

                        <br />
                        
                            <i class="fa-brands fa-2x fa-instagram"></i>
                            <i class="fa-brands fa-2x fa-linkedin"></i>
                            <i class="fa-brands fa-2x fa-github"></i><br />
                            <button type="button" class="btn btn-success my-3  ">Download CV</button>
                       

                    </div>
                </div>
            </div>
        </>
    )
}
