import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Articles from "./pages/articles";
import PostDetail from "./pages/post-detail";
import Posts from "./pages/post";
import TagPage from "./pages/tag";
import { GitHubUserReposList } from "./pages/repo";
import BooksPage from "./pages/books";
import "highlight.js/styles/github.css"

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar/>
        <div className="container">
          <div className="Content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:slug" element={<PostDetail />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/articles" element={<Articles/>} />
              <Route path="/tags/:tag" element={<TagPage />} />
              <Route path="/repos" element={<GitHubUserReposList username="jakxel" />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;