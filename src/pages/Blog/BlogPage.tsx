import ArticleCard from "../../components/Article/ArticleCard";
import { ArticleInterface } from "../../services/interfaces/Article";

export default function BlogPage(props: { articles: ArticleInterface[] }) {
  const { articles } = props;

  return (
    <>
      <div className="h-full flex flex-col items-center mt-8">
        <h1 className=" text-3xl">Blog</h1>
        <div className="flex gap-4 mt-10 justify-center flex-wrap">
          {[...articles]
            .reverse()
            .map((article: ArticleInterface, index: number) => (
              <ArticleCard article={article} key={index} index={index} />
            ))}
        </div>
      </div>
    </>
  );
}
