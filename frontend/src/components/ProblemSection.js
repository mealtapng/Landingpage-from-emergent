import { TrendingDown, Smartphone, MessageSquare } from "lucide-react";

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

const ProblemSection = () => {
  return (
    <section id="problem" data-testid="problem-section" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3" data-testid="problem-label">
            The Problem
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="problem-headline"
          >
            235 Million Nigerians. <span className="text-[#C8622A]">8%</span> Delivery Reach.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            The demand for food delivery is massive and constant. Yet the existing model of dedicated app downloads
            fails to capture the market.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              data-testid={`problem-card-${i}`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27] mb-6 group-hover:bg-[#2D5A27] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div
                className="text-4xl font-extrabold text-[#C8622A] mb-2"
                style={{ fontFamily: "Montserrat" }}
              >
                {item.stat}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3" style={{ fontFamily: "Montserrat" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Market Exit Note */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 text-center" data-testid="market-exit-note">
          <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-[#C8622A]">Jumia Food</span> and{" "}
            <span className="font-bold text-[#C8622A]">Bolt Food</span> have already exited Nigeria.{" "}
            <span className="font-bold">Chowdeck</span> generates 80% of volume from Lagos alone.
            Abuja and most Nigerian cities remain <strong>deeply underserved</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
