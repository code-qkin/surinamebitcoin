import { PageHero } from '@/components/ui/PageHero'
import { AcademyModules } from '@/components/pages/AcademyModules'
import { Card } from '@/components/ui/Card'

export default function AcademyPage() {
  return (
    <main>
      <PageHero 
        title="SBC Academy" 
        subtitle="Empowering the community through blockchain education and digital literacy."
        label="Education"
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AcademyModules />

          <div className="mt-32">
            <Card className="p-12 border-primary/20 bg-primary/5 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Long-Term Vision</h3>
              <p className="text-xl text-muted max-w-4xl mx-auto italic leading-relaxed">
                "SBC Academy aims to become more than a content hub. It seeks to build digital literacy within the Surinamese and global community. The objective is not speculation. The objective is empowerment."
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
