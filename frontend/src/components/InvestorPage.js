import { TrendingDown, Smartphone, MessageSquare, TrendingUp, Users, Globe, BarChart3, DollarSign, Percent, Shield, Zap, ArrowRight, FileText, Code, ChefHat, Rocket, MapPin } from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/5faebf7866fce2b9c543fbfb1decfe2c9130d28e1a0c8e7951d3e837e8c99037.png";
const HERO_TWO_BIKES = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/042a2da3ceed0a17ff340758cd961012621a162b87a2c8d0ac2f4db8254a5f9e.png";

const problems = [
  {
    icon: <TrendingDown size={28} />,
    stat: "60%",
    title: "Income Spent on Food",
    desc: "Nigerian households spend more of their income on food than any other population on earth. Over N60 trillion in H1 2023 alone.",
  },
  {
    icon: <Smartphone size={28} />,
    stat: "8%",
    title: "Delivery Penetration",
    desc: "Every existing food delivery platform requires a dedicated app download. Data is expensive, phone storage is limited.",
  },
  {
    icon: <MessageSquare size={28} />,
    stat: "67%",
    title: "Purchases Start via Chat",
    desc: "Most online purchases in Nigeria already begin with a WhatsApp message. Forcing customers onto a new app is the biggest barrier.",
  },
];

const stats = [
  { icon: <TrendingUp size={24} />, value: "$1.04B", label: "Market Size (2024)", detail: "Projected $2.5B by 2033 at 10.3% CAGR" },
  { icon: <Users size={24} />, value: "235M", label: "Nigeria's Population", detail: "Youngest population & highest food spend ratio" },
  { icon: <Globe size={24} />, value: "95%", label: "WhatsApp Penetration", detail: "Among Nigeria's online population" },
  { icon: <BarChart3 size={24} />, value: "65%+", label: "Buy from Vendors Daily", detail: "Street food is a daily reality for most Nigerians" },
];

const metrics = [
  { metric: "Total food expenditure (H1 2023)", value: "N60+ trillion", source: "NBS" },
  { metric: "Urban population", value: "125M (53.9%)", source: "UN 2024" },
  { metric: "Smartphone users (2025)", value: "140 million", source: "GSMA" },
  { metric: "Median age", value: "17.9 years", source: "UN" },
];

const revenues = [
  { stream: "Vendor Commission", rate: "12-15%", paidBy: "Vendor", desc: "Deducted from food order value before vendor payout" },
  { stream: "Delivery Fee", rate: "N1,500-N3,800", paidBy: "Customer", desc: "Distance-based, includes rider payout + margin" },
  { stream: "Service Fee", rate: "N100-N300", paidBy: "Customer", desc: "Platform fee on the order total" },
];

const advantages = [
  { icon: <Percent size={22} />, title: "Lowest Commission", desc: "12-15% vs Chowdeck's 24%. Far more attractive to vendors." },
  { icon: <DollarSign size={22} />, title: "Near-Zero CAC", desc: "Customer acquisition through organic WhatsApp sharing." },
  { icon: <Shield size={22} />, title: "Cash Positive Day One", desc: "N1,172-N2,253 gross margin per order. No subsidies needed." },
  { icon: <Zap size={22} />, title: "Ultra-Low Infra Cost", desc: "N50K-N330K/month vs N500K-N3M for app-based competitors." },
];

const founderSkills = [
  { icon: <Code size={20} />, title: "Technical Builder", desc: "Production experience in Node.js, Express, Supabase, Next.js, Paystack API." },
  { icon: <ChefHat size={20} />, title: "Food Industry Expert", desc: "Active chef with firsthand understanding of vendor economics." },
  { icon: <Rocket size={20} />, title: "Serial Entrepreneur", desc: "Founded Forge Camp, GidiVox, Pango, Smoke Signal." },
  { icon: <MapPin size={20} />, title: "Abuja Native", desc: "Lives in the launch market, understands the food culture deeply." },
];

const CHEF_MIKE_PHOTO = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/6861ez2r_1ad1cb24-86ef-40f7-8f59-9933f756f90d.JPG";

