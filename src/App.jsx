import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import Bootcamp from "./Pages/Bootcamp";
import Contact from "./Pages/Contact";
import Hire from "./Pages/Hire";
const MinibootCamp = lazy(()=>import("./Pages/MinibootCamp")) ;
const Home = lazy(()=> import('./Pages/Home'))

function App() {

  return (
    <>
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mini-bootcamp" element={<MinibootCamp/>}/>
          <Route path="/bootcamp" element={<Bootcamp/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/hire-from-us" element={<Hire/>}/>
        </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
