import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";
import Test from "./pages/Test";



function App() {
  return (
    <BrowserRouter>
     {/*  <SearchAppBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
