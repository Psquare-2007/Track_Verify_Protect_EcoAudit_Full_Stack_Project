import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Statistics from "../components/Statistics/Statistics";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import FallingLeaves from "../components/FallingLeaves/FallingLeaves";

import { getWaste } from "../services/wasteService";

export default function Home() {

  const [records, setRecords] = useState([]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-100">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 space-y-32">

        <div
          className="
            relative
            overflow-hidden
            bg-gradient-to-br
            from-white
            via-green-50
            to-emerald-100
          "
        >

          <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[180px] rounded-full"></div>

          <div className="absolute top-[700px] right-0 w-[500px] h-[500px] bg-emerald-200/30 blur-[170px] rounded-full"></div>

          <div className="absolute top-[1400px] left-1/3 w-[700px] h-[700px] bg-green-100/40 blur-[200px] rounded-full"></div>

          <div className="relative z-10">

            <FallingLeaves />

            <Hero />

            <Features />

            <HowItWorks />

            {/* Only change here */}
            <Statistics records={records} />

          </div>

        </div>

        <CTA />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
