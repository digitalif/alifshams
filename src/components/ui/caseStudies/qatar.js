import React from "react";
import results from "../../../assets/Results.jpg";
import problem from "../../../assets/problemStatement.jpg";
import initiative from "../../../assets/Initiatives.jpg";

export default function Qatar() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 mt-[73px] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-white tracking-wide">
          Mannai- Qatar
        </h1>

        {/* Split Screen Layout */}
        <div className="min-h-screen flex flex-col">
          
          {/* Problem Section */}
          <div className="flex-1 flex items-stretch mb-8" data-aos="fade-right">
            <div className="w-1/2 bg-gradient-to-br from-rose-900/30 to-rose-800/30 p-12 flex flex-col justify-center border-r-4 border-rose-500">
              <div className="mb-6">
                <span className="text-rose-400 text-sm font-semibold tracking-wider uppercase">Challenge</span>
                <h2 className="text-4xl font-bold text-white mt-2">Problem Statement</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Mannai Group approached Alif to carry out activities like M365 Migration and Microsoft Training Workshops. The activities were free to the Customer and the amount was claimed from their Microsoft Co-Op funding.
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
            <div className="w-1/2 bg-gradient-to-bl from-teal-900/30 to-teal-800/30 p-12 flex flex-col justify-center border-l-4 border-teal-500">
              <div className="mb-6">
                <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">Solution</span>
                <h2 className="text-4xl font-bold text-white mt-2">Our Approach</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Email blasting with EDM (Agenda for training)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Align appointment and deliver the workshops</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300">Complete M365 migration and project planning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1 flex items-stretch" data-aos="fade-up">
            <div className="w-1/2 bg-gradient-to-br from-green-900/30 to-green-800/30 p-12 flex flex-col justify-center border-r-4 border-green-500">
              <div className="mb-6">
                <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">Impact</span>
                <h2 className="text-4xl font-bold text-white mt-2">Results Achieved</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="text-2xl font-bold text-green-400">10 Workshops</div>
                  <p className="text-gray-300">5 attendees on each workshop</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="text-2xl font-bold text-green-400">25 Pre-Sales</div>
                  <p className="text-gray-300">Demo presentations on M365</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="text-2xl font-bold text-green-400">12 Companies</div>
                  <p className="text-gray-300">M365 migration completed</p>
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