import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Leaf,
  Menu,
  X,
  Home,
  BarChart3,
  ClipboardList,
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const navLinks = [

    {
      title: "Home",
      path: "/",
      icon: Home,
    },

    {
      title: "Dashboard",
      path: "/dashboard",
      icon: BarChart3,
    },

    {
      title: "Logger",
      path: "/logger",
      icon: ClipboardList,
    },

  ];
  return (

        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-lg"
              : "bg-transparent"
          }`}
        >

          <div className="max-w-7xl mx-auto px-8">

            <div className="translate-x-5 h-20 flex justify-between items-center">

              {/* Logo */}

              <Link
                to="/"
                className="flex items-center gap-3"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">

                  <Leaf
                    className="text-white"
                    size={28}
                  />

                </div>

                <div>

                  <h1 className="text-3xl font-black text-slate-800">

                    EcoAudit

                  </h1>

                  <p className="text-xs text-slate-500">

                    Community Waste Logger

                  </p>

                </div>

              </Link>

              {/* Desktop Navigation */}

              <nav className="translate-x-15 hidden lg:flex items-center gap-4">

                {navLinks.map((item) => {

                  const Icon = item.icon;

                  const isActive =
                    location.pathname === item.path;

                  return (

                    <Link
                      key={item.title}
                      to={item.path}
                      className="relative"
                    >

                      {isActive && (

                        <motion.div
                          layoutId="navbar-pill"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-gradient-to-r
                            from-green-500
                            to-emerald-500
                            shadow-lg
                            shadow-green-400/40
                          "
                        />

                      )}

                      <div
                        className={`
                          relative
                          z-10
                          flex
                          items-center
                          justify-center
                          gap-2
                          h-10
                          min-w-[125px]
                          px-6
                          rounded-full
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-slate-700 hover:text-green-700"
                          }
                        `}
                      >

                        <Icon size={18} />

                        {item.title}

                      </div>

                    </Link>

                  );

                })}

              </nav>

              {/* CTA */}

              <Link
                to="/logger"
                className="
                  translate-x-30
                  inline-flex
                  items-center
                  justify-center
                  h-10
                  min-w-[150px]
                  px-6
                  rounded-full
                  bg-green-500
                  text-white
                  font-semibold
                  text-lg
                  shadow-lg
                  shadow-green-400/30
                  transition-all
                  duration-300
                  hover:bg-emerald-600
                  hover:scale-105
                "
              >

                Start Logging

              </Link>

              {/* Mobile Button */}

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden"
              >

                {open ? (

                  <X size={30} />

                ) : (

                  <Menu size={30} />

                )}

              </button>

            </div>

          </div>
                {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -15,
          }}
          transition={{
            duration: 0.25,
          }}
          className="lg:hidden bg-white border-t backdrop-blur-xl"
        >

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => {

              const Icon = item.icon;

              const isActive =
                location.pathname === item.path;

              return (

                <Link
                  key={item.title}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                        : "text-slate-700 hover:bg-green-100 hover:text-green-700"
                    }
                  `}
                >

                  <Icon size={20} />

                  {item.title}

                </Link>

              );

            })}

            <Link
              to="/logger"
              onClick={() => setOpen(false)}
              className="
                mt-4
                inline-flex
                items-center
                justify-center
                h-12
                rounded-full
                bg-green-600
                text-white
                font-semibold
                text-lg
                shadow-lg
                transition-all
                duration-300
                hover:bg-green-700
              "
            >

              Start Logging

            </Link>

          </div>

        </motion.div>

      )}

    </header>

  );

}