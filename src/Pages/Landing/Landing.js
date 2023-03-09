import React from 'react'
import { Outlet } from 'react-router-dom'
import profile from '../../Assets/Images/profile.png'
export const Landing = () => {
  return (
    <>
    <div className="container">
        <div className="row my-3">
          <div className="col-md-8 one">
          
            <Outlet />
          </div>
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-4 two">
            <div className='text-center'>
              <img src={profile} alt="" />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
