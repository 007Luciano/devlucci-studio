import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Smartphone,
  Layers,
  Megaphone,
  Wrench,
  Search,
  Brush,
  Code2,
  Rocket,
} from "lucide-react";

const COLORS = {
  primary: "#1E3A5F",
  secondary: "#06B6D4",
  accent: "#FBBF24",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardHover = {
  scale: 1.03,
  translateY: -6,
  boxShadow: "0 18px 40px rgba(18, 52, 86, 0.18)",
};

const Services = () => {
  return (
    <main className="text-slate-900">
      {/* =========================
          HERO
         ========================= */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#153861] to-[#06B6D4] text-white py-28">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our <span style={{ color: COLORS.accent }}>Services</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-blue-100 text-lg"
          >
            We provide end-to-end digital solutions — from strategy and design
            to development and long-term support — helping businesses build,
            scale, and succeed online.
          </motion.p>
        </div>

        <div
          className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: COLORS.accent }}
        />
      </section>

      {/* =========================
          SERVICES GRID
         ========================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-14"
            >
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: COLORS.primary }}
              >
                What We Do
              </h2>
              <p className="mt-4 text-slate-600">
                Our services are designed to deliver clarity, performance, and
                long-term value — supporting your business at every stage of
                its digital journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Web Design & Development",
                  desc: "High-performance, responsive websites built with clean code, accessibility, and conversion in mind.",
                  Icon: Code,
                  gradient: `linear-gradient(135deg, ${COLORS.secondary}, #0891B2)`,
                },
                {
                  title: "UI/UX Design",
                  desc: "User-centered interface and experience design that prioritizes usability, clarity, and business outcomes.",
                  Icon: Palette,
                  gradient: `linear-gradient(135deg, #2563EB, ${COLORS.primary})`,
                },
                {
                  title: "Mobile App Development",
                  desc: "Scalable cross-platform and native mobile applications built for performance and a seamless user experience.",
                  Icon: Smartphone,
                  gradient: `linear-gradient(135deg, ${COLORS.accent}, #F59E0B)`,
                },
                {
                  title: "Branding & Identity",
                  desc: "Consistent brand systems that communicate trust, professionalism, and a clear visual identity.",
                  Icon: Layers,
                  gradient: `linear-gradient(135deg, #14B8A6, #0D9488)`,
                },
                {
                  title: "Digital Marketing",
                  desc: "Strategic digital marketing solutions focused on visibility, engagement, and sustainable growth.",
                  Icon: Megaphone,
                  gradient: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                },
                {
                  title: "Maintenance & Support",
                  desc: "Ongoing technical support, updates, and optimization to keep your digital products secure and reliable.",
                  Icon: Wrench,
                  gradient: `linear-gradient(135deg, ${COLORS.accent}, #F59E0B)`,
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ ...cardHover }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div
                    style={{ width: 70, height: 70 }}
                    className="rounded-xl flex items-center justify-center mb-6"
                    aria-hidden
                  >
                    <div
                      style={{ background: s.gradient }}
                      className="w-full h-full rounded-xl flex items-center justify-center shadow-md"
                    >
                      <s.Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: COLORS.primary }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-slate-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          PROCESS
         ========================= */}
      <section className="py-20 bg-slate-50">
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
              },
              {
                step: "Design",
                Icon: Brush,
                color: `linear-gradient(135deg, #2563EB, ${COLORS.primary})`,
              },
              {
                step: "Develop",
                Icon: Code2,
                color: `linear-gradient(135deg, ${COLORS.accent}, #F59E0B)`,
              },
              {
                step: "Deliver",
                Icon: Rocket,
                color: `linear-gradient(135deg, #14B8A6, #0D9488)`,
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md relative"
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
                <h4
                  className="font-semibold mb-2"
                  style={{ color: COLORS.primary }}
                >
                  {p.step}
                </h4>
                <p className="text-slate-600 text-sm">
                  We work closely with you at every stage to ensure alignment
                  with your goals and expectations.
                </p>
                <span className="absolute top-4 right-6 text-4xl font-extrabold text-slate-200 opacity-20 select-none">
                  {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
         ========================= */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#153861] to-[#06B6D4] text-white py-20 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let’s Build Something That Works
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Tell us about your project and we’ll help you design and build a
            reliable digital solution. Free consultation • No obligation.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg px-6 py-3 font-semibold shadow-lg"
            style={{ background: "#fff", color: COLORS.primary }}
          >
            Start a Conversation
          </a>
        </div>

        <div
          className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.accent }}
        />
      </section>
    </main>
  );
};

export default Services;
