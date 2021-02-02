import Link from "next/Link";

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/articles/demo">
        <a>article</a>
      </Link>
    </nav>
  );
};

export default Header;
