import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Meal from './components/Meal'
import Welcome from './components/login/Welcome';
import SignUp from './components/login/SignUp';
import Login from './components/login/Login';
import Home from './components/Home';
import FooderHome from './components/FooderHome';
import FooderProfile from './components/FooderProfile';
import FoodMachineScan from './components/scan/FoodMachineScan';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<FooderProfile />} />

        {/* Scan */}
        <Route path="/home" element={<FooderHome />} />
        <Route path="/scan" element={<FoodMachineScan />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route> */}
      </Routes>
    </Router >
  );
}

export default App;