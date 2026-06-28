import {
  Search,
  Filter,
  RotateCcw,
  Database,
} from "lucide-react";

export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
}) {

  const clearFilters = () => {
    setSearch("");
    setFilter("All");
  };

  return (

    <div className="glass-card rounded-[32px] border border-white/30 p-8 shadow-xl">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        <div>

          <h2 className="translate-x-65  text-3xl font-black text-slate-900">

            Search Reports

          </h2>

          <p className="translate-x-45 mt-2 text-slate-500 text-lg">

            Search, filter and manage community waste records.

          </p>

        </div>

        {/* Controls */}

        <div className="flex flex-col lg:flex-row items-center gap-5">

          {/* Search */}

          <div className="relative w-[420px]">

            <Search
              size={20}
              className="absolute translate-x-81 left-5 top-1/2 text-green-600 z-10"
            />

            <input
              type="text"
              placeholder="Search waste type..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                translate-y-3
                -translate-x-5
                w-full
                h-10
                rounded-full
                bg-white/60
                backdrop-blur-xl
                border
                border-white/40
                pl-14
                pr-6
                text-slate-700
                shadow-md
                outline-none
                transition-all
                duration-300
                focus:border-green-500
                focus:ring-4
                focus:ring-green-200
              "
            />

          </div>

          {/* Filter */}

          <div className="relative">

            <Filter
              size={18}
              className="absolute -translate-x-6 left-5 translate-y-6 text-green-600 z-10"
            />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              className="
                appearance-none
                translate-y-3
                -translate-x-9
                h-11
                rounded-full
                bg-white/60
                backdrop-blur-xl
                border
                border-white/40
                pl-14
                pr-10
                shadow-md
                outline-none
                transition-all
                duration-300
                focus:border-green-500
                focus:ring-4
                focus:ring-green-200
              "
            >

              <option>All</option>
              <option>Plastic</option>
              <option>Organic</option>
              <option>Paper</option>
              <option>Metal</option>
              <option>Glass</option>
              <option>E-Waste</option>

            </select>

          </div>

          {/* Clear */}

          <button
            onClick={clearFilters}
            className="
              -translate-x-9
              translate-y-3
              inline-flex
              items-center
              justify-center
              gap-3
              h-11
              px-8
              rounded-full
              bg-gradient-to-r
              from-red-500
              to-rose-500
              text-white
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-red-300/40
            "
          >

            <RotateCcw size={18} />

            Clear

          </button>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-center gap-3 text-slate-500">

        <Database size={18} className="translate-x-35 text-green-600" />

        <span className="translate-x-35 text-base">

          Showing reports based on the selected search and filter options.

        </span>

      </div>

    </div>

  );

}
