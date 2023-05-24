import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Title from "@/components/Title";

export default async function Home() {  
  return (
    <>
      <Title />
      {/* @ts-expect-error Async Server Component */}
      <Skills />
    </>
  )
}
