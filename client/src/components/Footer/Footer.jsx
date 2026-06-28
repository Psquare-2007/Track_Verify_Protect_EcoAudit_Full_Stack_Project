import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">

      <div className="translate-x-17 translate-y-5 gap-20 max-w-7xl px-10 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center">

                <Leaf size={30} />

              </div>

              <div>

                <h2 className="text-3xl font-black">

                  EcoAudit

                </h2>

                <p className="text-slate-400">

                  Community Waste Logger

                </p>

              </div>

            </div>

            <p className="mt-8 text-slate-400 leading-8">

              EcoAudit is a smart community-driven waste
              management platform that enables citizens to
              report waste, verify GPS locations, upload
              images and monitor environmental impact using
              real-time analytics.

            </p>

          </div>

          {/* Quick Links */}

          <div className = "translate-x-20">

            <h3 className="text-2xl font-bold mb-8">

              Quick Links

            </h3>

            <div className="flex translate-y-5 flex-col gap-5">

              <Link
                href="#"
                to="/"
                className="hover:text-green-400 transition"
              >
                Home
              </Link>

              <Link
                to="/logger"
                className="hover:text-green-400 transition"
              >
                Waste Logger
              </Link>

              <Link
                to="/dashboard"
                className="hover:text-green-400 transition"
              >
                Dashboard
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div className = "translate-x-10">

            <h3 className="text-2xl font-bold mb-8">

              Contact

            </h3>

            <div className=" space-y-5">

              <div className="translate-y-3 flex items-center gap-4">

                <Mail
                  className="text-green-400"
                  size={20}
                />

                <span className="text-slate-300">

                  prithivirajan2007@gmail.com

                </span>

              </div>

              <div className="translate-y-5 flex items-center gap-4">

                <Phone
                  className="text-green-400"
                  size={20}
                />

                <span className="text-slate-300">

                  +91 9360457389

                </span>

              </div>

              <div className="translate-y-7 flex items-start gap-4">

                <MapPin
                  className="text-green-400 mt-1"
                  size={20}
                />

                <span className="text-slate-300">

                  Chennai, Tamil Nadu, India

                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div className = "translate-x-20">

            <h3 className="text-2xl font-bold mb-8">

              Connect

            </h3>

            <div className="translate-y-4  flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-green-600 transition flex items-center justify-center"
              >

                <FaGithub size={24} />

              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-green-600 transition flex items-center justify-center"
              >

                <FaLinkedin size={24} />

              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-green-600 transition flex items-center justify-center"
              >

                <Globe size={24} />

              </a>

            </div>

            <div className="translate-y-10 mt-10">

              <div className="bg-green-600 rounded-2xl p-6">

                <h4 className="translate-x-2 text-xl font-bold">

                  Join Our Mission

                </h4>

                <p className="translate-x-3 mt-3 text-green-100">

                  Every waste report helps create
                  cleaner and smarter communities.

                </p>

              </div>

            </div>

          </div>

        </div>

        

      </div>
        <div className="bg-black translate-y-5 border-t border-slate-700 mt-16  flex flex-col md:flex-row  items-center gap-2">

          <p className="translate-x-120 text-slate-400">

            © {year} EcoAudit. All Rights Reserved.

          </p>

          <p className="translate-x-180 text-slate-400">

            Developed with using React, Node.js & MongoDB

          </p>

        </div>
    </footer>
  );
}
