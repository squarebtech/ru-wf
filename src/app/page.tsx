import Link from 'next/link';

export const revalidate = 0;

export default async function Home() {
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>new test here</p>
      </div>
      <Link href="/about">About</Link>
      <br />
    </main>
  );
}
