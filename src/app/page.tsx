import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/hydration">React Query With Streamed Hydration</Link>
      </p>
    </div>
  )
}
