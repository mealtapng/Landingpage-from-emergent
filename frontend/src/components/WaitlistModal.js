import { useState } from "react";
import { X, ArrowRight, CheckCircle, Loader2, Lock } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const WaitlistModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    why_mealtap: "",
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
    if (!form.full_name || !form.email || !form.phone || !form.why_mealtap) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await axios.post(`${API}/waitlist-request`, form);
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
      company: "",
      why_mealtap: "",
    });
    setSuccess(false);
    setError("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" data-testid="waitlist-modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        data-testid="waitlist-modal-backdrop"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up" data-testid="waitlist-modal-content">
        {/* Header */}
        <div className="sticky top-0 bg-[#C8622A] rounded-t-3xl p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <ArrowRight size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-lg" style={{ fontFamily: "Montserrat" }}>
                Get Early Access
              </h3>
              <p className="text-white/70 text-xs">Join the Mealtap waitlist</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            data-testid="waitlist-modal-close"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        {success ? (
          <div className="p-10 text-center" data-testid="waitlist-success">
            <div className="w-16 h-16 rounded-full bg-[#C8622A]/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-[#C8622A]" />
            </div>
            <h4 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: "Montserrat" }}>
              You're on the List!
            </h4>
            <p className="text-gray-500 text-sm mb-6">
              Thank you for joining the Mealtap waitlist. We'll notify you as soon as we launch.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 rounded-full bg-[#C8622A] text-white font-semibold text-sm hover:bg-[#A84F1F] transition-colors"
              data-testid="waitlist-success-close"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="waitlist-request"
            data-netlify="true"
            method="POST"
            className="p-6 space-y-4"
            data-testid="waitlist-form"
          >
            <input type="hidden" name="form-name" value="waitlist-request" />

            <p className="text-gray-600 text-sm mb-2 leading-relaxed">
              Join our waitlist to be among the first to experience Mealtap when we launch.
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#C8622A] focus:ring-2 focus:ring-[#C8622A]/20 outline-none transition-all"
                placeholder="Your full name"
                data-testid="waitlist-name-input"
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#C8622A] focus:ring-2 focus:ring-[#C8622A]/20 outline-none transition-all"
                placeholder="email@example.com"
                data-testid="waitlist-email-input"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number <span className="text-[#C8622A]">*</span></label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#C8622A] focus:ring-2 focus:ring-[#C8622A]/20 outline-none transition-all"
                placeholder="+234..."
                data-testid="waitlist-phone-input"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Company / Organisation</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#C8622A] focus:ring-2 focus:ring-[#C8622A]/20 outline-none transition-all"
                placeholder="Your company (optional)"
                data-testid="waitlist-company-input"
              />
            </div>

            {/* Why Mealtap */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Why do you think Mealtap will serve you? <span className="text-[#C8622A]">*</span></label>
              <textarea
                name="why_mealtap"
                value={form.why_mealtap}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#C8622A] focus:ring-2 focus:ring-[#C8622A]/20 outline-none transition-all resize-none"
                placeholder="Tell us how Mealtap can help you..."
                data-testid="waitlist-why-input"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-xl" data-testid="waitlist-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#C8622A] text-white font-semibold text-base hover:bg-[#A84F1F] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
              data-testid="waitlist-submit-btn"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1 text-gray-400 text-xs pt-1">
              <Lock size={12} />
              Your information is kept strictly confidential.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
