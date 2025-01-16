import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update import for v6
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Buy from "./pages/Buy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Wanted from "./pages/Wanted";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          {/* Use the 'element' prop with JSX for each route */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/wanted" element={<Wanted />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
