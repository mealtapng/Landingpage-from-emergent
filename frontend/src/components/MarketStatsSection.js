import { TrendingUp, Users, Globe, BarChart3 } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp size={24} />,
    value: "$1.04B",
    label: "Market Size (2024)",
    detail: "Projected $2.5B by 2033 at 10.3% CAGR",
  },
  {
    icon: <Users size={24} />,
    value: "235M",
    label: "Nigeria's Population",
    detail: "Youngest population & highest food spend ratio",
  },
  {
    icon: <Globe size={24} />,
    value: "95%",
    label: "WhatsApp Penetration",
    detail: "Among Nigeria's online population",
  },
  {
    icon: <BarChart3 size={24} />,
    value: "65%+",
    label: "Buy from Vendors Daily",
    detail: "Street food is a daily reality for most Nigerians",
  },
];

const metrics = [
  { metric: "Total food expenditure (H1 2023)", value: "N60+ trillion", source: "NBS" },
  { metric: "Urban population", value: "125M (53.9%)", source: "UN 2024" },
  { metric: "Smartphone users (2025)", value: "140 million", source: "GSMA" },
  { metric: "Median age", value: "17.9 years", source: "UN" },
];

const MarketStatsSection = () => {
  return (
    <section id="market" data-testid="market-section" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">
            Market Opportunity
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="market-headline"
          >
            A <span className="text-[#C8622A]">Billion-Dollar</span> Market
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Growing at double-digit rates with a massive untapped WhatsApp-native opportunity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              data-testid={`market-stat-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#2D5A27]/10 text-[#2D5A27] flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <div
                className="text-3xl font-extrabold text-[#2D5A27] mb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                {item.value}
              </div>
              <div className="text-[#1a1a1a] font-semibold text-sm mb-2">{item.label}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Metrics Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" data-testid="market-metrics-table">
          <div className="grid grid-cols-3 bg-[#2D5A27] text-white text-sm font-semibold px-6 py-3">
            <span>Metric</span>
            <span>Value</span>
            <span>Source</span>
          </div>
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <span className="text-gray-700 font-medium">{m.metric}</span>
              <span className="text-[#C8622A] font-bold">{m.value}</span>
              <span className="text-gray-500">{m.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketStatsSection;
