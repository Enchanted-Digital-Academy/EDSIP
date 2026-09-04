import { useState } from "react";
import { CheckCircle, Users, Globe, Heart, Star, ArrowRight } from "lucide-react";

const whoWePartnerWith = [
  { icon: <Users size={20} />, label: "Coaches and industry professionals" },
  { icon: <Globe size={20} />, label: "Training providers and academies" },
  { icon: <Star size={20} />, label: "Digital, tech, and creative organizations" },
  { icon: <Heart size={20} />, label: "CSR, sustainability, and impact-focused institutions" },
  { icon: <CheckCircle size={20} />, label: "Communities aligned with digital growth" },
];

const benefits = [
  {
    title: "Access to Motivated Learners",
    description: "Reach a growing community of driven African students and young professionals actively seeking quality programmes.",
  },
  {
    title: "Structured Onboarding",
    description: "We handle learner alignment and onboarding — you focus on delivering exceptional programmes and mentorship.",
  },
  {
    title: "Increased Visibility",
    description: "Your programmes and expertise get promoted within our ecosystem and to our growing student community.",
  },
  {
    title: "Purpose-Driven Collaboration",
    description: "Work within an ecosystem built on impact, access, and long-term growth — not just one-off transactions.",
  },
  {
    title: "Long-Term Impact",
    description: "Build partnerships that create lasting change in African digital education, not just short-term engagements.",
  },
  {
    title: "Community Engagement",
    description: "Participate in events, masterclasses, and community initiatives that put your brand in front of the right audience.",
  },
];

const opportunities = [
  "Programme delivery and facilitation",
  "Mentorship and coaching",
  "Workshops and masterclasses",
  "Community learning initiatives",
  "CSR and impact-driven collaborations",
];

const qualities = [
  "Have real-world experience and proven expertise",
  "Offer practical, industry-relevant programmes",
  "Value mentorship, ethics, and learner growth",
  "Are committed to building access and opportunity across Africa",
];

const Partners = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://submit-form.com/ebIpB41qI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      // Show success message and clear form
      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      
      // Reset back to the empty form after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission failed", error);
      // Optional: You could add an error state here later if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-brand-brown overflow-hidden py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange text-xs font-semibold tracking-wide uppercase">
              Partnership Programme
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Let&apos;s Build Africa&apos;s{" "}
            <span className="text-brand-orange">Digital Future</span>{" "}
            Together
          </h1>
          <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Enchanted Digital Academy is a digital acceleration hub connecting
            African talents to the right learning pathways, mentors, and
            opportunities. We partner with those who share our commitment to
            impact, access, and global relevance.
          </p>
          <a
            href="#partner-form"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30"
          >
            Become a Partner
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
              Who We Partner With
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-brand-brown leading-tight mb-6">
                Built on Shared{" "}
                <span className="text-brand-orange">Values</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our partnerships are built on shared values, quality delivery,
                and long-term impact. If you offer programmes, mentorship, or
                expertise that can accelerate digital careers in Africa, we&apos;d
                love to collaborate.
              </p>
              <div className="space-y-3">
                {whoWePartnerWith.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-brown rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">How the Partnership Works</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                As an acceleration hub, our role is to connect the right learners
                to the right partners. You deliver — we support.
              </p>
              <div className="space-y-4">
                {[
                  "Curate and onboard motivated learners",
                  "Guide students toward the most suitable programmes",
                  "Support visibility and access for partner offerings",
                  "Build a trusted ecosystem for digital growth",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
              Why Partner With Us
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-brown leading-tight">
              Real Value for{" "}
              <span className="text-brand-orange">Real Partners</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We don&apos;t just offer exposure. We offer structured collaboration
              within a purpose-driven ecosystem focused on Africa&apos;s digital future.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-50 hover:border-orange-100 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <Star size={18} />
                </div>
                <h3 className="text-brand-brown font-bold text-sm mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For + Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
                  What We Look For
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-brand-brown leading-tight mb-6">
                Quality Over <span className="text-brand-orange">Volume</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We partner with individuals and organizations that align with our
                values and commitment to impact. Quality and alignment matter
                more to us than volume.
              </p>
              <div className="space-y-3">
                {qualities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
                  Partner Opportunities
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-brand-brown leading-tight mb-6">
                How We Can{" "}
                <span className="text-brand-orange">Collaborate</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Partnership structures vary based on scope, goals, and
                availability. Here are some of the ways we work together.
              </p>
              <div className="space-y-3">
                {opportunities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-100 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-brand-brown text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner-form" className="py-20 bg-brand-brown">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
                Let&apos;s Collaborate
              </span>
              <div className="w-10 h-0.5 bg-brand-orange" />
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Ready to <span className="text-brand-orange">Partner With Us?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Fill out the form below and our team will get back to you within
              48 hours to discuss how we can work together.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-white/5 border border-brand-orange/30 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enquiry Sent Successfully!</h3>
              <p className="text-white/60 text-sm">
                Thank you for your interest. Our partnership team will review your details and reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Partnership enquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium mb-2 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about yourself, your organisation, and how you'd like to partner with us..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover disabled:bg-brand-orange/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30"
              >
                {isSubmitting ? "Sending..." : "Submit Partnership Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-16 bg-brand-orange-light border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-brown mb-4">
            Together, We Accelerate Impact
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Enchanted Digital Academy is building more than programmes — we&apos;re
            building pathways, access, and a community committed to Africa&apos;s
            digital growth. Let&apos;s do it together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partners;