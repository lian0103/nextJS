import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/AllArticles">
        <a>AllArticles</a>
      </Link>
    </nav>
  );
};

export default Header;
