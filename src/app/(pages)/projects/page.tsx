import React from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "Collection of 90 crop varieties",
    description:
      "Collection of 90 crop varieties of rice, finger millet, cowpea, hyacinth Bean, leafy vegetables, tuber crops, fruits and vegetable crops and documentation of traditional knowledge related to it.",
  },
  {
    title: "SHGs and students network",
    description:
      "The programme is being extended to farmers, SHGs and students by organizing seed fairs, seed exhibitions, and educational seminars.",
  },
  {
    title: "Dissemination of 12 selected varieties",
    description:
      "Dissemination of 12 selected varieties of crops like rice, finger millet, cowpea etc. by producing pure seeds covering 50 hectares area and 160 seed producing farmers.",
  },
  {
    title: "Rice varieties promotion",
    description:
      "Production and sale of selected rice varieties such as Walay, Khara Munga, Sonphal and Sorti as well as local fruits, processing products with turnover up to Rs. 30 lakh.",
  },
  {
    title: "Field studies & centers",
    description:
      "A field study of the quality characteristics of 52 local varieties of paddy crops through self-contained conservation centres across 4 distinct locations.",
  },
  {
    title: "Wild food plant database",
    description:
      "Collection of information of 73 wild food plant species on their presence, type, edible parts, methods of preparation, and associated medicinal uses.",
  },
  {
    title: "36 varieties of rice registered",
    description:
      "36 varieties of rice have been sent to the National Plants Bureau of Reproductive Resources (NBPGR), New Delhi for formal registration.",
  },
  {
    title: "Improved cultivation methods",
    description:
      "Improved cultivation methods such as bed method for sowing of paddy seed, cultivation in SRI method as well as production and use of organic inputs.",
  },
];

function Page() {
  return (
    <section className="bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-2">
            Conservation
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Project Highlights
          </h1>
          <div className="w-12 h-1 bg-green-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-[15px] leading-snug">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Support/Fund Details */}
        <div className="mt-16 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 text-center shadow-sm max-w-xl mx-auto space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Project Support
            </span>
            <p className="text-slate-800 text-sm font-semibold mt-1">
              BAIF Institute for Sustainable Livelihood and Development (BISLD), Pune
            </p>
          </div>
          <div className="h-px bg-slate-100 w-12 mx-auto" />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Funded By
            </span>
            <p className="text-slate-800 text-sm font-semibold mt-1">
              Rajiv Gandhi Science and Technology Commission, Government of Maharashtra
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Page;
