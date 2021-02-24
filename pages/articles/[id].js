import { dataUri, dataUriPosts } from "../../utils/dataUtils";

export const getStaticPaths = async () => {
  const res = await fetch(dataUri);
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(dataUriPosts + "/" + id);
  const data = await res.json();

  return {
    props: { data, id },
  };
};

const Article = ({ data, id }) => {
  console.log(data);
  return (
    <div>
      <h1>articleId: {id}</h1>
      <p>title:{data?.title}</p>
      <div>{data?.body}</div>
    </div>
  );
};

export default Article;
