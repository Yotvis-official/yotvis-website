import { useEffect } from "react";

export default function YotvisAnimatedBg({ className = "" }) {
  useEffect(() => {
    const paths = document.querySelectorAll(".yotvis-animation-line");

    paths.forEach((path, index) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}px`;
      path.style.strokeDashoffset = `${length}px`;

      const timer = setTimeout(() => {
        path.style.transition = "stroke-dashoffset 2.4s ease-in-out";
        path.style.strokeDashoffset = "0px";
      }, 300 + index * 180);

      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-black ${className}`}
      aria-hidden="true"
    >
      <style>
        {`
          @keyframes yotvisPatternMove {
            0% { transform: translate3d(-4%, -4%, 0); }
            100% { transform: translate3d(4%, 4%, 0); }
          }

          @keyframes yotvisOrbFloat {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(-4%, 3%, 0) scale(1.08); }
          }

          .yotvis-pattern {
            animation: yotvisPatternMove 24s linear infinite alternate;
          }

          .yotvis-orb {
            animation: yotvisOrbFloat 12s ease-in-out infinite;
          }

          .yotvis-animation-line {
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          @media (prefers-reduced-motion: reduce) {
            .yotvis-pattern,
            .yotvis-orb {
              animation: none;
            }

            .yotvis-animation-line {
              transition: none !important;
              stroke-dashoffset: 0 !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,243,0.08),transparent_45%)]" />

      <div className="yotvis-orb absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#7F7CFF]/20 blur-[120px]" />
      <div className="yotvis-orb absolute -left-32 bottom-10 h-[360px] w-[360px] rounded-full bg-[#FCFF7C]/12 blur-[110px]" />

      <div
        className="yotvis-pattern absolute -left-1/2 -top-1/2 h-[200%] w-[200%] opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 12px, #FFFFF3 12px, #FFFFF3 13px)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          className="yotvis-animation-line"
          d="M1440 120H980C948 120 922 146 922 178V315C922 347 896 373 864 373H520C488 373 462 399 462 431V560"
          stroke="#FCFF7C"
          strokeWidth="2"
          opacity="0.42"
        />

        <path
          className="yotvis-animation-line"
          d="M0 650H310C342 650 368 624 368 592V470C368 438 394 412 426 412H760C792 412 818 386 818 354V240"
          stroke="#7F7CFF"
          strokeWidth="2"
          opacity="0.38"
        />

        <path
          className="yotvis-animation-line"
          d="M150 120H420C452 120 478 146 478 178V238C478 270 504 296 536 296H760"
          stroke="#D3E4BF"
          strokeWidth="1.5"
          opacity="0.34"
        />

        <path
          className="yotvis-animation-line"
          d="M1280 760H980C948 760 922 734 922 702V640C922 608 896 582 864 582H640"
          stroke="#FFFFF3"
          strokeWidth="1.3"
          opacity="0.22"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
    </div>
  );
}
