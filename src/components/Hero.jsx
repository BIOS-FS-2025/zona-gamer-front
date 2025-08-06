const Hero = () => {
  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,191,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,69,0,0.1)_0%,transparent_50%)]"></div>

      <div className="relative z-10 text-center max-w-[1200px] px-4 md:px-6"> 
        <div className="animate-[fadeInUp_1s_ease-out]">
          <h1 className="mb-6">
            <span className="block text-[clamp(3rem,8vw,5rem)] font-black mb-2 font-primary text-primary animate-glow">
              ZONA GAMER
            </span>
            <span className="block text-[clamp(1.2rem,3vw,2rem)] text-text-secondary font-light tracking-wider font-secondary">
              Portal Gaming Definitivo
            </span>
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-[600px] mx-auto font-secondary">
            Noticias, reviews, análisis y todo sobre el mundo del gaming.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;