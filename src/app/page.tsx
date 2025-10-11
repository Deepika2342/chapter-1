

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/loading";

function Home() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const redirectTimer = setTimeout(() => {
      router.push("/auth/login");
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      className={`transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <Loading />
    </div>
  );
}

export default Home; 
