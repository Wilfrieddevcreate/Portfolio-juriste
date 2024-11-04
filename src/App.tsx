import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import DetailBlog from "./pages/detail-blog";
import CoursPage from "./pages/cours";
import DetailCours from "./pages/detail-cours";
import PublicationsPage from "./pages/publications";
import PublicationDetailPage from "./pages/publication-detail";
import PhotothequePage from "./pages/phototheque";
import ArchivesPage from "./pages/archives";
import ArchiveDocument from "./pages/archive-document";
import ArchivePhoto from "./pages/archive-photo";
import ScrollToTop from "./components/Scrolltop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail/:slug" element={<DetailBlog />} />
        <Route path="/cours" element={<CoursPage />} />
        <Route path="/cours-detail/:slug" element={<DetailCours />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/publication-detail/:slug" element={<PublicationDetailPage />} />
        <Route path="/phototheque" element={<PhotothequePage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/archive-document" element={<ArchiveDocument />} />
        <Route path="/archive-photo" element={<ArchivePhoto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
