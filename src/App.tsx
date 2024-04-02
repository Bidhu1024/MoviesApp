

import { lazy, Suspense } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Home = lazy(() => import('./components/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const Trailer = lazy(() => import('./components/Trailer'));

function App() {
  



  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trailers" element={<Trailer />} />
        </Routes>
      </Router>
      </Suspense>
    </>
  );
}

export default App;
