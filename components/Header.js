import Link from 'next/link';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
