import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onPitchDeck, onWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Market", href: "#market" },
    { label: "Team", href: "#team" },
  ];

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2" data-testid="navbar-logo">
          <span
            className="text-2xl font-extrabold tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className={scrolled ? "text-[#2D5A27]" : "text-white"}>MEAL</span>
            <span className={scrolled ? "text-[#C8622A]" : "text-[#C8622A]"}>TAP</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#C8622A] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            data-testid="nav-pitch-deck-btn"
            onClick={onPitchDeck}
            className="text-sm font-semibold px-5 py-2 rounded-full border-2 border-[#C8622A] text-[#C8622A] hover:bg-[#C8622A] hover:text-white transition-all duration-200"
          >
            Request Pitch Deck
          </button>
          <button
            data-testid="nav-waitlist-btn"
            onClick={onWaitlist}
            className="text-sm font-semibold px-5 py-2 rounded-full bg-[#2D5A27] text-white hover:bg-[#1E3D1A] transition-all duration-200"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-2xl mx-4 mt-2 p-6 animate-fade-in" data-testid="mobile-menu">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 font-medium py-2 hover:text-[#C8622A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-gray-200" />
            <button
              data-testid="mobile-pitch-deck-btn"
              onClick={() => { setMobileOpen(false); onPitchDeck(); }}
              className="w-full text-sm font-semibold py-3 rounded-full border-2 border-[#C8622A] text-[#C8622A] hover:bg-[#C8622A] hover:text-white transition-all"
            >
              Request Pitch Deck
            </button>
            <button
              data-testid="mobile-waitlist-btn"
              onClick={() => { setMobileOpen(false); onWaitlist(); }}
              className="w-full text-sm font-semibold py-3 rounded-full bg-[#2D5A27] text-white hover:bg-[#1E3D1A] transition-all"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
