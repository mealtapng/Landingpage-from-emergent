import { useState } from "react";
import { Users, Store, Bike } from "lucide-react";

const IMG_CUSTOMER_FLOW = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/5lthtgxq_5.png";
const IMG_VENDOR_FLOW = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/blwlpduk_6.png";
const IMG_RIDER_FLOW = "https://customer-assets.emergentagent.com/job_lagos-hero-pitch/artifacts/9z7etzs5_7.png";

const tabs = [
  {
    id: "customer",
    label: "Customer",
    icon: <Users size={18} />,
    image: IMG_CUSTOMER_FLOW,
    alt: "Mealtap Customer User Flow - from initiating chat to delivery and feedback",
    title: "Customer Journey",
    desc: "From saying 'Hi' on WhatsApp to enjoying a hot meal at your door. Browse nearby restaurants, build your cart, pay securely via Paystack, and track your rider in real time.",
  },
  {
    id: "vendor",
    label: "Vendor",
    icon: <Store size={18} />,
    image: IMG_VENDOR_FLOW,
    alt: "Mealtap Vendor User Flow - receiving and managing orders via WhatsApp",
    title: "Vendor Experience",
    desc: "Vendors receive orders directly on WhatsApp, confirm with a single reply, and prepare food for pickup. Manage menus, track orders, and receive payouts via the vendor dashboard.",
  },
  {
    id: "rider",
    label: "Rider",
    icon: <Bike size={18} />,
    image: IMG_RIDER_FLOW,
    alt: "Mealtap Rider User Flow - receiving dispatches and completing deliveries",
    title: "Rider Flow",
    desc: "Riders get dispatch notifications via WhatsApp with pickup and delivery details. Navigate to vendor, confirm pickup, deliver to customer, and earn per delivery.",
  },
];

const UserFlowsSection = () => {
  const [active, setActive] = useState("customer");
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section id="user-flows" data-testid="user-flows-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#C8622A] font-semibold text-sm tracking-widest uppercase mb-3">
            User Flows
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-5"
            style={{ fontFamily: "Montserrat" }}
            data-testid="user-flows-headline"
          >
            Everyone Connects on <span className="text-[#2D5A27]">WhatsApp</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Customers, vendors, and riders — all three sides converge on the platform everyone already uses.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10" data-testid="user-flow-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              data-testid={`user-flow-tab-${tab.id}`}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === tab.id
                  ? "bg-[#2D5A27] text-white shadow-lg"
                  : "bg-[#F5F5F0] text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="animate-fade-in" key={active}>
          <div className="text-center mb-8">
            <h3
              className="text-2xl font-extrabold text-[#1a1a1a] mb-3"
              style={{ fontFamily: "Montserrat" }}
              data-testid="user-flow-active-title"
            >
              {activeTab.title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {activeTab.desc}
            </p>
          </div>

          <div className="bg-[#F5F5F0] rounded-3xl p-4 sm:p-6 border border-gray-100">
            <img
              src={activeTab.image}
              alt={activeTab.alt}
              className="w-full rounded-2xl"
              data-testid={`user-flow-image-${active}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlowsSection;
