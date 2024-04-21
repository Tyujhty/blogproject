import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage.tsx";
import BlogPage from "./pages/Blog/BlogPage";
import AddArticlePage from "./pages/Articles/AddArticlePage";
import { useState } from "react";
import { ArticleInterface } from "./services/interfaces/Article";

function App() {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  function handleSubmitArticle(article: ArticleInterface): void {
    setArticles([...articles, article]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage articles={articles} />} />
        <Route path="/blog" element={<BlogPage articles={articles} />} />
        <Route
          path="/article/add"
          element={<AddArticlePage handleSubmitArticle={handleSubmitArticle} />}
        />
      </Routes>
    </>
  );
}

export default App;
