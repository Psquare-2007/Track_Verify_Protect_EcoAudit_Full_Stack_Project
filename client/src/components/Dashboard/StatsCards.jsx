import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  Scale,
  TrendingUp,
} from "lucide-react";

export default function StatsCards({ records = [] }) {

  const totalReports = records.length;

  const verified = records.filter(
    (item) => item.status === "Verified"
  ).length;

  const pending = totalReports - verified;

  const totalWeight = records.reduce(
    (sum, item) => sum + Number(item.weight || 0),
    0
  );

  const cards = [

    {
      title: "Total Reports",
      value: totalReports,
      subtitle: "Waste Reports Logged",
      icon: ClipboardList,
      gradient: "from-green-500 via-green-400 to-emerald-500",
      bg: "bg-green-50/40",
      progress: 100,
    },

    {
      title: "Verified",
      value: verified,
      subtitle: "Successfully Verified",
      icon: CheckCircle2,
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
      bg: "bg-blue-50/40",
      progress:
        totalReports > 0
          ? (verified / totalReports) * 100
          : 0,
    },

    {
      title: "Pending",
      value: pending,
      subtitle: "Awaiting Verification",
      icon: Clock3,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bg: "bg-orange-50/40",
      progress:
        totalReports > 0
          ? (pending / totalReports) * 100
          : 0,
    },

    {
      title: "Total Weight",
      value: `${totalWeight.toFixed(1)} kg`,
      subtitle: "Collected Waste",
      icon: Scale,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      bg: "bg-purple-50/40",
      progress:
        totalWeight > 0
          ? 85
          : 0,
    },

  ];
    return (

    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className={`
              group
              relative
              overflow-hidden
              rounded-[32px]
              glass-card
              border
              border-white/30
              p-7
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
            `}
          >

            {/* Decorative Glow */}

            <div
              className={`
                absolute
                -top-16
                -right-16
                w-44
                h-44
                rounded-full
                bg-gradient-to-br
                ${card.gradient}
                opacity-10
                blur-3xl
              `}
            />

            {/* Header */}

            <div className="relative translate-x-2 flex justify-between items-start">

              <div>

                <p className="uppercase tracking-[0.18em] text-sm font-semibold text-slate-500">

                  {card.title}

                </p>

                <h2 className="mt-4 text-5xl font-black text-slate-900">

                  {card.value}

                </h2>

                <p className="mt-2 text-slate-500">

                  {card.subtitle}

                </p>

              </div>

              <div
                className={`
                  w-18
                  h-18
                  rounded-3xl
                  bg-gradient-to-br
                  ${card.gradient}
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  group-hover:rotate-6
                  group-hover:scale-110
                  transition-all
                  duration-500
                `}
              >

                <Icon
                  size={34}
                  className="text-white"
                />

              </div>

            </div>

            {/* Progress */}

            <div className="mt-10">

              <div className="flex justify-between text-sm text-slate-500 mb-3">

                <span>Completion</span>

                <span>

                  {Math.round(card.progress)}%

                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

                <div
                  className={`
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    ${card.gradient}
                    transition-all
                    duration-1000
                  `}
                  style={{
                    width: `${card.progress}%`,
                  }}
                />

              </div>

            </div>

            {/* Bottom */}

            <div className="mt-8 flex items-center justify-between">

              <div className="flex items-center gap-2 text-green-600">

                <TrendingUp size={18} />

                <span className="font-semibold">

                  Live Data

                </span>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}