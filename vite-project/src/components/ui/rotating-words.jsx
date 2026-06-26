import { useEffect, useState } from "react";

const words = [
  "businesses",
  "creators",
  "professionals",
  "growing brands",
];

export default function RotatingWords({ className }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block overflow-hidden align-baseline ${className || ""}`}>
      <span
        className={`inline-block ${mounted ? "transition-all duration-300 ease-out" : ""} ${
          visible
            ? "translate-y-0 opacity-100 blur-0"
            : "-translate-y-4 opacity-0 blur-sm"
        }`}
      >
        {words[index]}.
      </span>
    </span>
  );
}
