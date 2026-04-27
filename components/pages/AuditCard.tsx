import { SBC_CONFIG } from '@/lib/config'
import { Card } from '@/components/ui/Card'
import { ShieldCheck, Lock, Users, ExternalLink } from 'lucide-react'

export const AuditCard = () => {
  return (
    <div className="space-y-12">
      <Card className="p-12 text-center relative overflow-hidden border-primary/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full -mr-32 -mt-32" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-accent/20 mb-8">
            <span className="text-6xl font-display font-black text-accent">{SBC_CONFIG.audit.score}%</span>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-2">Audit Score: Low Risk</h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            The SBC token has undergone a comprehensive audit by {SBC_CONFIG.audit.auditor}, achieving a score of {SBC_CONFIG.audit.score}%. This classification as "Low Risk" demonstrates our commitment to security and transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={SBC_CONFIG.audit.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-bg font-bold px-10 py-4 rounded-full flex items-center space-x-3 hover:scale-105 transition-transform"
            >
              <span>View Full Audit Report</span>
              <ExternalLink size={18} />
            </a>
            <div className="px-6 py-4 rounded-full border border-white/5 text-sm font-medium text-muted">
              Audited by CyberScope
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center p-8">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-secondary">
            <Lock size={24} />
          </div>
          <h4 className="text-xl font-bold text-white mb-4">Security First</h4>
          <p className="text-sm text-muted">Our smart contract is optimized for security, protecting holders against common vulnerabilities.</p>
        </Card>
        <Card className="text-center p-8">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-secondary">
            <ShieldCheck size={24} />
          </div>
          <h4 className="text-xl font-bold text-white mb-4">Transparency</h4>
          <p className="text-sm text-muted">We maintain an open-source approach, allowing the community to verify our code on BSCScan.</p>
        </Card>
        <Card className="text-center p-8">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-secondary">
            <Users size={24} />
          </div>
          <h4 className="text-xl font-bold text-white mb-4">Community Trust</h4>
          <p className="text-sm text-muted">A verified audit is a cornerstone of trust, ensuring a fair and safe environment for all participants.</p>
        </Card>
      </div>

      <div className="p-8 rounded-3xl bg-bg2/50 border border-white/5 italic text-muted text-center">
        "We're committed to ensuring the safety, security, and transparency of the Suriname Bitcoin (SBC) platform. The SBC token has undergone a comprehensive audit by industry experts, achieving a score of 84%, classified as low risk."
      </div>
    </div>
  )
}
