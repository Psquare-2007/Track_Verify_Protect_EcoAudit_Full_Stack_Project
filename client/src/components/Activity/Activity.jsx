import {
  Recycle,
  MapPinned,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const activities = [
  {
    type: "Plastic Waste",
    location: "Chennai, Tamil Nadu",
    status: "Verified",
    time: "2 mins ago",
    color: "bg-green-100 text-green-600",
  },

  {
    type: "Organic Waste",
    location: "Coimbatore, Tamil Nadu",
    status: "Pending",
    time: "10 mins ago",
    color: "bg-yellow-100 text-yellow-600",
  },

  {
    type: "E-Waste",
    location: "Bengaluru, Karnataka",
    status: "Verified",
    time: "24 mins ago",
    color: "bg-blue-100 text-blue-600",
  },

  {
    type: "Metal Waste",
    location: "Hyderabad, Telangana",
    status: "Verified",
    time: "45 mins ago",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Activity() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-widest font-semibold text-green-600">

            Community Feed

          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900">

            Recent Community Activity

          </h2>

          <p className="mt-6 text-xl text-slate-500 max-w-3xl mx-auto leading-9">

            Explore the latest verified waste reports
            submitted by community members across different
            cities.

          </p>

        </div>

        {/* Activity Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {activities.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[28px] shadow-lg hover:shadow-2xl transition p-8 flex gap-6 items-start"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
              >

                <Recycle size={30} />

              </div>

              <div className="flex-1">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold text-slate-900">

                    {item.type}

                  </h3>

                  <span className="text-sm text-slate-400">

                    {item.time}

                  </span>

                </div>

                <div className="mt-4 flex items-center gap-2 text-slate-500">

                  <MapPinned size={18} />

                  {item.location}

                </div>

                <div className="mt-5">

                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                      item.status === "Verified"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >

                    <CheckCircle size={16} />

                    {item.status}

                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-20">

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl transition hover:scale-105"
          >

            View Complete Dashboard

            <ArrowRight size={20} />

          </Link>

        </div>

      </div>

    </section>
  );
}