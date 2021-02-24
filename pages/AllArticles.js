import useSwr from "swr";
import aboutStyles from "../styles/about.module.css";
import Link from "next/link";
import { dataUri, fetcher } from "../utils/dataUtils";

const AllArticles = () => {
  const { data, error } = useSwr(dataUri, fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <div className={aboutStyles.list}>
      <h1>Users</h1>
      {data?.map((item) => {
        const hrefId = "/articles/" + item.id;
        return (
          <div key={item.id} className={aboutStyles.listItem}>
            <h2>
              <Link href={hrefId}>
                <a>{item.name}</a>
              </Link>
            </h2>
            <p className={aboutStyles.pItem}>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllArticles;
