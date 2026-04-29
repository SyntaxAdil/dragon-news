

const jobs = [
  {
    title: "Senior News Reporter",
    department: "Editorial",
    location: "Dhaka",
    type: "Full-time",
    tags: ["Breaking News", "3+ yrs exp.", "Bangla & English"],
    typeColor: "bg-green-50 text-green-700",
  },
  {
    title: "International Correspondent",
    department: "International News",
    location: "Remote",
    type: "Remote",
    tags: ["Foreign Affairs", "5+ yrs exp.", "Travel required"],
    typeColor: "bg-blue-50 text-blue-700",
  },
  {
    title: "Photojournalist",
    department: "Photography",
    location: "Dhaka",
    type: "Full-time",
    tags: ["DSLR / Mirrorless", "Field reporting", "2+ yrs exp."],
    typeColor: "bg-green-50 text-green-700",
  },
  {
    title: "Digital Content Editor",
    department: "Digital & Tech",
    location: "Hybrid",
    type: "Part-time",
    tags: ["SEO", "CMS", "Social Media"],
    typeColor: "bg-yellow-50 text-yellow-700",
  },
  {
    title: "Data Journalist",
    department: "Editorial",
    location: "Dhaka",
    type: "Full-time",
    tags: ["Python / R", "Data Viz", "3+ yrs exp."],
    typeColor: "bg-green-50 text-green-700",
  },
  {
    title: "Journalism Intern",
    department: "Internship",
    location: "Dhaka",
    type: "Internship",
    tags: ["Fresh graduates", "3 months", "Paid"],
    typeColor: "bg-purple-50 text-purple-700",
  },
];

const benefits = [
  { icon: "💰", title: "Competitive Pay", desc: "Market-rate salary with performance bonuses." },
  { icon: "🪪", title: "Press Credentials", desc: "Full press card and field access nationally." },
  { icon: "🌐", title: "Remote Options", desc: "Flexible hybrid and remote working available." },
  { icon: "📚", title: "Training", desc: "Annual journalism workshops and skill courses." },
  { icon: "🏥", title: "Health Cover", desc: "Medical insurance for you and your family." },
  { icon: "✈️", title: "Travel", desc: "Opportunities to cover international assignments." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Shared Header */}
 
      <main className="container mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="border-b border-gray-200 pb-10 mb-10">
          <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-3">
            Careers
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Tell the stories
            <br />
            <span className="italic text-gray-500">that matter.</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Join Bangladesh&aposs most trusted independent newsroom. We&aposre looking
            for journalists, photographers, and digital storytellers who believe
            in fearless, accurate reporting.
          </p>
          <div className="flex gap-8 mt-8">
            {[
              { num: "6", label: "Open Roles" },
              { num: "120+", label: "Team Members" },
              { num: "14", label: "Countries Covered" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-bold text-red-500"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {s.num}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Job Listings */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-5">
              Open Positions
            </p>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-semibold text-base group-hover:text-red-500 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {job.department} · {job.location}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${job.typeColor}`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-xs font-semibold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-5">
                Why Join Us
              </p>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-3 items-start">
                    <span className="text-base mt-0.5">{b.icon}</span>
                    <div>
                      <p className="text-sm font-semibold">{b.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-semibold mb-2">
                Don&apost see your role?
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                We accept open applications year-round. Send us your CV and
                portfolio and we&aposll reach out when a suitable opening arises.
              </p>
              <a
                href="mailto:careers@dragonnews.com"
                className="text-xs font-semibold text-red-500 hover:underline"
              >
                careers@dragonnews.com →
              </a>
            </div>

            {/* Values */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-4">
                Our Values
              </p>
              <div className="space-y-2">
                {[
                  "Independence above all",
                  "Accuracy before speed",
                  "Courage to publish",
                  "Diverse voices welcome",
                  "Transparency always",
                ].map((v) => (
                  <div
                    key={v}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}