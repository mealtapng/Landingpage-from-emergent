import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";

const HERO_BG_2 = "https://static.prod-images.emergentagent.com/jobs/8b49ced4-32db-480d-a907-c48e75ac672e/images/042a2da3ceed0a17ff340758cd961012621a162b87a2c8d0ac2f4db8254a5f9e.png";

const CTAFooter = ({ onPitchDeck, onWaitlist }) => {
  return (
    <>
      {/* CTA Section */}
      <section data-testid="cta-section" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG_2}
            alt="Lagos aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A27]/95 to-[#2D5A27]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: "Montserrat" }}
            data-testid="cta-headline"
          >
            Ready to Be Part of the <span className="text-[#C8622A]">Food Revolution</span>?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're an investor, partner, or early adopter, we'd love to connect.
            Mealtap is building the default food delivery layer for Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              data-testid="cta-pitch-deck-btn"
              onClick={onPitchDeck}
              className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold text-base hover:bg-white hover:text-[#2D5A27] transition-all duration-300"
            >
              <FileText size={18} />
              Request Pitch Deck
            </button>
            <button
              data-testid="cta-waitlist-btn"
              onClick={onWaitlist}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8622A] text-white font-semibold text-base hover:bg-[#A84F1F] transition-all duration-300"
            >
              Join the Waitlist
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-testid="footer" className="bg-[#1a1a1a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <span className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "Montserrat" }}>
                <span className="text-[#2D5A27]">MEAL</span>
                <span className="text-[#C8622A]">TAP</span>
              </span>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                WhatsApp-native food ordering and delivery platform for Nigerian cities.
                Order food by sending a message. That simple.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "Montserrat" }}>
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {["Problem", "Solution", "How It Works", "Market", "Team"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-gray-400 text-sm hover:text-[#C8622A] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "Montserrat" }}>
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={14} />
                  Abuja, Federal Capital Territory, Nigeria
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail size={14} />
                  hello@mealtap.com.ng
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                Mealtap Technology Limited
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Mealtap Technologies. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Confidential &mdash; Investor Pitch Deck v1.0
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
