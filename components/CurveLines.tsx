"use client";
import { motion } from "framer-motion";

function CurveLine({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`hidden lg:block absolute top-0 h-full w-64 opacity-60 ${
        side === "left" ? "left-0" : "right-0 -scale-x-100"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 1200"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <motion.path
          d="M50,-200 C120,-140 -20,-60 50,0 C120,60 -20,140 50,200 C120,260 -20,340 50,400 C120,460 -20,540 50,600 C120,660 -20,740 50,800 C120,860 -20,940 50,1000 C120,1060 -20,1140 50,1200 C120,1260 -20,1340 50,1400"
          fill="none"
          stroke="#6c5ce7"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          animate={{ y: [0, 36, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,-250 C170,-190 30,-110 100,-50 C170,10 30,90 100,150 C170,210 30,290 100,350 C170,410 30,490 100,550 C170,610 30,690 100,750 C170,810 30,890 100,950 C170,1010 30,1090 100,1150 C170,1210 30,1290 100,1350"
          fill="none"
          stroke="#b8c4ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          animate={{ y: [0, -32, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export default function CurveLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <CurveLine side="left" />
      <CurveLine side="right" />
    </div>
  );
}
