import useSwr from "swr";
import aboutStyles from "../styles/about.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const About = () => {
  const { data, error } = useSwr(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>About</h1>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.id} {item.name}
            </h1>
            <p className={aboutStyles.pItem}>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
