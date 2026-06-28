import { Link } from "react-router-dom";
import { useMemo } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#8b5cf6",
];

export default function Statistics({ records = [] }) {

  const wasteData = useMemo(() => {

    const counts = {
      Plastic: 0,
      Organic: 0,
      Paper: 0,
      Metal: 0,
      Glass: 0,
      "E-Waste": 0,
    };

    records.forEach((item) => {

      if (counts[item.wasteType] !== undefined) {

        counts[item.wasteType]++;

      }

    });

    return Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key],
    }));

  }, [records]);

  const stats = useMemo(() => {

    const totalReports = records.length;

    const verifiedReports =
      records.filter(
        (r) => r.status === "Verified"
      ).length;

    const communities = new Set(
      records.map(
        (r) => `${r.latitude}-${r.longitude}`
      )
    ).size;

    const totalWeight =
      records.reduce(
        (sum, r) =>
          sum + Number(r.weight || 0),
        0
      );

    return [

      {
        title: "Waste Reports",
        value: totalReports,
      },

      {
        title: "Verified Reports",
        value: verifiedReports,
      },

      {
        title: "Communities",
        value: communities,
      },

      {
        title: "Waste Collected",
        value: `${totalWeight.toFixed(1)} kg`,
      },

    ];

  }, [records]);
  
  const chartData = wasteData.filter(item => item.value > 0); 

  return (

    <section className="py-36 bg-transparent h-210">

      <div className="max-w-[1450px] mx-auto px-12 lg:px-20">

        {/* Heading */}

        <div className="translate-y-10 text-center mb-28">

          <span className="text-green-600 font-semibold uppercase tracking-[0.3em]">

            Community Insights

          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black text-slate-900">

            Waste Statistics

          </h2>

          <p className="translate-x-68 mt-8 text-xl leading-9 text-slate-500 max-w-4xl mx-auto">

            EcoAudit transforms community waste reports
            into meaningful environmental insights using
            interactive dashboards, smart analytics and
            beautiful visualizations.

          </p>

        </div>

        {/* Top Statistics */}

        <div className="translate-x-8 translate-y-15 grid grid-cols-2 lg:grid-cols-4 gap-10 mb-28">

          {stats.map((item, index) => (

            <div
              key={index}
              className="glass-card rounded-[32px] p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-5xl font-black text-green-600">

                {item.value}

              </h3>

              <p className="mt-4 text-lg text-slate-600">

                {item.title}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Section */}

        <div className="translate-x-7 translate-y-23 grid lg:grid-cols-2 gap-24 items-center">

          {/* Chart */}

          <div className="glass-card rounded-[36px] p-12">

            <h3 className="translate-x-10 translate-y-5 text-3xl font-bold text-slate-900 mb-10">

              Waste Category Distribution

            </h3>

            <div className="h-[420px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={90}
                    outerRadius={150}
                    paddingAngle={4}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={true}
                  >

                    {chartData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[wasteData.findIndex(x => x.name === entry.name)]}
                      />

                    ))}

                    <Label
                      value="EcoAudit"
                      position="center"
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        fill: "#166534",
                      }}
                    />

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>
          {/* Right Side */}

          <div>

            <span className="text-green-600 font-semibold uppercase tracking-[0.3em]">

              Environmental Impact

            </span>

            <h3 className="mt-5 text-5xl font-black leading-tight text-slate-900">

              Every Report Creates

              <br />

              A Cleaner Tomorrow

            </h3>

            <p className="mt-8 text-xl leading-9 text-slate-600 max-w-2xl">

              Every image uploaded through EcoAudit helps
              identify waste hotspots, improve recycling
              initiatives and monitor community participation
              using real-time analytics.

            </p>

            <div className="mt-12 space-y-7">

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-green-500"></div>

                <span className="text-lg text-slate-700">

                  Verified GPS Locations

                </span>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <span className="text-lg text-slate-700">

                  Image Evidence Collection

                </span>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-orange-500"></div>

                <span className="text-lg text-slate-700">

                  Interactive Dashboard Analytics

                </span>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-purple-500"></div>

                <span className="text-lg text-slate-700">

                  Community Participation Tracking

                </span>

              </div>

            </div>

            <Link         
              to="/dashboard"
              className="
                translate-y-6
                inline-flex
                items-center
                justify-center
                gap-3
                h-12
                min-w-[240px]
                px-8
                rounded-full
                border-2
                border-green-600
                bg-transparent
                text-green-700
                font-semibold
                text-lg
                leading-none
                transition-all
                duration-300
                hover:bg-green-600
                hover:text-white
              "
            
              >
 
            

              Explore Dashboard →

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}