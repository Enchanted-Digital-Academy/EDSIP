const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            About EDSIP
          </p>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            More Than an Internship Programme
          </h2>

          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            EDSIP is designed to help students bridge the gap between
            academic learning and real-world career experience.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="bg-orange-50 rounded-3xl p-8 lg:p-12">
            <p className="text-brand-brown text-xl font-semibold leading-relaxed">
              Learn. Build. Connect. Grow.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Through structured learning, mentorship, practical experience,
              and career development opportunities, EDSIP helps students
              prepare for the world beyond the classroom.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-brand-brown text-2xl font-bold mb-5">
              Preparing Students for the Real World
            </h3>

            <p className="text-gray-500 leading-relaxed mb-6">
              The programme gives students an opportunity to develop
              employability skills, gain practical experience, connect with
              mentors, and explore pathways for professional growth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-2xl p-5">
                <p className="text-brand-orange text-2xl font-bold">
                  12
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Weeks
                </p>
              </div>

              <div className="border border-gray-100 rounded-2xl p-5">
                <p className="text-brand-orange text-2xl font-bold">
                  1-on-1
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Mentorship
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;