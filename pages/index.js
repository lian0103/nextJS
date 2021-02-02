import indexStyles from "../styles/index.module.css";

export default function Home({ title, data }) {
  console.log(data);

  return (
    <div className={indexStyles.container}>
      <h1>{title}</h1>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.id} {item.name}
            </h1>
            <p className={indexStyles.pItem}>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchData = await res.json();

  return {
    props: {
      data: fetchData,
      title: "Hello Next!",
      description: "it's from getStaticProps",
    },
  };
};
