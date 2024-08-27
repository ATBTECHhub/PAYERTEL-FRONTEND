<<<<<<< HEAD

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./ui/About"
import Hero from "./ui/Hero"
import Navbar from "./ui/Navbar"
import Values from "./ui/Values"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
=======
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
>>>>>>> f8c371247cb9dc7791c9c22bafe087764987398d

function App() {
  return (
<<<<<<< HEAD
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='/register' element={<Signup/>} />
            {/* <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
            
              <Route path="account" element={<AccountSettings />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route> */}
            {/* <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            
          
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
    
  )
=======
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
>>>>>>> f8c371247cb9dc7791c9c22bafe087764987398d
}

export default App;
