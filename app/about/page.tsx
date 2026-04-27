import { PageHero } from '@/components/ui/PageHero'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { Users, BookOpen, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
  const hubs = [
    {
      title: 'Our Team',
      desc: 'Meet the visionaries, developers, and leaders behind Suriname Bitcoin.',
      href: '/about/team',
      icon: <Users size={40} className="text-primary" />
    },
    {
      title: 'Quick Overview',
      desc: 'Learn about our vision, the SUDOBA blockchain, and our mission for Suriname.',
      href: '/about/overview',
      icon: <BookOpen size={40} className="text-primary" />
    },
    {
      title: 'Our Audit',
      desc: 'View our security credentials and the results of our CyberScope audit.',
      href: '/about/audit',
      icon: <ShieldCheck size={40} className="text-primary" />
    }
  ]

  return (
    <main>
      <PageHero 
        title="About Us" 
        subtitle="Learn about the team, the vision, and the technology driving Suriname's digital transformation."
        label="Organization"
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubs.map((hub) => (
              <Link key={hub.href} href={hub.href} className="group">
                <Card glow className="h-full p-10 flex flex-col items-center text-center group-hover:-translate-y-2 transition-transform">
                  <div className="mb-6 p-6 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    {hub.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{hub.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {hub.desc}
                  </p>
                  <div className="mt-8 text-primary font-bold uppercase tracking-widest text-xs flex items-center space-x-2">
                    <span>Explore</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
