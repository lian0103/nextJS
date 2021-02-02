import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const About = () => {
  const { data, error } = useSwr("/api/user", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>About</h1>
      {data?.map((item) => {
        return (
          <h1 key={item.id}>
            {item.id} {item.name}
          </h1>
        );
      })}
    </div>
  );
};

export default About;
