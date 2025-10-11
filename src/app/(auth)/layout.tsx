import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="bg-background h-dvh w-full">{children}</section>
    </>
  );
};

export default layout;
