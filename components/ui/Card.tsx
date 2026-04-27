interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export const Card = ({ children, className = '', glow = false }: CardProps) => {
  return (
    <div className={`bg-bg2/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 transition-all duration-300 ${glow ? 'hover:border-primary/40 hover:shadow-[0_0_30px_rgba(235,6,249,0.15)]' : ''} ${className}`}>
      {children}
    </div>
  )
}
