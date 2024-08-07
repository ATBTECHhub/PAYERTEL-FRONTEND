
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./ui/About"
import Hero from "./ui/Hero"
import Navbar from "./ui/Navbar"


function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
    
  )
}

export default App
