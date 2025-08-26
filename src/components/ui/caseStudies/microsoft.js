import React from "react";
import results from "../../../assets/Results.jpg";
import problem from "../../../assets/problemStatement.jpg";
import initiative from "../../../assets/Initiatives.jpg";

export default function Microsoft() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 mt-[73px] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-white tracking-wide">
          Microsoft UAE - D365 Campaign
        </h1>

        {/* Split Screen Layout */}
        <div className="min-h-screen flex flex-col">
          
          {/* Problem Section */}
          <div className="flex-1 flex items-stretch mb-8" data-aos="fade-right">
            <div className="w-1/2 bg-gradient-to-br from-red-900/30 to-red-800/30 p-12 flex flex-col justify-center border-r-4 border-red-500">
              <div className="mb-6">
                <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">Challenge</span>
                <h2 className="text-4xl font-bold text-white mt-2">Problem Statement</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Partner has customized solution on D365, Alif was engaged to create awareness of their ERP & CRM solution through lead generation and webinar activities.
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
            <div className="w-1/2 bg-gradient-to-bl from-blue-900/30 to-blue-800/30 p-12 flex flex-col justify-center border-l-4 border-blue-500">
              <div className="mb-6">
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Solution</span>
                <h2 className="text-4xl font-bold text-white mt-2">Our Approach</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Cold Calling customers and generating interest in the ERP and CRM</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Presenting DEMO on 2nd Call</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Pass on the Lead details and Progress to Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1 flex items-stretch" data-aos="fade-up">
            <div className="w-1/2 bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 p-12 flex flex-col justify-center border-r-4 border-emerald-500">
              <div className="mb-6">
                <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Impact</span>
                <h2 className="text-4xl font-bold text-white mt-2">Results Achieved</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-400 pl-4">
                  <div className="text-2xl font-bold text-emerald-400">3 Webinars</div>
                  <p className="text-gray-300">50+ attendees each in 3 months</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4">
                  <div className="text-2xl font-bold text-emerald-400">30+ Appointments</div>
                  <p className="text-gray-300">Demo presentations delivered</p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-4">
                  <div className="text-2xl font-bold text-emerald-400">10+ Qualified Leads</div>
                  <p className="text-gray-300">Handed over to partner</p>
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