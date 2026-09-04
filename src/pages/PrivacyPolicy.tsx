const sections = [
  {
    title: "Information We Collect",
    content: "Enchanted Digital Academy may collect the following personal data:",
    items: [
      "Full name, email address, phone number",
      "Residential or business address",
      "Payment information",
      "Employment or educational details",
      "Course enrolment and completion records",
      "Website usage data, IP address, cookies, and device information",
      "Communications with our support team",
    ],
  },
  {
    title: "Purpose of Processing",
    content: "We process personal data to:",
    items: [
      "Register students and deliver courses and certifications",
      "Process payments securely",
      "Respond to inquiries and support requests",
      "Improve our website and services",
      "Send educational updates and marketing communications (with consent where required)",
      "Comply with legal and regulatory obligations",
    ],
  },
  {
    title: "Legal Basis",
    content: "Enchanted Digital Academy processes personal data based on:",
    items: [
      "Consent from the data subject",
      "Contractual necessity",
      "Compliance with legal obligations",
      "Legitimate business interests that do not override the rights of data subjects",
    ],
  },
  {
    title: "Data Sharing",
    content: "Enchanted Digital Academy may share personal data with:",
    items: [
      "Payment processors",
      "Technology and cloud service providers",
      "Professional advisers",
      "Government regulators where legally required",
    ],
    note: "EDA does not sell personal data.",
  },
  {
    title: "Data Security",
    content: "EDA implements appropriate administrative, technical, and organisational safeguards to protect personal data against unauthorised access, alteration, disclosure, or destruction.",
    items: [],
  },
  {
    title: "Data Retention",
    content: "Personal data will only be retained for as long as necessary to fulfil the purposes for which it was collected or as required by applicable law.",
    items: [],
  },
  {
    title: "Your Rights",
    content: "Under the Nigeria Data Protection Act, 2023 (NDPA), you have the right to:",
    items: [
      "Access your personal data",
      "Correct inaccurate or incomplete information",
      "Request deletion where applicable",
      "Restrict or object to processing",
      "Withdraw consent at any time",
      "Request data portability",
      "Lodge a complaint with the Nigeria Data Protection Commission",
    ],
  },
  {
    title: "Cookies",
    content: "EDA uses cookies to improve website functionality, analyse website traffic, and enhance user experience. Users may manage cookie preferences through their browser settings.",
    items: [],
  },
  {
    title: "Contact",
    content: "Questions regarding this Privacy Policy may be directed to Enchanted Digital Academy through its official contact channels:",
    items: [
      "Email: hello@enchanteddigitalacademy.com.ng",
      "Email: info@enchanteddigitalacademy.com.ng",
      "Phone: +234 706 586 2449",
      "Hours: 9AM – 6PM (Mon – Fri)",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-brown py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-8">
            <span className="text-brand-orange text-xs font-semibold tracking-wide uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Privacy <span className="text-brand-orange">Policy</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Enchanted Digital Academy is committed to protecting the privacy and
            personal data of our students, website visitors, instructors,
            employees, and business partners.
          </p>
          <p className="text-white/40 text-sm mt-4">
            In accordance with the Nigeria Data Protection Act, 2023 (NDPA)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-brand-orange-light border border-orange-100 rounded-2xl p-6 mb-12">
            <p className="text-brand-brown text-base leading-relaxed">
              This Privacy Policy explains how we collect, use, store, disclose,
              and protect your personal data. By using our website or services,
              you agree to the terms outlined in this policy. We encourage you
              to read it carefully.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div
                key={i}
                className="border-b border-gray-100 pb-10 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-brand-brown">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-12">
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {section.content}
                  </p>

                  {section.items.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0 mt-2" />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 mt-4">
                      <p className="text-emerald-700 text-sm font-semibold">
                        {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Last updated */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              Last updated: February 2026
            </p>
            <a
              href="mailto:hello@enchanteddigitalacademy.com.ng"
              className="text-brand-orange font-semibold text-sm hover:underline"
            >
              Questions? Contact us &#8594;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;