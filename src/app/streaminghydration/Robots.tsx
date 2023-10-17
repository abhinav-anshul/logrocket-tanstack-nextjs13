"use client"
import { useQuery } from "@tanstack/react-query"
import React, { Fragment, useEffect } from "react"

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  )) as any[]
}

export default function Robots() {
  const [count, setCount] = React.useState(0)
  const { data } = useQuery<any[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
    suspense: true,
    staleTime: 5 * 1000,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 100)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Fragment>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div key={user.id} style={{ border: "1px solid #ccc", textAlign: "center" }}>
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ width: 180, height: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      }
    </Fragment>
  )
}
