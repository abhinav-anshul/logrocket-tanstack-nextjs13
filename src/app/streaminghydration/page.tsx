import Counter from "./counter"
import Robots from "./Robots"
import { Suspense } from "react"

export default async function Page() {
  return (
    <main style={{ padding: 20 }}>
      <Counter />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Robots />
      </Suspense>
    </main>
  )
}
