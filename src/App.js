import Home from "./pages/home/Home";
import Topbar from "./components/topbar/TopBar";
import Citizen from "./pages/citizen/Citizen";
import Login from "./pages/login/Login"
import Settings from "./pages/settings/Settings";
import Header from "./components/header/Header";
import Cregister from "./pages/cregister/Cregister";
import Rregister from "./pages/rregister/Rregister";
import React from "react";
import RequireAuth from "./components/RequireAuth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  const user=false;
  return (
    
    <Router>
      <Topbar />
      <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
      </Routes>
      <Routes>
          <Route path="/cregister" element={<Cregister/>}></Route>

      </Routes>
      <Routes>
          <Route path="/rregister" element={<Rregister/>}></Route>

      </Routes>
      <Routes>
          <Route path="/login" element={<Login/>}>
          </Route>
      </Routes>
      <Routes>
          <Route path="/citizen" element={<Citizen/>}>
          </Route>
      </Routes>
      <Routes>
          <Route path="/settings" element={<Settings/>}>
          </Route>
      </Routes>
      {/* <Cregister/> */}
      
    </Router>
  );
}

export default App;
