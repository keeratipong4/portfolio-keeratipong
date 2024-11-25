import Image from "next/image";
import Intro from "./_components/Intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
    </main>
  );
}