const InvestorPage = ({ onPitchDeck, onWaitlist }) => {
  return (
    <>
      {/* Investor Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" data-testid="investor-hero">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Mealtap delivery" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#2D5A27]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8622A]/20 backdrop-blur-sm border border-[#C8622A]/30 rounded-full px-5 py-2 mb-8">
            <span className="text-[#C8622A] text-sm font-semibold">Investor Overview</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "Montserrat" }}
            data-testid="investor-headline"
          >
            The <span className="text-[#C8622A]">WhatsApp-Native</span> Food Delivery Opportunity
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            A $1.04B market with 8% delivery penetration. Mealtap captures what app-based platforms cannot.
          </p>
          <button
            onClick={onPitchDeck}
            data-testid="investor-hero-pitch-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8622A] text-white font-semibold hover:bg-[#A84F1F] transition-all"
          >
            <FileText size={18} />
            Request Full Pitch Deck
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" data-testid="problem-section" className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">The Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5" style={{ fontFamily: "Montserrat" }} data-testid="problem-headline">
              235 Million Nigerians. <span className="text-[#C8622A]">8%</span> Delivery Reach.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The demand for food delivery is massive and constant. Yet the existing model of dedicated app downloads fails to capture the market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" data-testid={`problem-card-${i}`}>
                <div className="w-14 h-14 rounded-xl bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27] mb-6 group-hover:bg-[#2D5A27] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="text-4xl font-extrabold text-[#C8622A] mb-2" style={{ fontFamily: "Montserrat" }}>{item.stat}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: "Montserrat" }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" data-testid="market-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">Market Opportunity</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5" style={{ fontFamily: "Montserrat" }} data-testid="market-headline">
              A <span className="text-[#C8622A]">Billion-Dollar</span> Market
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Growing at double-digit rates with a massive untapped WhatsApp-native opportunity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((item, i) => (
              <div key={i} className="bg-[#F5F5F0] rounded-2xl p-7 border border-gray-100 text-center hover:shadow-lg transition-all" data-testid={`market-stat-${i}`}>
                <div className="w-12 h-12 rounded-xl bg-[#2D5A27]/10 text-[#2D5A27] flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                <div className="text-3xl font-extrabold text-[#2D5A27] mb-1" style={{ fontFamily: "Montserrat" }}>{item.value}</div>
                <div className="text-[#1a1a1a] font-semibold text-sm mb-2">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#F5F5F0] rounded-2xl border border-gray-100 overflow-hidden" data-testid="market-metrics-table">
            <div className="grid grid-cols-3 bg-[#2D5A27] text-white text-sm font-semibold px-6 py-3">
              <span>Metric</span><span>Value</span><span>Source</span>
            </div>
            {metrics.map((m, i) => (
              <div key={i} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="text-gray-700 font-medium">{m.metric}</span>
                <span className="text-[#C8622A] font-bold">{m.value}</span>
                <span className="text-gray-500">{m.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="business-model" data-testid="business-model-section" className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#2D5A27] font-semibold text-sm tracking-widest uppercase mb-3">Business Model</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5" style={{ fontFamily: "Montserrat" }} data-testid="business-model-headline">
              Profitable from <span className="text-[#2D5A27]">Order One</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Three revenue streams with positive unit economics from the very first transaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {revenues.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all" data-testid={`revenue-card-${i}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#2D5A27] font-bold text-sm uppercase tracking-wide">{r.stream}</span>
                  <span className="bg-[#C8622A] text-white text-xs font-bold px-3 py-1 rounded-full">{r.paidBy}</span>
                </div>
                <div className="text-3xl font-extrabold text-[#C8622A] mb-3" style={{ fontFamily: "Montserrat" }}>{r.rate}</div>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#2D5A27] rounded-3xl p-10" data-testid="competitive-advantages">
            <h3 className="text-2xl font-extrabold text-white mb-8 text-center" style={{ fontFamily: "Montserrat" }}>Why Mealtap Wins</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((a, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all" data-testid={`advantage-card-${i}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#C8622A] text-white flex items-center justify-center mx-auto mb-4">{a.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "Montserrat" }}>{a.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="team" data-testid="investor-team-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">The Founder</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5" style={{ fontFamily: "Montserrat" }}>
              Solo Builder with the <span className="text-[#2D5A27]">Right Skills</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F5F5F0] rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-[#2D5A27] p-8 flex flex-col justify-center text-center md:text-left">
                  <img src={CHEF_MIKE_PHOTO} alt="Chef Mike" className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 mb-4 border-2 border-white/30" />
                  <h3 className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: "Montserrat" }}>Chef Mike</h3>
                  <p className="text-[#C8622A] font-semibold text-sm mb-3">Founder & CEO</p>
                  <p className="text-white/70 text-sm leading-relaxed">Entrepreneur, web developer, and chef based in Abuja, Nigeria. Founder of Mealtap Technology Limited.</p>
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {founderSkills.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C8622A]/10 text-[#C8622A] flex items-center justify-center">{s.icon}</div>
                        <div>
                          <h4 className="font-bold text-[#1a1a1a] text-sm mb-1" style={{ fontFamily: "Montserrat" }}>{s.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="relative py-24 overflow-hidden" data-testid="investor-cta">
        <div className="absolute inset-0">
          <img src={HERO_TWO_BIKES} alt="Mealtap delivery bikes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A27]/95 to-[#2D5A27]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: "Montserrat" }}>
            Ready to Invest in the <span className="text-[#C8622A]">Future of Food Delivery</span>?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get the full pitch deck with detailed financials, projections, and growth strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onPitchDeck} data-testid="investor-cta-pitch-btn" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8622A] text-white font-semibold hover:bg-[#A84F1F] transition-all">
              <FileText size={18} />
              Request Pitch Deck
            </button>
            <a href="/" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-[#2D5A27] transition-all">
              View Public Page
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xl font-extrabold tracking-tight" style={{ fontFamily: "Montserrat" }}>
            <span className="text-[#2D5A27]">MEAL</span><span className="text-[#C8622A]">TAP</span>
          </span>
          <p className="text-gray-500 text-xs mt-3">&copy; {new Date().getFullYear()} Mealtap Technologies. All rights reserved. Confidential &mdash; Investor Overview.</p>
        </div>
      </footer>
    </>
  );
};

export default InvestorPage;
