import { DollarSign, Percent, Shield, Zap } from "lucide-react";

const revenues = [
  {
    stream: "Vendor Commission",
    rate: "12-15%",
    paidBy: "Vendor",
    desc: "Deducted from food order value before vendor payout",
  },
  {
    stream: "Delivery Fee",
    rate: "N1,500-N3,800",
    paidBy: "Customer",
    desc: "Distance-based, includes rider payout + margin",
  },
  {
    stream: "Service Fee",
    rate: "N100-N300",
    paidBy: "Customer",
    desc: "Platform fee on the order total",
  },
];

const advantages = [
  {
    icon: <Percent size={22} />,
    title: "Lowest Commission",
    desc: "12-15% vs Chowdeck's 24%. Far more attractive to vendors.",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Near-Zero CAC",
    desc: "Customer acquisition through organic WhatsApp sharing.",
  },
  {
    icon: <Shield size={22} />,
    title: "Cash Positive Day One",
    desc: "N1,172-N2,253 gross margin per order. No subsidies needed.",
  },
  {
    icon: <Zap size={22} />,
    title: "Ultra-Low Infra Cost",
    desc: "N50K-N330K/month vs N500K-N3M for app-based competitors.",
  },
];

const BusinessModelSection = () => {
  return (
    <section id="business-model" data-testid="business-model-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2D5A27] font-semibold text-sm tracking-widest uppercase mb-3">
            Business Model
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="business-model-headline"
          >
            Profitable from <span className="text-[#2D5A27]">Order One</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three revenue streams with positive unit economics from the very first transaction.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {revenues.map((r, i) => (
            <div
              key={i}
              className="bg-[#F5F5F0] rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300"
              data-testid={`revenue-card-${i}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#2D5A27] font-bold text-sm uppercase tracking-wide">{r.stream}</span>
                <span className="bg-[#C8622A] text-white text-xs font-bold px-3 py-1 rounded-full">{r.paidBy}</span>
              </div>
              <div className="text-3xl font-extrabold text-[#C8622A] mb-3" style={{ fontFamily: "Montserrat" }}>
                {r.rate}
              </div>
              <p className="text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-[#2D5A27] rounded-3xl p-10" data-testid="competitive-advantages">
          <h3
            className="text-2xl font-extrabold text-white mb-8 text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Why Mealtap Wins
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                data-testid={`advantage-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8622A] text-white flex items-center justify-center mx-auto mb-4">
                  {a.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "Montserrat" }}>
                  {a.title}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
