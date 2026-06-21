import BookCallSection from "@/components/sections/book-call-section";
import FooterSection from "@/components/sections/footer-section";
import SEO from "@/components/ui/SEO";

export default function BookCallPage() {
  return (
    <main className="w-full min-h-screen">
      <SEO 
        title="Book a Call with Yotvis | Strategy & Discovery" 
        description="Schedule a strategy session with Yotvis to discuss your next digital step."
      />
      <BookCallSection />
      <FooterSection />
    </main>
  );
}
