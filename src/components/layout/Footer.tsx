import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Programme: [
    { label: "About EDSIP", href: "#about" },
    { label: "Programme Benefits", href: "#benefits" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Student Ambassador", href: "#" },
  ],
  Students: [
    { label: "Apply Now", href: "mailto:hello@enchanteddigitalacademy.com.ng" },
    { label: "Student Dashboard", href: "#" },
    { label: "Learning Resources", href: "#" },
    { label: "Internship Opportunities", href: "#" },
    { label: "Events", href: "#" },
  ],
  Company: [
    { label: "Enchanted Digital Academy", href: "#" },
    { label: "Partner With Us", href: "/partners" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/enchanted_digitalacademy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/enchanted-digital-academy/" },
  { label: "WhatsApp", href: "https://wa.me/2347065862449" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      {/* Top CTA band */}
      <div className="bg-brand-orange">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display text-2xl lg:text-3xl font-bold">
              Ready to Start Your Journey?
            </h3>
            <p className="text-orange-100 text-sm mt-1">
              Applications are open. Join the next cohort today.
            </p>
          </div>
          <a
            href="mailto:hello@enchanteddigitalacademy.com.ng"
            className="flex-shrink-0 bg-white text-brand-orange font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-all duration-200 text-sm hover:-translate-y-0.5 shadow-lg"
          >
            Apply for EDSIP &#8594;
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-brand-orange/20">
                <img
                  src="/edsip1.jpg"
                  alt="EDSIP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg">EDSIP</span>
                <p className="text-brand-orange text-[10px] font-medium tracking-widest uppercase">
                  Enchanted Digital
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              The Enchanted Digital Student Internship Programme — bridging the
              gap between education and industry, one student at a time.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              {[
                { icon: <Mail size={14} />, text: "hello@enchanteddigitalacademy.com.ng" },
                { icon: <Phone size={14} />, text: "+234 706 586 2449" },
                { icon: <MapPin size={14} />, text: "Lagos, Nigeria" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/50 text-sm">
                  <span className="text-brand-orange flex-shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Socials */}
           {/* Socials */}
<div className="flex items-center gap-3 mt-6">
  {socials.map((s, i) => (
    <a
      key={i}
      href={s.href}
      className="text-xs font-semibold text-white/50 hover:text-brand-orange border border-white/10 hover:border-brand-orange/30 px-3 py-2 rounded-lg transition-all duration-200"
    >
      {s.label}
    </a>
  ))}
</div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-brand-orange text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Enchanted Digital Academy. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with love for the next generation of African professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;