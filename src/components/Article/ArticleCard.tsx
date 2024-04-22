import { Card } from "flowbite-react";
import { ArticleInterface } from "../../services/interfaces/Article";
import { Link } from "react-router-dom";
export default function ArticleCard(props: {
  article: ArticleInterface;
  index: number;
}) {
  const { article, index } = props;

  return (
    <>
      <Card
        className="max-w-md"
        imgSrc="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        horizontal
        key={index}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {article.title}
        </h5>
        <p>{article.created_at}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {article.author}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {article.description.substring(0, 125)}...
        </p>
        <Link
          className="p-2 bg-lime-300 hover:bg-lime-500 rounded-md"
          to={`/article/${article.id}`}
        >
          Voir l'article
        </Link>
      </Card>
    </>
  );
}
