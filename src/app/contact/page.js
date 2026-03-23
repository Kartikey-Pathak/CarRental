import { Suspense } from "react";
import Contact from "../../../components/Contact.jsx";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  );
}
