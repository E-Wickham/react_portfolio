import Home from "./components/Home";
import Post from "./components/blog/Post";
import BlogLanding from "./components/blog/BlogLanding";
import Header from "./components/Header"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
        <Router>
          <Routes>
              <Route path="/react_portfolio" element={<Home/>} />
              <Route path="/blog/:postName" element={<Post/>} />
              <Route path="/blog" element={<BlogLanding/>} />
          </Routes>
      </Router>
    </>
    

  );
}

export default App;
