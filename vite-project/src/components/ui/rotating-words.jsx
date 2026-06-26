import { useEffect, useState } from "react";

const words = ["businesses", "creators", "professionals", "growing brands"];

export default function RotatingWords({ className }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Don't start rotating until after LCP window (3s)
    const startDelay = setTimeout(() => {
      setStarted(true);
    }, 3000);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!started || words.length <= 1) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2300);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <span className={`relative inline-block overflow-hidden align-baseline ${className || ""}`}>
      <span className={`inline-block ${started ? "transition-all duration-300 ease-out" : ""} ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}>
        {words[index]}.
      </span>
    </span>
  );
}
