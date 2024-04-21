import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage.tsx";
import BlogPage from "./pages/Blog/BlogPage";
import AddArticlePage from "./pages/Articles/AddArticlePage";
import { useState } from "react";
import { ArticleInterface } from "./services/interfaces/Article";
import { MessageInterface } from "./services/interfaces/Message.ts";

function App() {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  function handleSubmitArticle(article: ArticleInterface): void {
    setArticles([...articles, article]);
  }

  const [messages, setMessages] = useState<MessageInterface[]>([]);

  function handleSubmitMessage(message: MessageInterface): void {
    setMessages([...messages, message]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              articles={articles}
              messages={messages}
              handleSubmitMessage={handleSubmitMessage}
            />
          }
        />
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
