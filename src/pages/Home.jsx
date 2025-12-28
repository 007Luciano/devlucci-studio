// Home.jsx
import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Palette,
  Code,
  Smartphone,
  Search,
  Brush,
  Code2,
  Rocket,
} from "lucide-react";

/*
  Color balance (50/30/20):
    Primary 50%  -> Deep Navy   : #1E3A5F
    Secondary 30%-> Aqua Teal   : #06B6D4
    Accent 20%   -> Warm Gold   : #FBBF24
*/

const COLORS = {
  primary: "#1E3A5F",
  secondary: "#06B6D4",
  accent: "#FBBF24",
};

// Reusable motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 * i },
  }),
};

const cardHover = { scale: 1.03, translateY: -6, boxShadow: "0 18px 40px rgba(18, 52, 86, 0.18)" };

const Home = () => {
  const controls = useAnimation();
  const [heroRef, heroInView] = useInView({ threshold: 0.15, triggerOnce: false });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.15, triggerOnce: false });

  // Parallax using framer-motion useScroll + useTransform
  const { scrollY } = useScroll();
  // subtle parallax offsets
  const heroFloat = useTransform(scrollY, [0, 600], [0, -40]);
  const heroGlow = useTransform(scrollY, [0, 600], [1, 0.65]);

  useEffect(() => {
    if (heroInView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, heroInView]);

  useEffect(() => {
    if (servicesInView) controls.start("visible");
  }, [controls, servicesInView]);

  return (
    <main className="overflow-x-hidden antialiased text-slate-900">
      {/* =========================
          HERO
         ========================= */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        aria-label="Hero"
      >
        {/* Background gradient + subtle texture */}
        <motion.div
          style={{ opacity: heroGlow }}
          className="absolute inset-0 bg-gradient-to-br from-[rgba(30,58,95,0.95)] via-[rgba(37,99,235,0.75)] to-[rgba(6,182,212,0.65)] pointer-events-none"
          // className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[rgba(15,70,189,0.75)] to-[#152c4b] pointer-events-none"
          aria-hidden="true"
        />

        {/* Animated radial glows */}
        <motion.div
          style={{ translateY: heroFloat }}
          className="absolute -left-16 -top-12 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
          // style={{ background: COLORS.secondary }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 py-28 md:py-36 lg:py-44 relative z-20">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Text */}
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <span
                className="inline-flex items-center gap-2 text-sm rounded-full px-3 py-1 font-medium"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" className="rounded-full">
                  <circle cx="4" cy="4" r="4" fill={COLORS.accent} />
                </svg>
                Boutique Digital Studio
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Designing & Building{" "}
                <span style={{ color: COLORS.accent }} className="inline-block">
                  High-Performing Digital Products
                </span>{" "}
                for Growing Businesses
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl text-blue-100">
                We help startups, organizations, and brands turn ideas into scalable,
                user-focused websites and applications that deliver measurable results.
              </p>

              <motion.div
                variants={fadeInUp}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 rounded-lg px-6 py-3 font-semibold shadow-lg"
                    style={{
                      background: `linear-gradient(90deg, ${COLORS.secondary}, #0891B2)`,
                      color: "#05263B",
                      boxShadow: "0 10px 30px rgba(6,182,212,0.18)",
                    }}
                  >
                    Start a Project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12h14M13 5l6 7-6 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>
                </Link>

                <Link to="/portfolio" aria-label="View portfolio">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg px-6 py-3 border-2 border-white/30 text-white/95 backdrop-blur-sm"
                    style={{ background: "transparent" }}
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Illustration / Device mockup with floating glows */}
            <motion.div
              variants={fadeInUp}
              className="lg:w-1/2 relative w-full max-w-2xl"
              style={{ translateY: heroFloat }}
              aria-hidden="true"
            >
              {/* neon blobs */}
              <div
                className="absolute -right-12 -top-10 w-44 h-44 rounded-full opacity-30 blur-2xl pointer-events-none"
                style={{ background: COLORS.secondary }}
              />
              <div
                className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full opacity-25 blur-2xl pointer-events-none"
                style={{ background: COLORS.primary }}
              />

              <div
                className="relative rounded-3xl p-6 bg-gradient-to-br from-[rgba(8,16,32,0.25)] to-[rgba(2,6,23,0.18)] border border-white/10 shadow-2xl"
                style={{ backdropFilter: "blur(6px)" }}
              >
                {/* Top traffic light */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-300" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Mock grid */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.06 * i, duration: 0.4 }}
                      className="h-20 rounded-lg bg-gradient-to-br from-white/6 to-white/3"
                      style={{ border: "1px solid rgba(255,255,255,0.03)" }}
                    />
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-white/4 to-transparent border border-white/6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[rgba(6,182,212,0.9)] to-[rgba(37,99,235,0.9)] shadow-md" />
                  <div className="flex-1">
                    <div className="h-3 bg-white/20 rounded w-36 mb-2" />
                    <div className="h-2 bg-white/12 rounded w-20" />
                  </div>
                </div>
              </div>

              {/* subtle floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 right-6 bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-3"
                style={{ minWidth: 160 }}
              >
                <div className="w-8 h-8 rounded-full" style={{ background: COLORS.secondary }} />
                <div>
                  <div className="text-sm font-semibold">Live Prototype</div>
                  <div className="text-xs text-slate-500">Clickable preview</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="w-6 h-10 border-2 border-black/40 rounded-full flex items-start justify-center p-1">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.accent }} />
          </div>
        </div>

        {/* diagonal SVG wave divider */}
        <div className="-mb-1">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" style={{ fill: COLORS.primary }} />
          </svg>
        </div>
      </section>

      {/* =========================
          STATS
         ========================= */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "5+ Years", label: "Combined Experience" },
              { number: "Multiple", label: "Industries Served" },
              { number: "High", label: "Client Satisfaction" },
              { number: "Reliable", label: "Ongoing Support" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={cardHover}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.primary }}>{s.number}</p>
                <p className="mt-2 text-sm text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          SERVICES
         ========================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.primary }}>
                Our Services
              </h2>
              <p className="mt-4 text-slate-600">We turn ideas into engaging digital experiences through thoughtful design and clean development.</p>
            </motion.div>

            <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "UI/UX Design",
                  description: "User-centered design focused on clarity, usability, and conversion — ensuring every interaction serves a purpose.",
                  Icon: Palette,
                  gradient: `linear-gradient(135deg, ${COLORS.secondary}, #0891B2)`,
                },
                {
                  title: "Website Development",
                  description: "High-performance, accessible websites engineered for speed, scalability, and long-term maintainability.",
                  Icon: Code,
                  gradient: `linear-gradient(135deg, #2563EB, ${COLORS.primary})`,
                },
                {
                  title: "Mobile Apps",
                  description: "Robust cross-platform and native applications built to scale while delivering a seamless user experience.",
                  Icon: Smartphone,
                  gradient: `linear-gradient(135deg, ${COLORS.accent}, #F59E0B)`,
                },
              ].map((svc, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ ...cardHover }}
                  className="bg-white rounded-2xl p-8 shadow-md transition-transform duration-300"
                >
                  <div style={{ width: 68, height: 68 }} className="rounded-xl flex items-center justify-center mb-6" aria-hidden>
                    <div style={{ background: svc.gradient }} className="w-full h-full rounded-xl flex items-center justify-center shadow-md">
                      <svc.Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.primary }}>{svc.title}</h3>
                  <p className="text-slate-600">{svc.description}</p>

                  <div className="mt-6">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.secondary }}>
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14M13 5l6 7-6 7" stroke={COLORS.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="-mt-1">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" style={{ fill: COLORS.primary }} />
          </svg>
        </div>
      </section>

      {/* ========================= 
          PROCESS
        ========================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: COLORS.primary }}
            >
              Our Process
            </h2>
            <p className="mt-4 text-slate-600">
              A structured and transparent workflow designed to ensure clarity,
              collaboration, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Discover",
                Icon: Search,
                color: `linear-gradient(135deg, ${COLORS.secondary}, #0891B2)`,
                description:
                  "We learn about your goals, audience, and challenges to align our design and development approach.",
              },
              {
                step: "Design",
                Icon: Brush,
                color: `linear-gradient(135deg, #2563EB, ${COLORS.primary})`,
                description:
                  "Our designers craft visually appealing, user-centered designs that balance beauty and usability.",
              },
              {
                step: "Develop",
                Icon: Code2,
                color: `linear-gradient(135deg, ${COLORS.accent}, #F59E0B)`,
                description:
                  "We bring ideas to life with clean code, ensuring performance, scalability, and responsiveness.",
              },
              {
                step: "Deliver",
                Icon: Rocket,
                color: `linear-gradient(135deg, #14B8A6, #0D9488)`,
                description:
                  "We launch your project, provide ongoing support, and ensure your digital experience continues to thrive.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-8 rounded-2xl shadow-sm relative"
              >
                <div
                  style={{ width: 60, height: 60 }}
                  className="rounded-xl mb-4 flex items-center justify-center"
                  aria-hidden
                >
                  <div
                    style={{ background: p.color }}
                    className="w-full h-full rounded-xl flex items-center justify-center shadow"
                  >
                    <p.Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                  {p.step}
                </h4>

                <p className="text-slate-600 text-sm">{p.description}</p>

                <span className="absolute top-4 right-6 text-4xl font-extrabold text-slate-200 opacity-20 select-none">
                  {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================
          TESTIMONIALS
         ========================= */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.primary }}>What Clients Say</h2>
            <p className="mt-4 text-slate-600">We measure success by results and long-term partnerships.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Clarissa Mutoni",
                title: "Founder, Bloom Cosmetics",
                quote:
                  "Our website performance and customer engagement improved significantly within weeks of launch.",
              },
              {
                name: "Jones Chikwegza",
                title: "CTO, TechNova",
                quote:
                  "The team delivered a clean, scalable solution that exceeded our technical expectations.",
              },
              {
                name: "Madaundi Paundi",
                title: "Managing Partner, Mada & Co",
                quote:
                  "A reliable partner who understands business goals and translates them into effective digital solutions.",
              },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="mx-auto w-20 h-20 rounded-full mb-4 border-4" style={{ borderColor: COLORS.secondary, backgroundImage: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.primary})` }} />
                <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                <p className="text-slate-700 italic mb-6">“{t.quote}”</p>
                <div>
                  <h4 className="font-bold" style={{ color: COLORS.primary }}>{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          CTA
         ========================= */}
      <section className="relative bg-gradient-to-br from-[rgba(30,58,95,0.96)] to-[rgba(6,182,212,0.94)] text-white py-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold mb-4">
            Let’s Build Something <span style={{ color: COLORS.accent }}>Extraordinary</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-8 text-blue-100 max-w-2xl mx-auto">Whether it’s a website, native app, or product strategy — we’ll help you move faster and smarter.</motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-center gap-4">
            <Link to="/contact">
              <button className="rounded-lg px-6 py-3 font-semibold shadow-lg" style={{ background: "#fff", color: COLORS.primary }}>
                Start Your Project
              </button>
            </Link>
            <a href="mailto:contact@devlucci.com" className="rounded-lg px-6 py-3 border-2 border-white/40 text-white">
              Email Us
            </a>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="none">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              contact@devlucci.com
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="none">
                <path d="M3 5h2l3.6 7.59L5.25 17.04A1 1 0 006 19h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +265 999 566 1361
            </div>
          </div>
        </div>

        {/* Decorative radial globe */}
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: COLORS.accent }} />
      </section>
    </main>
  );
};

export default Home;