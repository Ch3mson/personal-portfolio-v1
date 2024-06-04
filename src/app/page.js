import { ModeToggle } from '@/components/ModeToggle';
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { CardChange } from '@/components/CardChange'
import { CardSection } from '@/components/CardSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CardSection />
    </>
  );
}
