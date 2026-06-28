import {
  Camera,
  MapPinned,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const steps = [
  {
    icon: Camera,
    title: "Capture Waste",
    description:
      "Take a clear photo of the waste and enter essential details such as waste category, weight and description.",
    color: "bg-green-100 text-green-600",
  },

  {
    icon: MapPinned,
    title: "Verify Location",
    description:
      "EcoAudit automatically captures your GPS coordinates to ensure every waste report is authentic and accurately located.",
    color: "bg-blue-100 text-blue-600",
  },

  {
    icon: BarChart3,
    title: "Track Environmental Impact",
    description:
      "Watch your reports appear instantly on the dashboard through interactive charts, maps and real-time community analytics.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-36 bg-transparent h-160">

      <div className="translate-y-15 max-w-[1450px] mx-auto px-12 lg:px-20">

        {/* Heading */}

        <div className="text-center mb-28">

          <span className="text-green-600 font-semibold uppercase tracking-[0.3em]">

            Workflow

          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black text-slate-900">

            How EcoAudit Works

          </h2>

          <p className="translate-x-67 mt-8 text-xl leading-9 text-slate-500 max-w-4xl mx-auto">

            Reporting waste takes less than a minute.
            Every verified report contributes towards
            cleaner communities, smarter waste management
            and a healthier environment.

          </p>

        </div>

        {/* Cards */}

        <div className="translate-x-9 translate-y-15 grid lg:grid-cols-3 gap-14">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="relative glass-card rounded-[36px] px-10 py-10 h-[320px] border border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >

                {/* Step Number */}

                <div className="translate-x-6 -translate-y-10 absolute top-8 right-8 text-8xl font-black text-slate-200/70">

                  0{index + 1}

                </div>

                {/* Icon */}

                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-md ${step.color}`}
                >

                  <Icon size={40} />

                </div>

                {/* Title */}

                <h3 className="translate-x-3 translate-y-4 mt-8 text-[38px] font-black text-slate-900 leading-tight">

                  {step.title}

                </h3>

                {/* Description */}

                <p className="translate-y-7 translate-x-5 mt-5 text-xl leading-9 text-slate-600 max-w-[95%]">

                  {step.description}

                </p>

                {/* Arrow */}

                {index !== steps.length - 1 && (

                  <ArrowRight
                    size={34}
                    className="translate-x-5 hidden xl:block absolute -right-7 top-1/2 -translate-y-1/2 text-green-500"
                  />

                )}

              </div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-28">

        </div>

      </div>

    </section>
  );
}