import React from 'react'

const Hero = () => {
  return (
      <section
        id="home"
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

        >
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
         <span className='text-red-300'>   Affordable &{" "}</span>
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
            Experienced, insured, and police checked staff  giving you complete peace of mind in your own home.
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
  )
}

export default Hero
