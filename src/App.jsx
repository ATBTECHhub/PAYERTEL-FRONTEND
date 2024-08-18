
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./ui/About"
import Hero from "./ui/Hero"
import Navbar from "./ui/Navbar"
import Values from "./ui/Values"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='dashboard' element={<Dashboard/>} />
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
}

export default App
