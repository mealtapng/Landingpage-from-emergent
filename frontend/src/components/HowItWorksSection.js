import { MapPin, Utensils, CreditCard, Truck, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={24} />,
    step: "01",
    title: "Say Hi",
    desc: "Send 'Hi' to Mealtap's WhatsApp number to start ordering.",
  },
  {
    icon: <MapPin size={24} />,
    step: "02",
    title: "Share Location",
    desc: "Share your GPS location so the bot finds nearby vendors.",
  },
  {
    icon: <Utensils size={24} />,
    step: "03",
    title: "Browse & Order",
    desc: "See menus, prices, and tap to add items to your cart.",
  },
  {
    icon: <CreditCard size={24} />,
    step: "04",
    title: "Pay Securely",
    desc: "Get a Paystack link. Pay via bank transfer, card, or USSD.",
  },
  {
    icon: <Truck size={24} />,
    step: "05",
    title: "Track & Eat",
    desc: "Rider picks up your order. Track delivery in real time.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-24 bg-[#2D5A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="how-it-works-headline"
          >
            Five Steps. One Chat. <span className="text-[#C8622A]">Hot Food.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            No app downloads. No account creation. Just WhatsApp.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              data-testid={`step-card-${i}`}
            >
              <div className="text-[#C8622A] font-extrabold text-xs tracking-widest mb-4" style={{ fontFamily: "Montserrat" }}>
                STEP {item.step}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#C8622A] text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-white font-bold text-base mb-2" style={{ fontFamily: "Montserrat" }}>
                {item.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
