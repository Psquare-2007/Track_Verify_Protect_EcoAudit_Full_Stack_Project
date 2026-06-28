import { useEffect, useMemo, useState } from "react";

import { getWaste } from "../services/wasteService";

import StatsCards from "../components/Dashboard/StatsCards";
import SearchFilter from "../components/Dashboard/SearchFilter";
import WasteChart from "../components/Dashboard/WasteChart";
import BarAnalytics from "../components/Dashboard/BarAnalytics";
import RecentRecords from "../components/Dashboard/RecentRecords";
import WasteTable from "../components/Dashboard/WasteTable";
import WasteMap from "../components/Dashboard/WasteMap";
import FallingLeaves from "../components/FallingLeaves/FallingLeaves";
import "./Background.css";

export default function Dashboard() {

  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getWaste();
      setRecords(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const stats = useMemo(() => {

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

    return counts;

  }, [records]);

  const filteredRecords = records.filter((item) => {

    const searchMatch = item.wasteType
      .toLowerCase()
      .includes(search.toLowerCase());

    const filterMatch =
      filter === "All" || item.wasteType === filter;

    return searchMatch && filterMatch;

  });

  return (

    <div className="eco-background">

      <FallingLeaves />

      <div className="eco-content">

        <div position="center" className="min-h-screen">

          <div className="max-w-[1600px] mx-auto px-8 py-10">

            {/* Heading */}

            <div className="translate-y-2 text-center mb-10">

              <h1 className="text-5xl font-black text-slate-900">
                EcoAudit Dashboard
              </h1>

              <p className="text-slate-500 mt-3 text-lg">
                Real-time waste analytics and community reports.
              </p>

            </div>

            {/* KPI */}

            <div className="translate-y-8 mb-8">

              <StatsCards
                records={records}
                stats={stats}
              />

            </div>

            {/* Search */}

            <div className="translate-y-15 mb-8">

              <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
              />

            </div>

            {/* Charts */}

            <div className="translate-x-3 translate-y-25 grid xl:grid-cols-3 gap-10 mb-8">

              <div className="w-[480px]">
                <WasteChart stats={stats} />
              </div>

              <div className="-translate-x-6 xl:col-span-2">

                <RecentRecords
                  records={filteredRecords}
                />

              </div>

            </div>

            {/* Analytics */}

            <div className="translate-y-35 mb-8">

              <BarAnalytics
                stats={stats}
              />

            </div>

            {/* Table */}

            <div className="translate-y-45 mb-8">

              <WasteTable
                records={filteredRecords}
                refresh={loadData}
              />

            </div>

            {/* Map */}

            <div className="translate-y-55 pb-40">

              <WasteMap
                records={filteredRecords}
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}