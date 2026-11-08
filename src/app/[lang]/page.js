import Link from "next/link";
import Image from "next/image";
import Counter from "../components/Counter";
import { notFound } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

const dictionaries = { en, ar };

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = dictionaries[lang];

  if (!dictionary) {
    notFound();
  }

  return (
    <main>
      <h1>{dictionary.home}</h1>

      <Counter />

      <Image
        src="/images/product.jpg"
        alt="Product"
        width={400}
        height={300}
      />

      <nav>
        <ul>
          <li>
            <Link href={`/${lang}`}>Home</Link>
          </li>

          <li>
            <Link href={`/${lang}/about`}>{dictionary.about}</Link>
          </li>

          <li>
            <Link href={`/${lang}/products/101`}>iPhone 17</Link>
          </li>

          <li>
            <Link href={`/${lang}/products/102`}>Samsung Galaxy</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}