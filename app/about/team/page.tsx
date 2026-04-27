import { PageHero } from '@/components/ui/PageHero'
import { TeamGrid } from '@/components/pages/TeamGrid'

export default function TeamPage() {
  return (
    <main>
      <PageHero 
        title="Meet the Team" 
        subtitle="The dedicated professionals working to build the future of finance in Suriname."
        label="Visionaries"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamGrid />
        </div>
      </section>
    </main>
  )
}
