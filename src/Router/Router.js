import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { About } from '../Pages/About/About';
import { Projects } from '../Pages/Projects/Projects';
import { Education } from '../Pages/Education/Education';
import { Intro } from '../Pages/Intro/Intro';
import { Landing } from '../Pages/Landing/Landing';

export const Router = () => {
  return (
    <>
        
        <Routes>
            <Route path='/' element={ <Landing /> }>

                <Route path='/' element={ <Intro /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/education' element={ <Education /> } />
            </Route>
            <Route path='/About' element={<About />} />
        </Routes>

    </>
  )
}
