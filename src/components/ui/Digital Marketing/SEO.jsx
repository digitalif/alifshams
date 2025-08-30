import React from "react";
import aiImage from "../../../assets/SEO.jpg";
import SEOComponent from "../../SEOComponent";
import OptimizedImage from "../../OptimizedImage";
import strategyImage from "../../../assets/SEO-2.jpg";

export default function SEO() {
  return (
    <div className="bg-white">
      <SEOComponent 
        title="SEO Services - Search Engine Optimization & Ranking | AlifShams"
        description="Professional SEO services to boost your search rankings. Technical SEO audits, keyword research, on-page optimization, local SEO, and performance analytics to drive organic traffic."
        keywords="SEO services, search engine optimization, keyword research, technical SEO, on-page SEO, local SEO, SEO audit, organic traffic, search rankings, SEO strategy"
        url="https://digitalif.net/solutions/digital-marketing/seo"
        type="service"
      />
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={aiImage}
            alt="SEO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            SEO
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Enhance organic visibility through technical SEO, keyword strategy, and performance insights
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image - Left Side */}
            <div className="flex-1">
              <OptimizedImage
                src={strategyImage}
                alt="SEO"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                SEO
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Enhance organic visibility through technical SEO, keyword strategy, and performance insights.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive SEO approach improves your search rankings and drives qualified organic traffic to boost your online presence and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}