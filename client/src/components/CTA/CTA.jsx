import { Link } from "react-router-dom";
import { ArrowRight, Leaf, BarChart3 } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative h-160 overflow-hidden py-36 bg-gradient-to-br from-green-700 via-green-600 to-emerald-500"
    >
      {/* Background Decorations */}

      <div className=" absolute w-full -top-28 -left-28 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className=" absolute w-full -bottom-28 -right-28 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative w-full max-w-[1450px] mx-auto px-12 lg:px-20 translate-x-9 translate-y-8">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-20 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Left Content */}

            <div>

              <div className="translate-x-5 translate-y-8 inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full text-white font-semibold">

                <Leaf size={18} />

                Join the EcoAudit Community

              </div>

              <h2 className="translate-x-10 translate-y-10 mt-8 text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">

                Together We Can Build

                <br />

                A Cleaner Tomorrow 

              </h2>

              <p className="translate-x-12 translate-y-13 mt-8 text-xl leading-9 text-green-100 max-w-2xl">

                Every waste report contributes towards smarter waste
                management, cleaner streets and a healthier environment.

                Join thousands of responsible citizens making a
                measurable impact every day.

              </p>
              <div className = "relative h-20">
              <div className="absolute translate-x-250 mt-12 flex flex-wrap gap-10">
              </div>
              </div>
            </div>

            {/* Right Statistics */}

            <div className="-translate-x-10 grid grid-cols-2 gap-8">

              <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-2 transition">

                <h3 className="text-5xl font-black text-green-600">

                  18K+

                </h3>

                <p className="mt-3 text-slate-600 text-lg">

                  Waste Reports

                </p>

              </div>

              <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-2 transition">

                <h3 className="text-5xl font-black text-blue-600">

                  97%

                </h3>

                <p className="mt-3 text-slate-600 text-lg">

                  Verified Reports

                </p>

              </div>

              <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-2 transition">

                <h3 className="text-5xl font-black text-purple-600">

                  142

                </h3>

                <p className="mt-3 text-slate-600 text-lg">

                  Communities

                </p>

              </div>

              <div className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-2 transition">

                <h3 className="text-5xl font-black text-emerald-600">

                  12.6T

                </h3>

                <p className="mt-3 text-slate-600 text-lg">

                  CO₂ Saved

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}