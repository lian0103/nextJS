import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { articleId } = router.query;
  return <h1>add {articleId}</h1>;
};

export default Article;
