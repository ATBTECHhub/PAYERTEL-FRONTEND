import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<ComingSoon />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
