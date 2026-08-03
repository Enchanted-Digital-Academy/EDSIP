import { ArrowRight, Play, CheckCircle } from "lucide-react";

const highlights = [
  "12-week structured programme",
  "Real company placement",
  "1-on-1 mentorship",
  "Industry certification",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-brand-orange text-xs font-semibold tracking-wide uppercase">
                Applications Now Open — 2026 Cohort
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-brown leading-[1.05] mb-6">
              Turn Your{" "}
              <span className="relative">
                <span className="text-brand-orange">Degree</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C47 1.5 100 1.5 199 5.5"
                    stroke="#F97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Into a{" "}
              <span className="text-brand-orange">Career</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              EDSIP is a digital acceleration hub that partners with coaches and
              organizations to guide Africans toward the right programs and
              opportunities in tech, PR, branding, digital marketing, and social
              impact — providing mentorship, real-world guidance, and access to
              growth pathways at every step.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-brand-orange flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 text-sm"
              >
                Apply for EDSIP
                <ArrowRight size={16} />
              </a>

              <button className="inline-flex items-center gap-3 text-gray-500 hover:text-brand-brown transition-colors duration-200 group">
                <div className="w-11 h-11 rounded-full border border-gray-200 group-hover:border-brand-orange/50 flex items-center justify-center transition-all duration-200 group-hover:bg-brand-orange/10">
                  <Play size={14} className="text-brand-orange ml-0.5" />
                </div>
                <span className="text-sm font-medium">Watch how it works</span>
              </button>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="relative">
            {/* Main card */}0.03
            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden">
                    <img
                      src="/edsip1.jpg"
                      alt="EDSIP"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-brand-brown font-semibold text-sm">
                      EDSIP 2026
                    </p>
                    <p className="text-gray-400 text-xs">Internship Programme</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Open
                </span>
              </div>

              {/* Progress bars */}
              <div className="space-y-4 mb-6">
                {[
                  { label: "Applications Received", value: 78, color: "bg-brand-orange" },
                  { label: "Spots Remaining", value: 35, color: "bg-amber-500" },
                  { label: "Mentors Available", value: 92, color: "bg-orange-300" },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-gray-400 text-xs">{bar.label}</span>
                      <span className="text-brand-brown text-xs font-semibold">
                        {bar.value}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${bar.color} rounded-full`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {[
                  { value: "100+", label: "Students" },
                  { value: "10+", label: "Partners" },
                  { value: "95%", label: "Placed" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-brand-orange font-bold text-xl font-display">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge — top left */}
            <div className="absolute -top-4 -left-4 bg-brand-orange text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-orange-200">
              🎓 12-Week Programme
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-gray-100 text-brand-brown text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Next cohort starts soon
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-gray-300 text-xs text-center uppercase tracking-widest mb-6">
            Trusted by students from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "University of Lagos",
              "Covenant University",
              "LASU",
              "OAU",
              "UNIABUJA",
              "NOUN",
            ].map((uni) => (
              <span key={uni} className="text-gray-400 text-sm font-medium">
                {uni}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;