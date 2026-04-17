import { Bot } from "lucide-react";

const IMG_STEP1 = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/xmviri77_12.png";
const IMG_STEP2 = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/905t87xq_13.png";
const IMG_STEP3 = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/djhhxkhz_14.png";

const steps = [
  {
    num: "01",
    title: "Discover & Browse",
    desc: "Open WhatsApp, say 'Hi' to Mealtap. Share your location and instantly see nearby restaurants with photos and menus.",
    image: IMG_STEP1,
    alt: "WhatsApp chat showing Mealtap welcome, location sharing, and restaurant discovery with food photos",
  },
  {
    num: "02",
    title: "Order & Customize",
    desc: "Browse menus, select items by number, set quantities, and build your cart. Type 'checkout' when you're ready.",
    image: IMG_STEP2,
    alt: "WhatsApp chat showing menu browsing, adding Jollof Rice to cart, and checkout flow",
  },
  {
    num: "03",
    title: "Pay, Track & Enjoy",
    desc: "Confirm your order, pay securely via Paystack, get real-time rider updates, and enjoy your meal. Rate your experience.",
    image: IMG_STEP3,
    alt: "WhatsApp chat showing order summary, payment, rider assignment, and delivery confirmation",
  },
];

const WhatsAppFlowSection = () => {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#2D5A27] font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="how-it-works-headline"
          >
            Three Steps. One Chat. <span className="text-[#C8622A]">Hot Food.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No app downloads. No account creation. Just WhatsApp.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
              data-testid={`flow-step-${i}`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className={`absolute -inset-3 bg-[#2D5A27]/5 rounded-3xl ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`} />
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="relative z-10 w-full rounded-2xl shadow-xl"
                    data-testid={`flow-step-image-${i}`}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl bg-[#C8622A] text-white flex items-center justify-center text-lg font-extrabold"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-[#C8622A]/20" />
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] mb-4"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Name Your Assistant Feature */}
        <div className="mt-20" data-testid="name-your-assistant">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#C8622A] text-white flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <span className="text-[#C8622A] font-semibold text-sm tracking-widest uppercase">Unique Feature</span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] mb-4"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Name Your Assistant
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Give your food ordering bot a personal name. Call it <span className="font-semibold text-[#2D5A27]">Jummy</span>, <span className="font-semibold text-[#2D5A27]">Tolu</span>, <span className="font-semibold text-[#2D5A27]">Nkechi</span>, <span className="font-semibold text-[#2D5A27]">Amina</span>, <span className="font-semibold text-[#2D5A27]">Oga Runner</span>, or whatever you like. It remembers your name too.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Jummy", "Tolu", "Nkechi", "Amina", "Oga Runner"].map((name) => (
                    <span
                      key={name}
                      className="px-4 py-2 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] font-semibold text-sm"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#2D5A27] p-8 sm:p-12 flex flex-col justify-center min-h-[280px]">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 mb-4">
                  <p className="text-white/60 text-xs mb-2">You:</p>
                  <p className="text-white text-sm font-medium">"Hey, I want to name my bot Jummy"</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15">
                  <p className="text-[#C8622A] text-xs mb-2 font-semibold">Jummy:</p>
                  <p className="text-white text-sm font-medium">"Done! I'm Jummy now. Nice to meet you! What would you like to eat today?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppFlowSection;
