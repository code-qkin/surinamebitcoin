'use client'

export const Newsletter = () => {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] animate-shimmer bg-clip-text text-transparent">
          Get Updates And Stay Connected
        </h2>
        <p className="text-muted text-lg mb-10">
          Subscribe To Our Newsletter to receive the latest news, updates, and educational content directly in your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="w-full bg-bg2 border border-primary/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
          />
          <button className="w-full sm:w-auto bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(235,6,249,0.3)] hover:shadow-[0_0_30px_rgba(235,6,249,0.5)] transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
