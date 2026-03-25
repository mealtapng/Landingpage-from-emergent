import { Code, ChefHat, Rocket, MapPin } from "lucide-react";

const skills = [
  {
    icon: <Code size={20} />,
    title: "Technical Builder",
    desc: "Production experience in Node.js, Express, Supabase, Next.js, Paystack API. Built multiple launch-ready products solo.",
  },
  {
    icon: <ChefHat size={20} />,
    title: "Food Industry Expert",
    desc: "Active chef planning experiential dining in Abuja. Firsthand understanding of vendor economics and delivery logistics.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Serial Entrepreneur",
    desc: "Founded Forge Camp, GidiVox, Pango, Smoke Signal. Consistent pattern of concept to launch as a solo builder.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Abuja Native",
    desc: "Lives in the launch market, eats from the vendors Mealtap will onboard. Understands the city's food culture deeply.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" data-testid="team-section" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">
            The Founder
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="team-headline"
          >
            Built by Someone Who <span className="text-[#2D5A27]">Knows the Market</span>
          </h2>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto" data-testid="founder-card">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left: Info */}
              <div className="md:col-span-2 bg-[#2D5A27] p-8 flex flex-col justify-center text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto md:mx-0 mb-4 text-white text-2xl font-extrabold" style={{ fontFamily: "Montserrat" }}>
                  AM
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: "Montserrat" }}>
                  Atolagbe Michael O.
                </h3>
                <p className="text-[#C8622A] font-semibold text-sm mb-3">Founder & CEO</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Entrepreneur, web developer, and chef based in Abuja, Nigeria.
                  Founder of Gotref Technologies Nig Ltd.
                </p>
              </div>

              {/* Right: Skills */}
              <div className="md:col-span-3 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {skills.map((s, i) => (
                    <div key={i} className="flex items-start gap-3" data-testid={`skill-${i}`}>
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C8622A]/10 text-[#C8622A] flex items-center justify-center">
                        {s.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a1a1a] text-sm mb-1" style={{ fontFamily: "Montserrat" }}>
                          {s.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-[#2D5A27]">Parent Company:</span> Gotref Technologies Nig Ltd (CAC Registered)
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    <span className="font-semibold text-[#2D5A27]">Location:</span> Abuja, Federal Capital Territory, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
