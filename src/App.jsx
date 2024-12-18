import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Projects';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react";

function App() {


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Project />
              {/* <RecentBlogs /> */}
              {/* <FunXProjects /> */}
              {/* <Contact /> */}
            </>
          }
        />
        {/* <Route path="/blogs" element={<BlogPage />} /> */}
        {/* <Route path="/2025-birthday-rankings" element={<BirthdayRankings />} /> */}
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
