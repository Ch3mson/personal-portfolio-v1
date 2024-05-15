import Image from "next/image";
import { ModeToggle } from '@/components/ModeToggle';
import { Head } from '@/components/Head';
import { Hero } from '@/components/Hero'
 

export default function Home() {
  return (
    <>

    <div className="w-1/2 max-w-full mx-auto px-5 box-border bg-[#18181b]">
      <ModeToggle />
      <Hero />

    </div>
    
    </>
  );
}
