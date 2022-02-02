import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Test from "./pages/Test";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/*  <SearchAppBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
