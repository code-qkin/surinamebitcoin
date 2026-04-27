import { Hero } from '@/components/home/Hero'
import { ExchangeMarquee } from '@/components/home/ExchangeMarquee'
import { Features } from '@/components/home/Features'
import { Tokenomics } from '@/components/home/Tokenomics'
import { HowToBuy } from '@/components/home/HowToBuy'
import { RoadmapPreview } from '@/components/home/RoadmapPreview'
import { Community } from '@/components/home/Community'

export default function Home() {
  return (
    <>
      <Hero />
      <ExchangeMarquee />
      <Features />
      <Tokenomics />
      <HowToBuy />
      <RoadmapPreview />
      <Community />
    </>
  )
}
