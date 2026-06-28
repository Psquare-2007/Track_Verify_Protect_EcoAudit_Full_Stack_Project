import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import {
  Recycle,
  Leaf,
  FileText,
  Hammer,
  Wine,
  Monitor,
} from "lucide-react";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

const ICONS = {
  Plastic: Recycle,
  Organic: Leaf,
  Paper: FileText,
  Metal: Hammer,
  Glass: Wine,
  "E-Waste": Monitor,
};

export default function WasteChart({ stats }) {
  const data = [
    { name: "Plastic", value: stats.Plastic || 0 },
    { name: "Organic", value: stats.Organic || 0 },
    { name: "Paper", value: stats.Paper || 0 },
    { name: "Metal", value: stats.Metal || 0 },
    { name: "Glass", value: stats.Glass || 0 },
    { name: "E-Waste", value: stats["E-Waste"] || 0 },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="glass-card rounded-3xl shadow-lg p-6 h-150 ">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="translate-x-5 translate-y-2 text-2xl font-bold text-slate-800">
            Waste Distribution
          </h2>

          <p className="translate-x-5 translate-y-2 text-slate-500 mt-1">
            Category wise reports
          </p>

        </div>

        <div className="-translate-x-5 bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

          {total} Reports

        </div>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="translate-x-1 translate-y-5 mt-8 grid grid-cols-2 gap-5">

        {data.map((item, index) => (

          <div
            key={index}
            className="
              translate-x-3
              flex items-center justify-between
              bg-white/80
              w-[200px]
              backdrop-blur-md
              border border-white/70
              rounded-2xl
              px-5
              py-4
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* Left Side */}

            <div className="flex items-center gap-4">

              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: `${COLORS[index]}20`,
                }}
              >

                {(() => {
                  const Icon = ICONS[item.name];

                  return (
                    <Icon
                      size={22}
                      color={COLORS[index]}
                      strokeWidth={2.5}
                    />
                  );
                })()}

              </div>

              <div>

                <p className="font-semibold text-slate-800">
                  {item.name}
                </p>

                <p className="text-xs text-slate-500">
                  Waste Category
                </p>

              </div>

            </div>

            {/* Count */}

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl"
              style={{
                backgroundColor: `${COLORS[index]}18`,
                color: COLORS[index],
              }}
            >
              {item.value}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}