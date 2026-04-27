import { SectionLabel } from './SectionLabel'

interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
  accent?: boolean
  image?: string
}

export const PageHero = ({ title, subtitle, label, accent = false, image }: PageHeroProps) => {
  // Check if we are running inside WordPress
  const wpData = typeof window !== 'undefined' ? (window as any).SBC_WP_DATA : null;
  
  const displayTitle = wpData?.title || title;
  const displaySubtitle = wpData?.acf?.subtitle || subtitle;
  const displayLabel = wpData?.acf?.label || label;
  const displayImage = wpData?.acf?.hero_image || image;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-bg">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -ml-64 -mb-32 pointer-events-none" />

      {displayImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bg/80 z-10" />
          <img src={displayImage} alt={displayTitle} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {displayLabel && <SectionLabel accent={accent} className="justify-center">{displayLabel}</SectionLabel>}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 tracking-tight">
          {displayTitle}
        </h1>
        {displaySubtitle && (
          <p className="max-w-3xl mx-auto text-muted text-lg md:text-xl leading-relaxed">
            {displaySubtitle}
          </p>
        )}
      </div>
    </section>
  )
}
