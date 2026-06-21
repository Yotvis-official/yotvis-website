import { ArrowRight } from "lucide-react";

export function FlowButton({ text = "Explore Services", hoverText, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-black/40 bg-transparent px-8 py-3 text-sm font-semibold text-black cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-[#FFFFF3] hover:rounded-[12px] active:scale-[0.95] ${className}`}
    >
      {/* Left arrow — slides in from left on hover */}
      <ArrowRight
        className="absolute w-4 h-4 left-[-25%] stroke-black group-hover:left-4 group-hover:stroke-[#FFFFF3] z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      />

      {/* Button text — shifts right on hover */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out font-nunito flex justify-center items-center">
        <span className={`transition-all duration-300 ${hoverText ? "group-hover:opacity-0 group-hover:-translate-y-2" : ""}`}>
          {text}
        </span>
        {hoverText && (
          <span className="absolute opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {hoverText}
          </span>
        )}
      </span>

      {/* Expanding circle fill */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Right arrow — slides out to right on hover */}
      <ArrowRight
        className="absolute w-4 h-4 right-4 stroke-black group-hover:right-[-25%] group-hover:stroke-[#FFFFF3] z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      />
    </button>
  );
}
