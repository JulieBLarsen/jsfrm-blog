import Link from 'next/link';

export default function Navbar({ href, text }) {
  return (
    <Link href={href}>
      <a className="nav__link">{text}</a>
    </Link>
  );
}
