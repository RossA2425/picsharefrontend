import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const ViewPhotos = () => <h1>View Photos</h1>;

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">View Photos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ViewPhotos />} />
      </Routes>
    </div>
  );
};

export default App;
