import Link from "next/link";

function HomePage() {

  const paths = ['portafolio', 'client', 'Items'];

  return (
    <div>
      <h1>Transformers Cards App</h1>
      <ul>
        {paths.map((p, i) =>
          <li key={p + i} >
            <Link href={`/${p}`} >{p.substring(0, 1).toUpperCase() + p.substring(1)}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default HomePage;