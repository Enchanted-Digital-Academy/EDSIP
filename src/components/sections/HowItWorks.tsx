const steps = [
  {
    number: "01",
    title: "Join EDSIP",
    description:
      "Register for the programme and take your first step toward gaining practical experience and developing your employability.",
  },
  {
    number: "02",
    title: "Learn & Build",
    description:
      "Develop practical skills through structured learning, real-world experience, mentorship, and career development opportunities.",
  },
  {
    number: "03",
    title: "Connect & Grow",
    description:
      "Connect with mentors, explore career pathways, and use what you've learned to prepare for opportunities beyond the classroom.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            From Student to Career-Ready
          </h2>

          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            EDSIP gives students a structured pathway to develop practical
            experience, build employability skills, and prepare for the world
            beyond university.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative bg-orange-50/50 border border-orange-100 rounded-3xl p-8 lg:p-10"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%+12px)] w-6 border-t border-dashed border-orange-200" />
              )}

              <span className="text-brand-orange text-sm font-bold tracking-widest">
                {step.number}
              </span>

              <div className="mt-7 w-12 h-12 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-brand-orange font-bold shadow-sm">
                {index + 1}
              </div>

              <h3 className="text-brand-brown text-xl font-bold mt-7 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;