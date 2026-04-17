const IMG_BILLBOARD = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/nt2pd73e_9.png";
const IMG_BRANDING = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/0rdwpgih_15.png";
const IMG_DELIVERY = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/mqdn5g5x_1.png";

const BrandShowcase = () => {
  return (
    <section id="brand" data-testid="brand-section" className="py-24 bg-[#2D5A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">
            The Mealtap Brand
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="brand-headline"
          >
            Built for <span className="text-[#C8622A]">Nigerian Cities</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From billboards to delivery bags — Mealtap is designed to be everywhere food is.
          </p>
        </div>

        {/* Billboard - Full Width */}
        <div className="mb-10" data-testid="brand-billboard">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
            <img
              src={IMG_BILLBOARD}
              alt="Mealtap billboard - Your favorite meals are just one chat away"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Two Column: Branding + Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10" data-testid="brand-signage">
            <img
              src={IMG_BRANDING}
              alt="Mealtap signage and branded delivery bag on motorcycle"
              className="w-full h-80 object-cover"
            />
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Montserrat" }}>
                On the Streets
              </h4>
              <p className="text-white/60 text-sm">
                Branded signage and delivery bags make Mealtap visible across every neighborhood.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10" data-testid="brand-delivery">
            <img
              src={IMG_DELIVERY}
              alt="Mealtap delivery notification on iPhone - Delivered, Enjoy your meal!"
              className="w-full h-80 object-cover"
            />
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Montserrat" }}>
                Seamless Delivery
              </h4>
              <p className="text-white/60 text-sm">
                From order to doorstep — every step tracked in real time right inside WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
