import { useState } from "react";
import { X, FileText, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
const API = `${BACKEND_URL}/api`;

const reasonOptions = [
  { value: "investor", label: "I'm an investor looking at opportunities" },
  { value: "partnership", label: "Strategic partnership or co-founding" },
  { value: "tech_company", label: "I have a tech company and could help build this" },
  { value: "learn_more", label: "I just want to learn more" },
  { value: "press", label: "Press / media coverage" },
  { value: "other", label: "Other" },
];

const heardOptions = [
  { value: "", label: "Select an option" },
  { value: "social_media", label: "Social Media" },
  { value: "friend_colleague", label: "Friend or Colleague" },
  { value: "search_engine", label: "Search Engine" },
  { value: "news_article", label: "News / Article" },
  { value: "event_conference", label: "Event or Conference" },
  { value: "other", label: "Other" },
];

const PitchDeckModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    organisation: "",
    role_title: "",
    request_reason: "",
    more_about_interest: "",
    heard_about: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.request_reason || !form.more_about_interest) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await axios.post(`${API}/pitch-deck-request`, form);
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForm({
      full_name: "",
      email: "",
      phone: "",
      organisation: "",
      role_title: "",
      request_reason: "",
      more_about_interest: "",
      heard_about: "",
    });
    setSuccess(false);
    setError("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" data-testid="pitch-deck-modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        data-testid="pitch-deck-modal-backdrop"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up" data-testid="pitch-deck-modal-content">
        {/* Header */}
        <div className="sticky top-0 bg-[#2D5A27] rounded-t-3xl p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-lg" style={{ fontFamily: "Montserrat" }}>
                Request Pitch Deck
              </h3>
              <p className="text-white/70 text-xs">Get the full Mealtap breakdown</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            data-testid="pitch-deck-modal-close"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        {success ? (
          <div className="p-10 text-center" data-testid="pitch-deck-success">
            <div className="w-16 h-16 rounded-full bg-[#2D5A27]/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-[#2D5A27]" />
            </div>
            <h4 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: "Montserrat" }}>
              Request Submitted!
            </h4>
            <p className="text-gray-500 text-sm mb-6">
              Thank you for your interest. We'll send the pitch deck to your email shortly.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 rounded-full bg-[#2D5A27] text-white font-semibold text-sm hover:bg-[#1E3D1A] transition-colors"
              data-testid="pitch-deck-success-close"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="pitch-deck-request"
            data-netlify="true"
            method="POST"
            className="p-6 space-y-4"
            data-testid="pitch-deck-form"
          >
            <input type="hidden" name="form-name" value="pitch-deck-request" />

            <p className="text-gray-600 text-sm mb-2 leading-relaxed">
              Get the full breakdown: market size, revenue model, growth strategy, and how Mealtap is positioned to become the default food delivery layer for Nigeria.
            </p>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-[#C8622A]">*</span></label>
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all"
                placeholder="Your full name"
                data-testid="pitch-deck-name-input"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-[#C8622A]">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all"
                placeholder="email@example.com"
                data-testid="pitch-deck-email-input"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all"
                placeholder="+234..."
                data-testid="pitch-deck-phone-input"
              />
            </div>

            {/* Organisation */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Organisation / Company</label>
              <input
                type="text"
                name="organisation"
                value={form.organisation}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all"
                placeholder="Your company name"
                data-testid="pitch-deck-organisation-input"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Role / Title</label>
              <input
                type="text"
                name="role_title"
                value={form.role_title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all"
                placeholder="e.g. Managing Partner"
                data-testid="pitch-deck-role-input"
              />
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Why are you requesting the pitch deck? <span className="text-[#C8622A]">*</span></label>
              <div className="space-y-2 mt-2">
                {reasonOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm ${
                      form.request_reason === opt.value
                        ? "border-[#2D5A27] bg-[#2D5A27]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    data-testid={`pitch-deck-reason-${opt.value}`}
                  >
                    <input
                      type="radio"
                      name="request_reason"
                      value={opt.value}
                      checked={form.request_reason === opt.value}
                      onChange={handleChange}
                      className="accent-[#2D5A27]"
                    />
                    <span className="text-gray-700">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* More About Interest */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tell us more about your interest <span className="text-[#C8622A]">*</span></label>
              <textarea
                name="more_about_interest"
                value={form.more_about_interest}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all resize-none"
                placeholder="What specifically interests you about Mealtap?"
                data-testid="pitch-deck-interest-input"
              />
            </div>

            {/* How did you hear */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">How did you hear about Mealtap?</label>
              <select
                name="heard_about"
                value={form.heard_about}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#2D5A27] focus:ring-2 focus:ring-[#2D5A27]/20 outline-none transition-all bg-white"
                data-testid="pitch-deck-heard-select"
              >
                {heardOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-xl" data-testid="pitch-deck-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#2D5A27] text-white font-semibold text-base hover:bg-[#1E3D1A] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
              data-testid="pitch-deck-submit-btn"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <FileText size={18} />
                  Submit Request
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PitchDeckModal;
