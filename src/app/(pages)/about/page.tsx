import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6 md:p-10 space-y-10">
        
        {/* About Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <span className="h-6 w-1 bg-green-600 rounded-full inline-block" />
            About Us
          </h1>
          <div className="text-slate-600 text-base leading-relaxed space-y-4 text-justify">
            <p>
              Agricart Farmers Producer Company Limited &reg;, registered in 2019, is working with 500 farmers and traditional seed savers in District Sindhudurg of State Maharashtra. The prime motive of the Farmer Organisation is to conserve traditional seeds, farm practices, recipes, and other traditional knowledge through public participation in a sustainable way. The organisation ensures direct monetary benefits to the farmers, encouraging them to conserve their precious traditional knowledge.
            </p>
            <p>
              The conceptualization and execution of the idea of this company were part of two independent projects. In 2018, Mr. Sachin Chorge and his fellow farmers were working on the Maharashtra Gene Bank project under the guidance of Sanjay Patil of BAIF Institute, Pune, and Vasundhara Science Centre, Nerurpar. Through this project, 40 traditional rice varieties and 26 other crops and vegetable seeds of Sindhudurg were collected and conserved. Another project was started at the same time by NABARD and Lupin Foundation to help set up farmer producer organizations in Sindhudurg. LUPIN Foundation was already working with these farmers on different agricultural projects and decided to involve them in the Producer Company. AGRICART FPC came into existence in 2018, and the conservation &amp; livelihood generation work was supported with financial capacity. Since then, the company has been growing its business in local food, articles, and services along with its local crop variety conservation mission.
            </p>
          </div>
        </div>

        {/* Company Profile Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-5 flex items-center gap-2">
            <span className="h-5 w-1 bg-green-600 rounded-full inline-block" />
            Company Profile
          </h2>
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-sm text-slate-600 divide-y divide-slate-200">
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900 w-1/3">Name</td>
                  <td className="px-5 py-4">Agricart Farmers Producer Company Limited</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">CIN</td>
                  <td className="px-5 py-4 font-mono text-xs">U01100PN2019PTC183275</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Regd. Address</td>
                  <td className="px-5 py-4 leading-relaxed">
                    Shop No.4, House No.22, A Wing, Bhosle Building, Pandur Titha At Post Pandur, Taluka Kudal, District Sindhudurg, Maharashtra – 416812
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Email</td>
                  <td className="px-5 py-4 text-green-700 font-medium">agricartfpcinfo@gmail.com</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Website</td>
                  <td className="px-5 py-4 text-green-700 font-medium">www.agricartfpc.com</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Contact</td>
                  <td className="px-5 py-4">Office: +91 7350025515 | Mobile: +91 9819878271</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">BOD Members</td>
                  <td className="px-5 py-4 font-semibold text-slate-800">5 Directors</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Promoters</td>
                  <td className="px-5 py-4">5 Promoters</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Farmer Members</td>
                  <td className="px-5 py-4 text-emerald-700 font-bold">516</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">No. of Villages</td>
                  <td className="px-5 py-4">105</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">No. of Districts</td>
                  <td className="px-5 py-4">2 (Sindhudurg and Ratnagiri)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Directors &amp; Promoters</td>
                  <td className="px-5 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                      <div>
                        <p className="font-bold text-slate-800">Mr. Santosh Ankush Gawade <span className="font-normal text-slate-500">(Chairman)</span></p>
                        <p className="font-bold text-slate-800">Mr. Vinod Shivram Sawant <span className="font-normal text-slate-500">(Vice-Chairman)</span></p>
                        <p className="font-bold text-slate-800">Mr. Sachin Vijay Chorge <span className="font-normal text-slate-500">(Secretary)</span></p>
                        <p className="font-bold text-slate-800">Mr. Sandip Atmaram Dhawale <span className="font-normal text-slate-500">(Director)</span></p>
                        <p className="font-bold text-slate-800">Mrs. Darshana Dilip Palav <span className="font-normal text-slate-500">(Director)</span></p>
                      </div>
                      <div>
                        <p className="text-slate-600">Mr. Sharad Ganapat Dhuri <span className="text-slate-400">(Promoter)</span></p>
                        <p className="text-slate-600">Mr. Nhanu Pandurang Palav <span className="text-slate-400">(Promoter)</span></p>
                        <p className="text-slate-600">Mr. Sunil Chandrakant Kadam <span className="text-slate-400">(Promoter)</span></p>
                        <p className="text-slate-600">Mrs. Uma Mahadev Palav <span className="text-slate-400">(Promoter)</span></p>
                        <p className="text-slate-600">Mr. Kailas Digambar Dhavale <span className="text-slate-400">(Promoter)</span></p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Financial Turnover</td>
                  <td className="px-5 py-4">
                    <div className="max-w-md border border-slate-200 rounded-xl overflow-hidden">
                      <table className="w-full text-xs text-left divide-y divide-slate-200">
                        <thead className="bg-slate-50 text-slate-700 font-semibold">
                          <tr>
                            <th className="px-4 py-2">Financial Year</th>
                            <th className="px-4 py-2 text-right">Amount (INR)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-600">
                          <tr>
                            <td className="px-4 py-2">2019-20</td>
                            <td className="px-4 py-2 text-right font-mono">₹ 3,57,833.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">2020-21</td>
                            <td className="px-4 py-2 text-right font-mono">₹ 19,20,409.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">2021-22</td>
                            <td className="px-4 py-2 text-right font-mono">₹ 6,66,000.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">2022-23</td>
                            <td className="px-4 py-2 text-right font-mono">₹ 16,33,131.00</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">2023-24</td>
                            <td className="px-4 py-2 text-right font-mono font-bold text-slate-900">₹ 50,00,000.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Core Activities</td>
                  <td className="px-5 py-4">
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                      <li>Trading of cereals and local fruits</li>
                      <li>Marketing of value-added products made from local crop varieties</li>
                      <li>Production of seeds of local crops</li>
                      <li>Conservation of local traditional varieties through seed banks</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="font-semibold px-5 py-4 bg-slate-50/50 text-slate-900">Key Highlights</td>
                  <td className="px-5 py-4">
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-500">
                      <li>Collection and marketing of 150 tons of paddy every year</li>
                      <li>More than 40 products manufactured in farmer units</li>
                      <li>Collection and documentation of 90 crop varieties (rice, finger millet, cowpea, etc.)</li>
                      <li>Pure seed production on 50 hectares involving 160 seed-producing farmers</li>
                      <li>Turnover of over Rs. 30 lakh from local fruits and processing products</li>
                      <li>A field study of the quality characteristics of 52 local varieties of paddy crops</li>
                      <li>Documentation of 73 wild food plant species ( medicinal uses, methods, edible parts)</li>
                      <li>27 varieties of rice registered under National Plants Bureau of Reproductive Resources (NBPGR), New Delhi</li>
                      <li>Improved organic cultivation practices (bed method and SRI method)</li>
                      <li>Organizing seed fairs, seed exhibitions, and seminars for SHGs and students</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Page;
