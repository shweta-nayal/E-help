import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Lawyers from './components/Lawyers'
import SignIn from './components/SignIn'
// import SignInForm from './components/SignInForm'
import Login from './components/Login'
import Profile from './components/Profile'
import LawyerList from './components/LawyerList';
import LawyerProfile from './components/LawyerProfile';

const App = () => {
  return (
    <Router>
       {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/user" element={<SignInForm userType="User" />} />
          <Route path="/signin/professional" element={<SignInForm userType="Professional" />} /> */}
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/lawyers/:category" element={<LawyerList />} />
          <Route path="/lawyer/:name" element={<LawyerProfile />} />
        </Routes>

      {/* <main className= "overflow-x-hidden bg-white text-dark">
      
        <Hero/>
        <Services/>
        <Footer/> 
        <Navbar/>
        <Lawyers/>

        
      </main> */}
    </Router>
  )
}

export default App
