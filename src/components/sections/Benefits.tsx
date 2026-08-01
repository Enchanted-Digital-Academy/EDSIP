const benefits = [
  {
    number: "01",
    title: "Practical Experience",
    description:
      "Gain hands-on experience through real projects and practical work that helps bridge the gap between learning and the workplace.",
  },
  {
    number: "02",
    title: "Mentorship",
    description:
      "Connect with mentors who can provide guidance, feedback, and support throughout your professional development journey.",
  },
  {
    number: "03",
    title: "Employability Skills",
    description:
      "Develop the skills and confidence needed to navigate the workplace and prepare for future career opportunities.",
  },
  {
    number: "04",
    title: "Career Development",
    description:
      "Explore growth pathways and opportunities designed to help you take the next step toward your career goals.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-orange-50/40 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Programme Benefits
          </p>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            Built to Help You Move Forward
          </h2>

          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            EDSIP combines practical experience, mentorship, employability
            development, and career opportunities to help students prepare
            for life beyond university.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-brand-orange font-bold">
                  {benefit.number}
                </div>

                <span className="text-gray-200 text-4xl font-display font-bold group-hover:text-orange-100 transition-colors">
                  {benefit.number}
                </span>
              </div>

              <h3 className="text-brand-brown text-xl font-bold mt-8 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;