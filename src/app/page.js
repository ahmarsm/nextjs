import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/products/101">iPhone 17</Link>
          </li>

          <li>
            <Link href="/products/102">Samsung Galaxy</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
