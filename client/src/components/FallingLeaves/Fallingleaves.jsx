import { useEffect } from "react";
import "./FallingLeaves.css";

const leafConfigs = [
  {
    fill: "#39FF14",
    glow: "rgba(57,255,20,0.7)",
  },
  {
    fill: "#00FF66",
    glow: "rgba(0,255,102,0.7)",
  },
  {
    fill: "#7FFF00",
    glow: "rgba(127,255,0,0.7)",
  },
];

function getLeafSVG(color) {
  return `
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
<path
fill="${color}"
d="M0,30 C20,0 60,0 100,30 C60,60 20,60 0,30 Z"/>
<path
d="M0,30 Q50,28 100,30"
stroke="rgba(255,255,255,0.6)"
stroke-width="2"
fill="none"/>
</svg>
`;
}

export default function FallingLeaves() {

  useEffect(() => {

    const container = document.getElementById("leaf-container");

    function createLeaf() {

      if (!container) return;

      const leaf = document.createElement("div");

      leaf.className = "leaf";

      const config =
        leafConfigs[Math.floor(Math.random() * leafConfigs.length)];

      leaf.innerHTML = getLeafSVG(config.fill);

      const width = Math.random() * 25 + 20;

      leaf.style.width = `${width}px`;

      leaf.style.left = `${Math.random() * 100}vw`;

      const duration = Math.random() * 5 + 5;

      leaf.style.animationDuration = `${duration}s`;

      const startRot = Math.random() * 360;

      const endRot = startRot + Math.random() * 1080;

      const drift = Math.random() * 250 - 125;

      leaf.style.setProperty(
        "--glow-color",
        config.glow
      );

      leaf.style.setProperty(
        "--start-rot",
        `${startRot}deg`
      );

      leaf.style.setProperty(
        "--end-rot",
        `${endRot}deg`
      );

      leaf.style.setProperty(
        "--drift",
        `${drift}px`
      );

      leaf.style.animationDelay =
        `${Math.random() * 2}s`;

      container.appendChild(leaf);

      setTimeout(() => {

        leaf.remove();

      }, (duration + 2) * 1000);

    }

    const interval = setInterval(createLeaf, 600);

    return () => clearInterval(interval);

  }, []);

  return <div id="leaf-container"></div>;
}