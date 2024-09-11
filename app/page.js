import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ol>
        <li>
          <Link className = "underline" href = ".\week-2\">Week 2 Assignment</Link>
        </li>
        <li>
          <Link className = "underline" href = ".\week-3\">Week 3 Assignment</Link>
        </li>
      </ol>


    </main>
  );
}
