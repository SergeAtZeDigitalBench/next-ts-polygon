import { Suspense } from "react";

import UsersList from "./UsersList";
import Counter from "./Counter";

export default async function Page() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <Counter />
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>loading... on initial request</p>
        }
      >
        <UsersList />
      </Suspense>
    </main>
  );
}
