import { MessageCircle, Download, CreditCard } from "lucide-react";

const PHONE_IMG = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/c9f5fa98718bf0cda49c46194daaeb51a087a34caf62f966c885bef97c15d334.png";

const features = [
  {
    icon: <MessageCircle size={22} />,
    title: "WhatsApp Native",
    desc: "Order entirely within WhatsApp. 95% of Nigeria's online population already uses it.",
  },
  {
    icon: <Download size={22} />,
    title: "Zero App Downloads",
    desc: "No app to install. No account to create. No new interface to learn.",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Easy Payment",
    desc: "Pay via Paystack - bank transfer, card, or USSD. All inside the chat.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" data-testid="solution-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-[#2D5A27] font-semibold text-sm tracking-widest uppercase mb-3" data-testid="solution-label">
              The Solution
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight"
              style={{ fontFamily: "Montserrat" }}
              data-testid="solution-headline"
            >
              Order Food by Tapping a{" "}
              <span className="text-[#2D5A27]">Message</span>. That Simple.
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Mealtap is a WhatsApp-native food ordering and delivery platform. Customers message a WhatsApp number.
              An AI-powered bot shows nearby restaurants, lets them browse menus, build a cart, pay via Paystack,
              and track delivery in real time. All inside the chat.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4" data-testid={`solution-feature-${i}`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2D5A27] text-white flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] text-base mb-1" style={{ fontFamily: "Montserrat" }}>
                      {f.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end" data-testid="solution-phone-mockup">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#2D5A27]/10 rounded-[3rem] -rotate-3" />
              <img
                src={PHONE_IMG}
                alt="Mealtap WhatsApp ordering interface"
                className="relative z-10 w-72 sm:w-80 rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
