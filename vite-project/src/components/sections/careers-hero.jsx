import YotvisAnimatedBg from "@/components/ui/yotvis-animated-bg";

export default function CareersHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black py-32 text-[#FFFFF3]">
      <YotvisAnimatedBg />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10 xl:px-12">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#FCFF7C]">
          Careers at Yotvis
        </p>

        <h1 className="max-w-5xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[1.1] tracking-[-0.02em] font-clash">
          <span className="md:whitespace-nowrap">Wherever you are,</span>
          <span className="block text-[#D3E4BF] mt-2 md:mt-4">
            start building.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#FFFFF3]/70 md:text-lg font-nunito">
          Work on real digital projects, grow through execution, and build
          skills across design, development, automation, and creative systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#openings"
            className="inline-flex items-center rounded-full bg-[#FCFF7C] px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
          >
            View Openings
            <span className="ml-2">→</span>
          </a>

          <span className="text-sm uppercase tracking-[0.2em] text-[#FFFFF3]/35">
            Design · Development · Automation
          </span>
        </div>
      </div>
    </section>
  );
}
