import BookCallSection from "@/components/sections/book-call-section";
import FooterSection from "@/components/sections/footer-section";
import SEO from "@/components/ui/SEO";

export default function BookCallPage() {
  return (
    <main className="w-full min-h-screen bg-[#D3E4BF]">
      <SEO 
        title="Book a Strategy Call | Find Your Digital Direction" 
        description="Not sure where to start with your digital presence? Book a call with Yotvis. In 30 minutes we map your goals, identify the gaps, and hand you a clear path forward — no fluff, no obligation."
      />
      <BookCallSection />
      <div className="relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#D3E4BF]">
        <FooterSection />
      </div>
    </main>
  );
}
