import './App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import Footer from './Components/Footer';
import Home from './Pages/Home.js';
import Welcome from './Pages/Welcome.js';
import Serve from './Pages/Serve.js';
import Give from './Pages/Give.js';
import Ministries from './Pages/Ministries.js';

export default function App() {
  return (
    <Router>
    <main className="main-page">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Serve" element={<Serve />}></Route>
          <Route exact path="/Give" element={<Give />}></Route>
          <Route exact path="/Welcome" element={<Welcome />}></Route>
          <Route exact path="/Ministries" element={<Ministries />}></Route>
        </Routes>
      </div>
      <Footer />
    </main>
  </Router>
  );
}