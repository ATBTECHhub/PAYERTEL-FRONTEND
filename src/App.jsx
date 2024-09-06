import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Airtime from "./pages/Airtime";
import Cabletv from "./pages/Cabletv";
import Cash from "./pages/Cash";
import Profile from "./pages/Profile"
import Password from "./pages/Password"
import Verification from "./pages/Verification"
import Databundle from "./pages/Databundle";
import Electricity from "./pages/Electricity";
import User from "./pages/User";
import Accdetails from "./pages/Accdetails";
import Sumreview from "./pages/Sumreview";
import Admindash from "./pages/Admindash";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<ComingSoon />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
     <Route path="user" element={<User/>} />
      <Route path="airtime" element={<Airtime />} />
    <Route path="cabletv"element={<Cabletv/>}/>
    <Route path="cash"element={<Cash/>}/>
    <Route path="databundle"element={<Databundle/>}/>
    <Route path="electricity"element={<Electricity/>}/>
    <Route path="profile"element={<Profile/>}/>
    <Route path="password"element={<Password/>}/>
    <Route path="verification"element={<Verification/>}/>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="Accdetails" element={<Accdetails/>} />
      <Route path="Sumreview" element={<Sumreview/>} />
      <Route path="Admindash" element={<Admindash/>} />
    </Routes>
  );
}

export default App;
