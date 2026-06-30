import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6 md:p-10 space-y-12">
        
        {/* Introduction */}
        <section className="space-y-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
            <span className="h-6 w-1 bg-green-600 rounded-full inline-block" />
            Introduction
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <p className="text-slate-600 text-base leading-relaxed text-justify">
              Sindhudurg is an agro-biodiversity rich district which mainly includes local varieties of crops, wild vegetables, and fruits. The Conservation and Management programme of local varieties of crops and wild food plants through BAIF Institute for Sustainable Livelihood and Development (BISLD), Pune since 2014 in collaboration with The Rajiv Gandhi Science and Technology Commission, Government of Maharashtra, in association with Vasundhara Science Centre at Nerurpar, Kudal (Sindhudurg) under the Maharashtra Gene Bank Programme and Since 2018 with Agricart Farmers Producer Company Limited. In this program local biodiversity studies, seed collection, seed bank setting up, crop variety regional studies, seed production, organic input production training, etc. activities have been undertaken. So far, studies and action programmes on rice, nachni, cowpea, hycinth beans, finger millet, leafy vegetables, fruits and vegetables as well as root, tubers and forest vegetables are going on. The Agricart Farmers Producer Company has been established with the help of NABARD and Lupin Human Welfare Foundation, Sindhudurg.
            </p>
            
            <div className="space-y-4">
              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="./img/about/intro-map.png"
                  alt="Introduction Map"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Methodology Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="./img/about/metho-img3.png"
                alt="Methodology 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="./img/about/intro-bottum.png"
                alt="Methodology 4"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Objective */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
            <span className="h-5 w-1 bg-green-600 rounded-full inline-block" />
            Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-3.5 text-slate-600 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                </span>
                <span>Documentation of crop diversity and associated knowledge in diverse agro-climatic zones.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                </span>
                <span>Germplasm collection, characterization, evaluation, and participatory seed production.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                </span>
                <span>In-situ conservation with active involvement of local communities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                </span>
                <span>Community-level processes including networking, establishing community seed banks, and participatory events.</span>
              </li>
            </ul>
            
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
              <img
                src="./img/about/objectiv-1.png"
                alt="Objective illustration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
            <span className="h-5 w-1 bg-green-600 rounded-full inline-block" />
            Methodology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-3.5 text-slate-600 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Selection of villages and collection of primary information.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Seed enhancer survey and in-depth data collection.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Setting up of seed banks and safe seed storage.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Field research, nutritional analysis, and genetic level studies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Selection of seed varieties in a participatory manner.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Sowing, cultivation, and regional seed dissemination.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                </span>
                <span>Value addition, product processing, and sales management.</span>
              </li>
            </ul>

            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
              <img
                src="./img/about/metho-img1.png"
                alt="Methodology illustration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Page;
