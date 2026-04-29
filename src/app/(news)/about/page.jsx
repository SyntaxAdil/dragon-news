export const metadata = {
  title: "About | Dragon News",
};
const teamMembers = [
  {
    name: "James Harrington",
    role: "Editor-in-Chief",
    bio: "25 years in investigative journalism. Previously at Reuters and Al Jazeera.",
    initials: "JH",
  },
  {
    name: "Priya Nair",
    role: "Managing Editor",
    bio: "Specialises in South Asian politics and international affairs.",
    initials: "PN",
  },
  {
    name: "Omar Faruq",
    role: "Head of Digital",
    bio: "Leads our digital transformation and online newsroom strategy.",
    initials: "OF",
  },
  {
    name: "Sarah Lim",
    role: "Chief Photographer",
    bio: "Award-winning photojournalist covering conflict zones and human rights.",
    initials: "SL",
  },
];

const milestones = [
  { year: "2004", text: "Founded in Dhaka as a print weekly." },
  {
    year: "2009",
    text: "Launched online portal, first in Bangladesh to go digital-first.",
  },
  { year: "2015", text: "Won South Asia Press Freedom Award." },
  {
    year: "2019",
    text: "Expanded to international correspondent network across 14 countries.",
  },
  { year: "2024", text: "Reached 10 million monthly readers worldwide." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Page Content */}
      <main className="container mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <section className="border-b border-gray-200 pb-10 mb-10">
          <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-3">
            About Us
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Journalism Without
            <br />
            <span className="italic text-gray-500">Fear or Favour.</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            The Dragon News has been Bangladesh&apos;s most trusted independent
            newsroom since 2004. We report the stories that matter — locally,
            regionally, and globally — with uncompromising editorial standards
            and a deep commitment to truth.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-7">
            <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-2">
              Our Mission
            </p>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Inform. Empower. Protect.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We exist to hold power accountable, give voice to the voiceless,
              and deliver accurate, impartial news to every corner of Bangladesh
              and beyond. Our editorial independence is non-negotiable.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-7">
            <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-2">
              Our Vision
            </p>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A Better-Informed World.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We envision a future where every citizen has access to credible,
              fearless reporting — a world where journalism is a public good,
              not a political tool. We build that future, one story at a time.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { num: "10M+", label: "Monthly Readers" },
            { num: "120+", label: "Journalists" },
            { num: "14", label: "Countries Covered" },
            { num: "20+", label: "Years of Reporting" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center border border-gray-200 rounded-xl py-6 px-4"
            >
              <p
                className="text-3xl font-bold text-red-500 mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {s.num}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-6">
            Our Journey
          </p>
          <div className="relative border-l-2 border-gray-200 ml-4 space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="pl-6 relative">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
                <p className="text-xs font-bold text-red-500 mb-0.5">
                  {m.year}
                </p>
                <p className="text-sm text-gray-700">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-6">
            Leadership
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 font-bold text-sm flex items-center justify-center mb-3">
                  {m.initials}
                </div>
                <p className="font-semibold text-sm">{m.name}</p>
                <p className="text-xs text-red-500 mb-2">{m.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
          <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-6">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Independence",
                desc: "No political party, advertiser, or government influences our editorial decisions.",
              },
              {
                title: "Accuracy",
                desc: "Every claim is verified. We issue corrections swiftly and without hesitation.",
              },
              {
                title: "Courage",
                desc: "We publish uncomfortable truths that others avoid.",
              },
              {
                title: "Inclusivity",
                desc: "Our newsroom reflects the diversity of Bangladesh and the world.",
              },
              {
                title: "Transparency",
                desc: "We are open about our methods, funding, and editorial process.",
              },
              {
                title: "Public Service",
                desc: "Journalism is a public good. We exist to serve our readers, not shareholders.",
              },
            ].map((v) => (
              <div key={v.title}>
                <p className="font-semibold text-sm mb-1">{v.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
