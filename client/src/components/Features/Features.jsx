import {
  MapPinned,
  Camera,
  Recycle,
  BarChart3,
  ShieldCheck,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

const features = [
  {
    title: "Verified GPS",
    description:
      "Every waste report is automatically geotagged with precise GPS coordinates for authenticity.",
    icon: MapPinned,
    color: "bg-green-100 text-green-600",
    link: "/logger",
  },

  {
    title: "Image Upload",
    description:
      "Capture and upload real waste images to improve transparency and evidence collection.",
    icon: Camera,
    color: "bg-blue-100 text-blue-600",
    link: "/logger",
  },

  {
    title: "Smart Waste Logging",
    description:
      "Log Plastic, Organic, Paper, Glass, Metal and E-Waste with an intuitive interface.",
    icon: Recycle,
    color: "bg-emerald-100 text-emerald-600",
    link: "/logger",
  },

  {
    title: "Live Analytics",
    description:
      "Interactive charts, dashboards and reports update instantly as new waste is logged.",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-600",
    link: "/dashboard",
  },

  {
    title: "Community Verified",
    description:
      "Reports remain pending until verified, ensuring trust and data quality.",
    icon: ShieldCheck,
    color: "bg-orange-100 text-orange-600",
    link: "/dashboard",
  },

  {
    title: "Environmental Impact",
    description:
      "Visualize how collective reporting contributes towards a cleaner and greener community.",
    icon: Globe,
    color: "bg-cyan-100 text-cyan-600",
    link: "/dashboard",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28 bg-transparent h-230"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center translate-x-25 mb-20 translate-y-10">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Why EcoAudit?
          </span>

          <h2 className=" pl-10 text-5xl font-black text-slate-900">
            Powerful Features
          </h2>

          <p className="translate-x-63 translate-y-5 text-xl text-slate-500 max-w-3xl mx-auto leading-9">
            EcoAudit combines waste reporting, GPS verification,
            photo evidence, analytics and environmental insights
            into one powerful platform.
          </p>

        </div>

        {/* Cards */}

        <div className="translate-y-25 translate-x-30 grid md:grid-cols-2 xl:grid-cols-2 gap-10">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <Link
                key={index}
                
                className="group glass-card rounded-[30px] px-10 py-9 h-[200px] border border-white/30 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${feature.color}`}
                >

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 translate-x-5 translate-y-2 text-[40px] font-black text-slate-900 leading-none">

                  {feature.title}

                </h3>

                <p className="mt-4 translate-x-2 translate-y-3 text-slate-600 text-xl leading-9 max-w-[95%]">

                  {feature.description}

                </p>

                

              </Link>

            );

          })}

        </div>

      </div>
    </section>
  );
}