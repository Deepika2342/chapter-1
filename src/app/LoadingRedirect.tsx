"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/ui/loading"; 

export default function LoadingRedirect() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // Start fading out after 2.5 seconds

    const redirectTimer = setTimeout(() => {
      router.push("/login"); // Redirect after 3 seconds
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);
  

  return (
    <div
      className={`transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <LoadingScreen />
    </div>
  );
}
