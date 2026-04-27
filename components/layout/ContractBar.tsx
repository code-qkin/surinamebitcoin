import { SBC_CONFIG } from '@/lib/config'

export const ContractBar = () => {
  return (
    <div className="w-full bg-bg2 border-b border-primary/10 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-medium space-y-1 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-muted">Contract:</span>
            <code className="text-primary font-mono tracking-tight break-all">
              {SBC_CONFIG.contract}
            </code>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-muted">Network:</span>
              <span className="text-white">{SBC_CONFIG.network}</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <span className="text-muted">Audited by:</span>
              <span className="text-accent">{SBC_CONFIG.audit.auditor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
