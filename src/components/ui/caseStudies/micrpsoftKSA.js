import React from "react";
import results from "../../../assets/Results.jpg";
import problem from "../../../assets/problemStatement.jpg";
import initiative from "../../../assets/Initiatives.jpg";

export default function MicrosoftKSA() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 mt-[73px] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-white tracking-wide">
          Microsoft KSA
        </h1>

        {/* Split Screen Layout */}
        <div className="min-h-screen flex flex-col">
          
          {/* Problem Section */}
          <div className="flex-1 flex items-stretch mb-8" data-aos="fade-right">
            <div className="w-1/2 bg-gradient-to-br from-orange-900/30 to-orange-800/30 p-12 flex flex-col justify-center border-r-4 border-orange-500">
              <div className="mb-6">
                <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">Challenge</span>
                <h2 className="text-4xl font-bold text-white mt-2">Problem Statement</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                As Azure did not have its datacenter in KSA, a campaign was initiated to increase the reach and create awareness in KSA
              </p>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img src={problem} alt="Problem" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50"></div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="flex-1 flex items-stretch mb-8" data-aos="fade-left">
            <div className="w-1/2 relative overflow-hidden">
              <img src={initiative} alt="Solution" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
            </div>
            <div className="w-1/2 bg-gradient-to-bl from-purple-900/30 to-purple-800/30 p-12 flex flex-col justify-center border-l-4 border-purple-500">
              <div className="mb-6">
                <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Solution</span>
                <h2 className="text-4xl font-bold text-white mt-2">Our Approach</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Microsoft KSA aligned Alif with Gold Partners in the region</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Lead generation campaign through cold calling were rigorously conducted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1 flex items-stretch" data-aos="fade-up">
            <div className="w-1/2 bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 p-12 flex flex-col justify-center border-r-4 border-cyan-500">
              <div className="mb-6">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Impact</span>
                <h2 className="text-4xl font-bold text-white mt-2">Results Achieved</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-2xl font-bold text-cyan-400">High Volume</div>
                  <p className="text-gray-300">Qualified leads generated for Azure</p>
                </div>
                <div className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-2xl font-bold text-cyan-400">Successful Campaign</div>
                  <p className="text-gray-300">Increased Azure awareness in KSA</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <img src={results} alt="Results" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}