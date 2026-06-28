import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";

import heroImage from "../../assets/hero.png"; // <-- Change to your image filename

export default function Hero() {
  return (
    <section className="h-20 relative overflow-hidden bg-transparent min-h-screen ">

      {/* Background Blur */}

      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-green-200/40 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-emerald-200/40 blur-3xl"></div>

      <div className="relative max-w-[1450px] mx-auto px-12 lg:px-20">

        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">

          {/* Left */}

          <div className = "translate-x-10 -translate-y-10">

            <span className="inline-flex items-center bg-green-100 text-green-700 font-semibold px-6 py-3 rounded-full">

               Smart Community Waste Monitoring

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-slate-900">

              Track.<br></br>

              <span className="text-green-600">

                Verify.

              </span>

              <br />

              Protect.

            </h1>

            <p className="translate-y-5 mt-8 max-w-2xl text-xl leading-9 text-slate-600">

              EcoAudit empowers communities to report waste,
              verify GPS locations, upload images and monitor
              environmental impact using powerful real-time
              analytics and interactive dashboards.

            </p>

            <div className="translate-y-11 mt-12 flex flex-wrap gap-5">

              <Link
                to="/logger"
                className="inline-flex justify-center items-center leading-none min-w-[170px] items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition hover:scale-105"
              >

                Start Logging

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/dashboard"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  h-12
                  px-8
                  min-w-[210px]
                  rounded-full
                  border-[2.5px]
                  border-green-600
                  text-green-700
                  font-semibold
                  text-lg
                  leading-none
                  hover:bg-green-600
                  hover:text-white
                  transition-all
                  "
              >

                <BarChart3 size={20} />

                View Dashboard

              </Link>

            </div>

            {/* Mini Statistics */}

            <div className="translate-y-15 mt-16 grid grid-cols-3 gap-8">

              <div>

                <h3 className="text-4xl font-black text-green-600">

                  18K+

                </h3>

                <p className="mt-2 text-slate-500">

                  Reports

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-blue-600">

                  142

                </h3>

                <p className="mt-2 text-slate-500">

                  Communities

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-emerald-600">

                  97%

                </h3>

                <p className="mt-2 text-slate-500">

                  Verified

                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-end items-center pr-8">

            <img
              src={heroImage}
              alt="EcoAudit"
              className="h-[850px] w-[1500px] translate-x-24 -translate-y-14 object-contain drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}