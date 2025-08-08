import StatCard from "./StatCard";

const Hero = () => {
  const stats = [
    { number: '50+', label: 'Gamers' },
    { number: '1K+', label: 'Reviews' },
    { number: '24/7', label: 'Updates' },
  ]
  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-blue-500-/10 animate-pulse"></div>

      <div className="absolute top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      {/* Hero content */}
      <div className="relative z-10 text-center max-w-[1200px] animate-fadeInUp">
        <div className="mb-8">
          <h1 className="mb-4">
            <span className="block font-black text-6xl md:text-8xl mb-4 font-primary bg-gradient-to-r from-primary via-red-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl animate-glow">
              ZONA GAMER
            </span>
            <span className="block text-xl text-text-secondary font-light tracking-widest font-secondary">
              Portal Gaming Definitivo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto">
            Noticias, reviews, análisis y todo sobre el mundo del gaming.
          </p>
        </div>
        {/* hero stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} index={index} />
            ))}
          </div>
      </div>

      {/*Scroll down arrow*/}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
