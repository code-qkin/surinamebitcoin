'use client'

import { TEAM, TeamMember } from '@/lib/team'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const TeamGrid = () => {
  // Group members by department
  const departments = TEAM.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = []
    }
    acc[member.department].push(member)
    return acc
  }, {} as Record<string, TeamMember[]>)

  return (
    <div className="space-y-20">
      {Object.entries(departments).map(([dept, members]) => (
        <div key={dept}>
          <SectionLabel className="mb-8">{dept}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <Card key={i} className={`flex flex-col items-center text-center p-8 ${member.open ? 'border-dashed border-primary/30 bg-primary/5' : ''}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-[0_0_15px_rgba(235,6,249,0.2)] ${member.open ? 'bg-bg2 text-muted' : 'bg-primary text-white'}`}>
                  {member.name ? member.name.split(' ').map(n => n[0]).join('') : '?'}
                </div>
                <h4 className={`text-lg font-bold mb-1 ${member.open ? 'text-muted italic' : 'text-white'}`}>
                  {member.name || 'Position Open'}
                </h4>
                <p className="text-sm text-secondary font-medium mb-4">{member.role}</p>
                {member.open && (
                  <a href="/contact" className="text-xs text-primary font-bold uppercase tracking-widest hover:underline">
                    Apply Now
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
