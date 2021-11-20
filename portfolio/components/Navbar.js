import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div>
        <Link href='/About'><a>About</a></Link>
        <Link href='/Home'><a>Home</a></Link>
      </div>
    </nav>
  );
}

export default Navbar;