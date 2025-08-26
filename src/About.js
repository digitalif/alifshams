import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaAward,
} from "react-icons/fa";
import heroImage from "./assets/industries1.png";
import aboutImage from "./assets/software.avif";
import apart from "./assets/Apart.webp";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <FaChartLine /> },
    { number: "50+", label: "Enterprise Clients", icon: <FaUsers /> },
    { number: "15+", label: "Years Experience", icon: <FaAward /> },
    { number: "99%", label: "Client Satisfaction", icon: <FaBullseye /> },
  ];

  const whoWeArePoints = [
    "Leading technology solutions provider",
    "Dedicated to transforming businesses through innovation",
    "Trusted partner for organizations worldwide",
    "Expertise in AI consulting and business transformation",
  ];

  const whatsetsapart = [
    "Traditional lead generation approach fails to attract quality leads",
    "At Alif, we have technically trained resources",
    "Technology is the heart of our lead generation process",
    "High-quality leads are generated as a consequence",
  ];

  const coreValues = [
    { icon: <FaBullseye />, title: "Business Outcome-First", description: "Business outcome-first thinking" },
    { icon: <FaRocket />, title: "Agile Delivery", description: "Agile delivery models" },
    { icon: <FaGlobe />, title: "Global Innovation", description: "Global innovation, local execution" },
    { icon: <FaShieldAlt />, title: "Ethical AI", description: "Ethical frameworks for AI and tech" },
    { icon: <FaHandshake />, title: "Partnership", description: "True transformation partnership" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About Us" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ALIF
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Enterprise Architecture Through Innovation
          </motion.p>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Enterprise Excellence</span>
                <h2 className="text-5xl font-bold mt-4 mb-6">Who We Are</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  We are a leading technology solutions provider dedicated to transforming businesses through innovative AI and enterprise architecture solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {whoWeArePoints.map((point, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={aboutImage} alt="Who We Are" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-12 rounded-3xl border border-blue-500/30"
              data-aos="fade-right"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-8">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To deliver comprehensive brand marketing and public relations solutions that are distinctive and effective in assisting our customers in expanding their businesses and meeting their marketing goals.
              </p>
            </div>
            
            <div 
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-12 rounded-3xl border border-purple-500/30"
              data-aos="fade-left"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We envision to deliver results-driven brand marketing campaigns and public relations activities that boost our customers' visibility, income, and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Competitive Advantage</span>
            <h2 className="text-5xl font-bold mt-4">What Sets Us Apart</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              className="relative order-2 lg:order-1"
              data-aos="fade-right"
            >
              <img src={apart} alt="What sets us apart" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div 
              className="space-y-6 order-1 lg:order-2"
              data-aos="fade-left"
            >
              {whatsetsapart.map((point, index) => (
                <div key={index} className="flex items-start p-6 bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-xl border-l-4 border-cyan-400">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-gradient-to-b from-black/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Foundation</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            We work as your transformation partner—not a vendor—by combining these fundamental principles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-slate-800/80 p-8 rounded-2xl border border-gray-700 hover:border-emerald-400/50 hover:shadow-2xl transition-all duration-50 cursor-pointer"
                style={{ transform: 'translateY(0px)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl text-emerald-400 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;