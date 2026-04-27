import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  target?: string
}

export const Button = ({ children, href, variant = 'primary', className = '', target }: ButtonProps) => {
  const baseStyles = "px-8 py-3.5 rounded-full font-bold transition-all duration-300 inline-block text-center"
  const variants = {
    primary: "bg-primary text-white shadow-[0_0_20px_rgba(235,6,249,0.3)] hover:shadow-[0_0_40px_rgba(235,6,249,0.6)] hover:-translate-y-0.5",
    secondary: "bg-transparent border border-secondary text-secondary hover:bg-secondary/10",
    ghost: "bg-transparent border border-primary/20 text-white hover:border-primary/50 hover:bg-primary/5"
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target={target || "_blank"} rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedStyles}>
      {children}
    </button>
  )
}
