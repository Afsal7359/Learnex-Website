import React, { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import './App.css'
const Refund = lazy(()=> import("./Pages/Terms/Refund"));
const Privacy = lazy(()=>import("./Pages/Terms/Privacy"));
const Terms = lazy(()=>import("./Pages/Terms/Terms"));
// const Terms = lazy(()=> import("./Pages/Terms"));
const Hire = lazy(()=> import("./Pages/Hire")); 
const Contact = lazy(()=> import ("./Pages/Contact"));
const Bootcamp = lazy(()=>import("./Pages/Bootcamp"))
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
          <Route path="/termsandconditions" element={<Terms/>}/>
          <Route path="/refundandcancellation" element={<Refund/>}/>
          <Route path="/privacypolicy" element={<Privacy/>}/>

        </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
