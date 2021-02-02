import "../styles/global.css";
import Meta from "../comps/Meta";
import Layout from "../comps/Layout";

function MyApp({ Component, pageProps }) {
  //   console.log(pageProps);
  const { title, description } = pageProps;
  return (
    <>
      <Meta title={title || false} description={description || false} />
      <Layout content={<Component {...pageProps} />}></Layout>
    </>
  );
}

export default MyApp;
