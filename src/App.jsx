import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Home Page</h1>
    <hr />
    <div className="card">
      <div className="card-body">
        <h2>Welcome to Pic Share!</h2>
        <div className="fs-3 text-muted">
          First time here? Pic Share is all about sharing images with those you
          love. Holiday Snaps? Family Dinner? You name it, Pic Share has it.
        </div>
      </div>
    </div>
    <div className="mt-3 card">
      <div className="card-body">
        <h2>
          The Grid
          <span className="fs-4 text-muted"> - our most recent posts</span>
        </h2>
      </div>
    </div>
  </>
);
const ViewPhotos = () => <h1>View Photos</h1>;

const App = () => {
  return (
    <div>
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          <div className="navbar-brand navbar-brand-autodark pe-0 pe-md-3">
            <div href="/">Pic Share</div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/photos" className="nav-item nav-link">
                View Photos
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="page-wrapper">
        <div className="container-xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<ViewPhotos />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
