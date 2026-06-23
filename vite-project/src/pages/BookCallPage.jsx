import BookCallSection from "@/components/sections/book-call-section";
import FooterSection from "@/components/sections/footer-section";
import SEO from "@/components/ui/SEO";

export default function BookCallPage() {
  return (
    <main className="w-full min-h-screen bg-[#D3E4BF]">
      <SEO 
        title="Book a Call with Yotvis | Strategy & Discovery" 
        description="Schedule a strategy session with Yotvis to discuss your next digital step."
      />
      <BookCallSection />
      <div className="relative z-[3] w-[calc(100%+4px)] -ml-[2px] bg-[#D3E4BF]">
        <FooterSection />
      </div>
    </main>
  );
}
