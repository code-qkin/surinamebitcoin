interface SectionLabelProps {
  children: React.ReactNode
  accent?: boolean
  className?: string
}

export const SectionLabel = ({ children, accent = false, className = '' }: SectionLabelProps) => {
  return (
    <div className={`flex items-center space-x-3 mb-4 ${className}`}>
      <span className={`w-2 h-2 rounded-full animate-pulse ${accent ? 'bg-accent shadow-[0_0_10px_#00ff88]' : 'bg-primary shadow-[0_0_10px_#eb06f9]'}`} />
      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${accent ? 'text-accent' : 'text-primary'}`}>
        {children}
      </span>
    </div>
  )
}
