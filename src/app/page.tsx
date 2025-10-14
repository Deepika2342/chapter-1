"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/loading";

function Home() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out effect after 2500ms
    }, 2500);

    const redirectTimer = setTimeout(() => {
      // Redirect after fade-out completes (3000ms)
      router.push("/login");
    }, 3000); // Ensure this is after the fade

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
