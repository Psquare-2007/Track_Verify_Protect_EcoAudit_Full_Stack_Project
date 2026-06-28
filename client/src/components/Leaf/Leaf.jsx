import { motion } from "framer-motion";

const particles = Array.from({ length: 14 });

const Leaf = () => {
  return (
    <div className="relative flex items-center justify-center w-[560px] h-[560px]">

      <div className="absolute w-[430px] h-[430px] rounded-full bg-green-400/20 blur-[120px]"/>

      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-green-400"
          initial={{
            x: (Math.random() - .5) * 260,
            y: (Math.random() - .5) * 260,
            opacity: .2
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [.2, 1, .2],
            scale: [1, 1.8, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2
          }}
        />
      ))}

      <motion.div
        animate={{
          rotate: [45, 47, 45],
          scale: [1, 1.02, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 6
        }}
        className="relative"
      >

        <svg
          width="360"
          height="420"
          viewBox="0 0 360 420"
          fill="none"
        >

          <defs>

            <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">

              <stop offset="0%" stopColor="#22c55e"/>

              <stop offset="100%" stopColor="#15803d"/>

            </linearGradient>

            <filter id="glow">

              <feGaussianBlur stdDeviation="12" result="blur"/>

              <feMerge>

                <feMergeNode in="blur"/>

                <feMergeNode in="SourceGraphic"/>

              </feMerge>

            </filter>

          </defs>

          <path
            d="M180 20C295 40 340 160 330 240C320 315 255 380 180 400C105 380 40 315 30 240C20 160 65 40 180 20Z"
            fill="url(#leaf)"
            filter="url(#glow)"
          />

          <motion.path
            d="M180 45V355"
            stroke="white"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              repeat: Infinity,
              duration: 3
            }}
          />

          <motion.path
            d="M180 120L245 75"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: .2,
              repeat: Infinity,
              duration: 3
            }}
          />

          <motion.path
            d="M180 170L265 170"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: .4,
              repeat: Infinity,
              duration: 3
            }}
          />

          <motion.path
            d="M180 230L255 255"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: .6,
              repeat: Infinity,
              duration: 3
            }}
          />

          <motion.path
            d="M180 120L120 80"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: .8,
              repeat: Infinity,
              duration: 3
            }}
          />

          <motion.path
            d="M180 180L100 180"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 1,
              repeat: Infinity,
              duration: 3
            }}
          />

          <motion.path
            d="M180 240L110 270"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 1.2,
              repeat: Infinity,
              duration: 3
            }}
          />

        </svg>

      </motion.div>

    </div>
  );
};

export default Leaf;