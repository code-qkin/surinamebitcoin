import { PageHero } from '@/components/ui/PageHero'
import { AuditCard } from '@/components/pages/AuditCard'

export default function AuditPage() {
  return (
    <main>
      <PageHero 
        title="Security Audit" 
        subtitle="Verification of our smart contract integrity and security standards."
        label="Compliance"
        accent
      />
      
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuditCard />
        </div>
      </section>
    </main>
  )
}
