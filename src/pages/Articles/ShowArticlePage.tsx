import { useParams } from "react-router-dom";
import { ArticleInterface } from "../../services/interfaces/Article";
import { Badge } from "flowbite-react";

interface ShowArticlePageProps {
  articles: ArticleInterface[];
}
export default function ShowArticlePage(props: ShowArticlePageProps) {
  const { articles } = props;
  const { id } = useParams<{ id: string }>();

  const articleId = id ? parseInt(id, 10) : undefined;

  const article = articles.find((article) => article.id === articleId);
  return (
    <>
      <div className="w-1/2 m-auto">
        <h1 className="text-3xl">{article?.title}</h1>
        <div className=" inline-block">
          <Badge color="info">{article?.author} </Badge>
        </div>
        <p className="font-semibold text-xl text-gray-600 my-6">
          {article?.created_at}{" "}
        </p>
        <p className="bg-gray-50 p-2">{article?.description} </p>
      </div>
    </>
  );
}
