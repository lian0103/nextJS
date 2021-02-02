import indexStyles from "../styles/index.module.css";

export default function Home({ title, data }) {
  console.log(data);

  return (
    <div className={indexStyles.container}>
      <h1>{title}</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Hello Next!",
      description: "it's from getStaticProps",
    },
  };
};
