import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div><p>chapter01-v4.1</p></div>
      <div>
        <Image src="/Logo.png"  alt="Company Logo"  width={150}  height={50} />
      </div>
    </div>
  );
}
