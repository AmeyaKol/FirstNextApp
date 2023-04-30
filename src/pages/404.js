import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Notfound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }, []);
  return (
    <div className="not-found">
      <h1>Page does not exist</h1>
      <p>
        Redirecting to 
         <Link href="../" style={{ color: "blue" }}>
          HomePage
        </Link> ...
      </p>
    </div>
  );
}
