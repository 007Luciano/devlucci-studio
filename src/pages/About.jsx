import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, Globe, Users, Target } from "lucide-react";

const COLORS = {
  primary: "#1E3A5F",
  secondary: "#06B6D4",
  accent: "#FBBF24",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <main className="text-slate-900 ">
    {/* // <main className="text-slate-900 overflow-x-hidden"> */}
      {/* =========================
          HERO
         ========================= */}
      {/* <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#153861] to-[#06B6D4] text-white py-28"> */}
      {/* <section className="relative overflow-visible bg-gradient-to-br from-[#1E3A5F] via-[#153861] to-[#06B6D4] text-white py-28"> */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#153861] to-[#06B6D4] text-white py-28">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About <span style={{ color: COLORS.accent }}>DevLucci</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-blue-100 text-lg"
          >
            DevLucci is a digital design and development studio focused on building
            purposeful, high-quality digital experiences that help businesses grow
            and connect with their audiences.
          </motion.p>
        </div>

        <div
          className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: COLORS.accent }}
        />
      </section>

      {/* =========================
          WHO WE ARE
         ========================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: COLORS.primary }}>
              Who We Are
            </h2>
            <p className="mt-4 text-slate-600">
              DevLucci is a Malawian-founded creative technology studio delivering
              thoughtful design and reliable software solutions. We combine clean,
              maintainable code with user-centered design to help organizations
              strengthen their digital presence and achieve measurable outcomes.
              <br /><br />
              Our work is driven by clarity, collaboration, and a commitment to
              building digital products that are both functional and impactful —
              locally and globally.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION & VISION
         ========================= */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl mb-4"
              style={{ background: COLORS.secondary }}
            >
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: COLORS.primary }}>
              Our Mission
            </h3>
            <p className="text-slate-600">
              To help startups, businesses, and organizations succeed by delivering
              reliable, scalable, and user-focused digital solutions that support
              long-term growth and trust.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl mb-4"
              style={{ background: COLORS.accent }}
            >
              <Globe className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: COLORS.primary }}>
              Our Vision
            </h3>
            <p className="text-slate-600">
              To become a trusted African digital studio recognized for quality,
              innovation, and professionalism — contributing meaningful technology
              solutions that compete at a global standard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          VALUES
         ========================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12" style={{ color: COLORS.primary }}>
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We approach every challenge with curiosity, creativity, and a focus on practical solutions.",
                icon: Lightbulb,
                color: COLORS.secondary,
              },
              {
                title: "Collaboration",
                desc: "We work closely with clients as partners, ensuring transparency and shared success.",
                icon: Users,
                color: COLORS.accent,
              },
              {
                title: "Excellence",
                desc: "We hold ourselves to high standards, delivering work that is thoughtful, reliable, and well-crafted.",
                icon: Globe,
                color: COLORS.primary,
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-slate-50 rounded-2xl p-8 shadow-sm"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4"
                  style={{ background: val.color }}
                >
                  <val.icon className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: COLORS.primary }}>
                  {val.title}
                </h4>
                <p className="text-slate-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FOUNDER STORY
         ========================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{ color: COLORS.primary }}
          >
            Our Origin
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-slate-600 text-lg leading-relaxed"
          >
            DevLucci was founded by <span className="font-semibold">Lucky Fatch</span>,
            a Malawian software engineer with a strong focus on quality, design, and
            purposeful technology. The studio was created to demonstrate that
            world-class digital products can be designed and built from anywhere.
            <br /><br />
            What began as a founder-led initiative has grown into a collaborative
            digital studio supporting businesses through design, development, and
            strategy. DevLucci is built on integrity, clarity, and long-term value —
            one project at a time.
          </motion.p>
        </div>
      </section>

      {/* =========================
          CTA
         ========================= */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#153861] to-[#06B6D4] text-white py-20 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Building Reliable Digital Solutions Across Africa and Beyond  
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Partner with a studio that values clarity, quality, and long-term
            success. Let’s discuss how we can support your next project.
          </p>
          <Link to="/contact">
              <button className="rounded-lg px-6 py-3 font-semibold shadow-lg" style={{ background: "#fff", color: COLORS.primary }}>
              Start Your Project
              </button>
          </Link>
        </div>

        <div
          className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: COLORS.accent }}
        />
      </section>
    </main>
  );
};

export default About;
