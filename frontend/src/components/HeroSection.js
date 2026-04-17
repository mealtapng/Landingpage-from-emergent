import { ArrowRight, FileText } from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/5faebf7866fce2b9c543fbfb1decfe2c9130d28e1a0c8e7951d3e837e8c99037.png";
const HERO_BIKE_RESTAURANT = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/ffb78f631bd5195788fa6815f70c37786fe2bea2de7d365ab0494a71c3266635.png";
const HERO_TWO_BIKES = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/042a2da3ceed0a17ff340758cd961012621a162b87a2c8d0ac2f4db8254a5f9e.png";

const HeroSection = ({ onPitchDeck, onWaitlist }) => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Mealtap delivery rider on clean Lagos street"
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="hero-bg-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2D5A27]/70" />
      </div>

      <div className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
        <div className="w-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 animate-float opacity-90">
          <img src={HERO_BIKE_RESTAURANT} alt="Mealtap branded delivery bike at restaurant" className="w-full h-36 object-cover" />
        </div>
        <div className="w-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 animate-float delay-300 opacity-90">
          <img src={HERO_TWO_BIKES} alt="Two Mealtap delivery bikes" className="w-full h-36 object-cover" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up" data-testid="hero-badge">
          <span className="w-2 h-2 rounded-full bg-[#C8622A] animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Launching Soon
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-testid="hero-headline"
        >
          Order Food by Sending a{" "}
          <span className="text-[#C8622A]">WhatsApp</span> Message
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed" data-testid="hero-subheadline">
          Mealtap is a WhatsApp-native food ordering and delivery platform for Nigerian cities.
          No app download. No account creation. Just message and eat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <button
            data-testid="hero-pitch-deck-btn"
            onClick={onPitchDeck}
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold text-base hover:bg-white hover:text-[#2D5A27] transition-all duration-300"
          >
            <FileText size={18} />
            Request Pitch Deck
          </button>
          <button
            data-testid="hero-waitlist-btn"
            onClick={onWaitlist}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8622A] text-white font-semibold text-base hover:bg-[#A84F1F] transition-all duration-300 animate-pulse-glow"
          >
            Join the Waitlist
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Key Stats Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-500">
          {[
            { value: "$1.04B", label: "Market Size" },
            { value: "95%", label: "WhatsApp Penetration" },
            { value: "8%", label: "Current Delivery Reach" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-5 text-center"
              data-testid={`hero-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C8622A]" style={{ fontFamily: "Montserrat" }}>
                {stat.value}
              </div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
