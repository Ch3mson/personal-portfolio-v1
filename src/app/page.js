import { ModeToggle } from '@/components/ModeToggle';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { CardSection } from '@/components/CardSection'

export default function Home() {
  return (
    <>
      <ModeToggle />
      <Hero />
      <About />
      <CardSection />
    </>
  );
}
