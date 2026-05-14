import { useState, useEffect } from "react";

const services = [
  { icon: "🏠", label: "Regular Weekly Cleaning", desc: "Consistent, scheduled home cleaning every week" },
  { icon: "📅", label: "Fortnightly Service", desc: "Alternate fortnightly cleaning at your convenience" },
  { icon: "✨", label: "One-Off & Spring Clean", desc: "Deep cleaning whenever you need a fresh start" },
  { icon: "📦", label: "Moving Home Cleaning", desc: "In and out — full cleans before and after moving" },
  { icon: "🔨", label: "Post-Build & Trade Clean", desc: "Thorough clean after building or trade work" },
  { icon: "🎉", label: "After-Party Cleaning", desc: "Short notice considered — we've got you covered" },
];

const commercial = [
  { icon: "🏢", label: "All Commercial Cleaning" },
  { icon: "🍺", label: "Early Morning Bar & Restaurant" },
  { icon: "🌿", label: "Glasshouse, Allotments & Storage" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f4f1eb" }}
      className="min-h-screen text-gray-800"
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(47,123,180,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(47,123,180,0.3)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ color: "#b09a2e", fontSize: "1.5rem" }}>✦</span>
            <span
              className="font-bold tracking-widest uppercase text-sm"
              style={{ color: scrolled ? "#fff" : "#2f7bb4", letterSpacing: "0.15em" }}
            >
              First Choice Domestic
            </span>
          </div>
          <a
            href="tel:07781103864"
            className="text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-200"
            style={{
              background: "#b09a2e",
              color: "#fff",
              letterSpacing: "0.12em",
            }}
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2f7bb4 0%, #1a5a8a 55%, #0e3a5c 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "#b09a2e", transform: "translate(40%, -40%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "#b09a2e", transform: "translate(-40%, 40%)" }}
        />
        {/* Gold diagonal stripe */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 60%, rgba(176,154,46,0.08) 60%, rgba(176,154,46,0.08) 70%, transparent 70%)",
          }}
        />

        <div
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border"
            style={{ borderColor: "rgba(176,154,46,0.5)", background: "rgba(176,154,46,0.1)" }}>
            <span style={{ color: "#b09a2e", fontSize: "0.75rem" }}>✦</span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#d4bc5a", letterSpacing: "0.18em" }}>
              Insured & Police Checked Staff
            </span>
            <span style={{ color: "#b09a2e", fontSize: "0.75rem" }}>✦</span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Affordable &{" "}
            <span
              style={{
                color: "#b09a2e",
                display: "inline-block",
                fontStyle: "italic",
              }}
            >
              Reliable
            </span>{" "}
            <br />
            Home Cleaners
          </h1>

          <p
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)", maxWidth: "520px", margin: "0 auto 2.5rem" }}
          >
            Experienced, insured, and police-checked staff — giving you complete peace of mind in your own home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:firstchoicedomestic@suremail.gg"
              className="px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-200 hover:scale-105"
              style={{
                background: "#b09a2e",
                color: "#fff",
                letterSpacing: "0.06em",
                boxShadow: "0 4px 24px rgba(176,154,46,0.4)",
              }}
            >
              Get In Touch
            </a>
            <a
              href="tel:07781103864"
              className="px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.35)",
                letterSpacing: "0.06em",
              }}
            >
              07781 103864
            </a>
          </div>

          <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            24HR Answer Phone Available
          </p>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2"
          style={{ transform: "translateX(-50%)", opacity: 0.5 }}
        >
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
            }}
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: "#2f7bb4" }} className="py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
          {["Fully Insured", "Police Checked", "Experienced Team", "24HR Availability"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span style={{ color: "#b09a2e" }}>✔</span>
              <span className="text-sm font-semibold tracking-wide text-white uppercase" style={{ letterSpacing: "0.1em" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6" style={{ background: "#f4f1eb" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: "#b09a2e", letterSpacing: "0.2em" }}
          >
            About Us
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: "#1a3a50", lineHeight: 1.2 }}
          >
            Looking for a{" "}
            <span style={{ color: "#2f7bb4", fontStyle: "italic" }}>cleaner you can trust?</span>
          </h2>
          <p
            className="text-lg leading-relaxed mx-auto"
            style={{ color: "#555", maxWidth: "640px" }}
          >
            At First Choice Domestic, our staff are experienced, reliable, insured and police checked — so you can feel
            completely at ease in your own home. We offer flexible services tailored to fit your schedule and needs.
          </p>
          <div className="mt-8 h-px w-24 mx-auto" style={{ background: "#b09a2e" }} />
        </div>
      </section>

      {/* HOME SERVICES */}
      <section className="py-16 px-6" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{ color: "#b09a2e", letterSpacing: "0.2em" }}
            >
              Home Services
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1a3a50" }}
            >
              Everything your home needs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#f4f1eb",
                  border: "1.5px solid transparent",
                  boxShadow: "0 2px 12px rgba(47,123,180,0.06)",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2f7bb4";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(47,123,180,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(47,123,180,0.06)";
                }}
              >
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1a3a50" }}>
                  {s.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL SERVICES */}
      <section
        className="py-16 px-6"
        style={{
          background: "linear-gradient(135deg, #1a3a50 0%, #2f7bb4 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{ color: "#b09a2e", letterSpacing: "0.2em" }}
            >
              Commercial Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We also serve businesses
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Reliable commercial cleaning solutions for all types of premises
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {commercial.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl px-8 py-5"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(176,154,46,0.35)",
                  minWidth: "220px",
                }}
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="font-semibold text-white text-sm">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6"
        style={{ background: "#f4f1eb" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold"
            style={{ color: "#b09a2e", letterSpacing: "0.2em" }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{ color: "#1a3a50" }}
          >
            Ready for a cleaner home?
          </h2>
          <p className="mb-10 text-lg" style={{ color: "#666" }}>
            Contact us today — we're always happy to discuss your cleaning needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Email */}
            <a
              href="mailto:firstchoicedomestic@suremail.gg"
              className="flex items-center gap-3 px-8 py-5 rounded-2xl transition-all duration-200 hover:scale-105"
              style={{
                background: "#2f7bb4",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(47,123,180,0.3)",
                textDecoration: "none",
                minWidth: "260px",
              }}
            >
              <span className="text-xl">✉</span>
              <div className="text-left">
                <div className="text-xs opacity-70 uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-sm font-semibold">firstchoicedomestic@suremail.gg</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:07781103864"
              className="flex items-center gap-3 px-8 py-5 rounded-2xl transition-all duration-200 hover:scale-105"
              style={{
                background: "#b09a2e",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(176,154,46,0.3)",
                textDecoration: "none",
                minWidth: "220px",
              }}
            >
              <span className="text-xl">☎</span>
              <div className="text-left">
                <div className="text-xs opacity-70 uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-sm font-semibold">07781 103864</div>
              </div>
            </a>
          </div>

          <p className="mt-6 text-sm" style={{ color: "#999" }}>
            24HR Answer Phone — short notice considered
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center"
        style={{ background: "#1a3a50" }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span style={{ color: "#b09a2e" }}>✦</span>
          <span className="text-sm font-semibold tracking-widest uppercase text-white" style={{ letterSpacing: "0.15em" }}>
            First Choice Domestic
          </span>
          <span style={{ color: "#b09a2e" }}>✦</span>
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Affordable, reliable, and trusted home & commercial cleaning services.
        </p>
      </footer>
    </div>
  );
}