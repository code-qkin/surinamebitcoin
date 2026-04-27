import { PageHero } from '@/components/ui/PageHero'
import { RoadmapTimeline } from '@/components/pages/RoadmapTimeline'

export default function RoadmapPage() {
  return (
    <main>
      <PageHero 
        title="Project Roadmap" 
        subtitle="Our strategic milestones for the development and integration of the SBC ecosystem."
        label="Future"
        image="https://surinamebitcoin.finance/wp-content/uploads/2025/12/roadmap-scaled.webp"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoadmapTimeline />
        </div>
      </section>
    </main>
  )
}
