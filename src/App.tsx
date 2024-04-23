import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage.tsx";
import BlogPage from "./pages/Blog/BlogPage";
import AddArticlePage from "./pages/Articles/AddArticlePage";
import { useEffect, useState } from "react";
import { ArticleInterface } from "./services/interfaces/Article";
import ShowArticlePage from "./pages/Articles/ShowArticlePage.tsx";

function App() {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  function handleSubmitArticle(article: ArticleInterface): void {
    const updateArticles = [...articles, article];
    setArticles(updateArticles);
    localStorage.setItem("articles", JSON.stringify([...articles, article]));
  }

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  }, []);

  //localStorage.clear();

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

        <Route
          path="/article/:id"
          element={<ShowArticlePage articles={articles} />}
        />
      </Routes>
    </>
  );
}

export default App;
