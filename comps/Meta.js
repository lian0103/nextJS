import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "My Next Page",
  keywords: "react , ssr",
  description: "hello world",
};

export default Meta;
