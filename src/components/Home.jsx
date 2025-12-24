import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-44 overflow-hidden px-20 "
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Text content */}
            <div className="lg:w-1/2">
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-blue-600 bg-opacity-80 text-sm px-4 py-2 rounded-full mb-4">
                  Modern Web Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Crafting Digital{" "}
                <span className="text-blue-300">Experiences</span> That Matter
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
              >
                We design and develop beautiful, functional websites that help
                your business stand out and grow online.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                  Get Started
                </button>
              </Link>
                
                <button className="border-2 border-blue-400 text-blue-100 hover:bg-blue-900 hover:bg-opacity-30 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                  View Portfolio
                </button>
              </motion.div>
            </div>

            {/* Illustration/Image */}
            <motion.div variants={floatingVariants} animate="float" className="lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>

                <div className="relative bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-4 bg-gray-900">
                      <div className="flex space-x-2">
                        <div className="w-1/2">
                          <div className="h-3 bg-gray-700 rounded mb-2"></div>
                          <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                        </div>
                        <div className="w-1/2">
                          <div className="h-3 bg-gray-700 rounded mb-2"></div>
                          <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-gray-700 rounded-lg h-20 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        ))}
                      </div>

                      <div className="bg-blue-900 bg-opacity-40 p-3 rounded border border-blue-800">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-600 rounded-full mr-3"></div>
                          <div>
                            <div className="h-2 bg-blue-700 rounded w-24 mb-2"></div>
                            <div className="h-2 bg-blue-700 rounded w-16"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 md:py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "3+", label: "Projects Completed" },
              { number: "95%", label: "Client Retention" },
              { number: "4.9", label: "Average Rating" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-[#1e3a5f] mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Great design isn’t just about looking good — it’s about making things easy to use. We design user interfaces (UI) and user experiences (UX) that help your customers interact with your product smoothly. From layout to colors and buttons, every detail matters. Our goal is to make your digital experience feel effortless.",
                icon: "🎨"
              },
              {
                title: "Website Development",
                description: "We build professional, easy-to-use websites that help you showcase your business and attract more customers online. From simple landing pages to full-featured websites, we focus on clean design, fast performance, and mobile responsiveness. Whether you're just starting out or looking to upgrade your current site, we’ll build a solution tailored to your goals. Your online presence matters — and we're here to help you stand out.",
                icon: "💻"
              },
              {
                title: "Mobile App Development",
                description: "We create mobile apps that bring your ideas to users on the go. Whether it’s for Android, iOS, or both, we design and build apps that are functional, beautiful, and easy to use. From business tools to lifestyle apps, we turn your vision into something your users will love.",
                icon: "📱"
              }
              // ,
              // {
              //   title: "E-Commerce",
              //   description: "Custom online stores that boost sales",
              //   icon: "🛒"
              // },
              // {
              //   title: "Branding",
              //   description: "Create a memorable brand identity",
              //   icon: "✨"
              // },
              // {
              //   title: "Maintenance",
              //   description: "Ongoing support and updates",
              //   icon: "🛠️"
              // }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl text-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#1e3a5f]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Lucci transformed our online presence completely. Our conversion rates tripled!",
                name: "Sarah Johnson",
                company: "Bloom Cosmetics"
              },
              {
                quote: "The team delivered our project ahead of schedule with exceptional quality.",
                name: "Michael Chen",
                company: "TechNova"
              },
              {
                quote: "Ongoing support has been incredible. Truly a partnership, not just a vendor.",
                name: "David Wilson",
                company: "Wilson & Co"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-[#1e3a5f]">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a5f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how we can help you achieve your goals</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1e3a5f] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300">
                Call: (123) 456-7890
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Home;
