import React, { lazy } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import WhatsAppButton from './components/WhatsAppButton'


// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Qualification from './components/Qualification'
// import Contact from './components/Contact'
// import Projects from './components/Projects'

const Navbar = lazy(()=>import("./components/Navbar"))
const Home = lazy(()=>import("./components/Home"))
const About = lazy(()=>import("./components/About"))
const Qualification = lazy(()=>import("./components/Qualification"))
const Contact = lazy(()=>import("./components/Contact"))
const Projects = lazy(()=>import("./components/Projects")) 
// const WhatsApp = lazy(()=>import ("./components/WhatsAppButton"))

function App() {
  return (
    <>
    

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/qualification" element={<Qualification/>}/>  
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
       
      </Routes>
       {<WhatsAppButton/>}

    </BrowserRouter>
    

    </>
  )
}
export default App

