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
      </div>
    </section>
  );
};

export default WhatsAppFlowSection;
