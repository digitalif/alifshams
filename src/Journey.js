import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import collabImage from "./assets/Collab.jpg";
import partner from "../src/assets/Partner1.jpg";
import { Link } from "react-router-dom";
const Journey = () => {
  const whyUsPoints = [
    "Proven track record with 500+ successful AI implementations",
    "Expert team with deep industry knowledge and technical expertise",
    "End-to-end support from strategy to deployment and beyond",
    "Cutting-edge AI technologies and innovative solutions",
    "Agile methodology ensuring rapid delivery and iteration",
    "Strong focus on ethical AI and compliance frameworks",
    "Global reach with local execution and personalized service",
    "Continuous learning and adaptation to emerging technologies",
  ];

  const collaborationSteps = [
    {
      step: "1. Initial Consultation",
      description:
        "Schedule a discovery call to understand your needs and objectives",
    },
    {
      step: "2. Executive Alignment",
      description:
        "Turning leadership consensus into organizational momentum",
    },
    {
      step: "3. Initiate Onboarding",
      description:
        "Complete onboarding with dedicated account management and project setup",
    },
    {
      step: "4. Collaboration Begins",
      description:
        "Start working with our expert team on your transformation journey",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black overflow-hidden">
      {/* Hero Section */}
      <div
        className="bg-[#1f1f1f] text-white h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${partner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Partner with ALIF
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join forces with us to transform your business through innovative AI
            and technology solutions
          </motion.p>
        </div>
      </div>

      {/* Why Us Section - Split Layout */}
      <div className="py-20 bg-gradient-to-b from-black/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-stretch mb-12" data-aos="fade-right">
            <div className="w-1/2 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-12 flex flex-col justify-center border-r-4 border-blue-500">
              <div className="mb-6">
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                  Excellence
                </span>
                <h2 className="text-4xl font-bold text-white mt-2">
                  Why Choose ALIF?
                </h2>
              </div>
              <div className="space-y-4">
                {whyUsPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-lg text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src={collabImage}
                alt="Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Collaborate Section - Timeline Layout */}
      <div className="py-20 bg-gradient-to-b from-blue-900/20 to-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16 text-white"
            data-aos="fade-up"
          >
            How to Collaborate with Us
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 h-full"></div>

            {collaborationSteps.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-16"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 pr-8">
                      <div className="bg-gradient-to-r from-blue-800/50 to-slate-800/50 p-6 rounded-xl border-l-4 border-blue-400">
                        <h3 className="text-xl font-bold mb-3 text-blue-300">
                          {item.step}
                        </h3>
                        <p className="text-gray-200">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 p-6 rounded-xl border-r-4 border-blue-400">
                        <h3 className="text-xl font-bold mb-3 text-blue-300">
                          {item.step}
                        </h3>
                        <p className="text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Your Transformation?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Get whitelisted and onboard with ALIF to begin your AI
            transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-white text-[#B31F7E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
