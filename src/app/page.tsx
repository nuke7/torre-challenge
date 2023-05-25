import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Title from "@/components/Title";

export default async function Home() {
  return (
    <main className="flex flex-col text-white w-full sm:w-5/6 md:w-4/6">
      <Navbar />
      {/* @ts-expect-error Async Server Component */}
      <Title username={"gombosonline"} />
      {/* @ts-expect-error Async Server Component */}
      <Skills username={"gombosonline"} />
    </main>

  );
}
