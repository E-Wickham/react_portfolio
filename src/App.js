import Home from "./components/Home";
import Post from "./components/blog/Post";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/react_portfolio" element={<Home/>} />
          <Route path="/blog/:postName" element={<Post/>} />
          {/* CREATE SINGLE POST ROUTE*/}
      </Routes>
    </Router>

  );
}

export default App;
