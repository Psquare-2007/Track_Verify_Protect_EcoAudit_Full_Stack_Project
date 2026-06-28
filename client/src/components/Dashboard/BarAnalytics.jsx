import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

export default function BarAnalytics({ stats }) {
  const data = [
    { name: "Plastic", value: stats.Plastic || 0, color: "#22c55e" },
    { name: "Organic", value: stats.Organic || 0, color: "#3b82f6" },
    { name: "Paper", value: stats.Paper || 0, color: "#f59e0b" },
    { name: "Metal", value: stats.Metal || 0, color: "#ef4444" },
    { name: "Glass", value: stats.Glass || 0, color: "#8b5cf6" },
    { name: "E-Waste", value: stats["E-Waste"] || 0, color: "#06b6d4" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="glass-card rounded-3xl shadow-lg p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <div className= "relative translate-x-150 align-center">

          <h2 className="text-3xl font-bold text-slate-800">
            Waste Category Analytics
          </h2>

          <p className="text-slate-500 mt-2">
            Distribution of waste reports across all categories.
          </p>

        </div>

        <div className="-translate-x-10 mt-4 md:mt-0 bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-semibold">

          Total Reports : {total}

        </div>

      </div>

      {/* Chart */}

      <div className="h-[380px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e8ecf4"
            />

            <XAxis
              dataKey="name"
              tick={{
                fontSize: 14,
              }}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[12, 12, 0, 0]}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={entry.color}
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom Summary */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">

        {data.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-slate-50 p-4 text-center hover:bg-slate-100 transition"
          >

            <div
              className="w-5 h-5 rounded-full mx-auto mb-3"
              style={{
                backgroundColor: item.color,
              }}
            />

            <p className="text-slate-600 text-sm">

              {item.name}

            </p>

            <h3 className="text-2xl font-bold mt-2">

              {item.value}

            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}