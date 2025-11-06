import Form from "./Form";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Welcome to Travel Explores</h1>
      <Suspense fallback={<p>Loading form...</p>}>
        <Form />
      </Suspense>
    </div>
  );
}
