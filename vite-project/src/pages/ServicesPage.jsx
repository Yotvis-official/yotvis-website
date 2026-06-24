import SEO from "@/components/ui/SEO";
import ServicesFlowSection from "@/components/sections/services-flow-section";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/footer-section";
import { usePageTransition } from "@/App";

const servicesFaqs = [
  {
    id: "01",
    question: "What digital services does Yotvis provide?",
    answer: "Yotvis provides branding, UI/UX design, website development, app development, AI automation, and cloud solutions."
  },
  {
    id: "02",
    question: "How much does it cost to build a digital presence?",
    answer: "The cost of building a digital presence depends on your specific scope, whether it is branding, a website, or AI automation. Yotvis provides custom quotes based on your business goals."
  },
  {
    id: "03",
    question: "How long does it take to design and launch a website?",
    answer: "Yotvis typically designs and launches a custom, responsive website in 4 to 8 weeks, depending on the number of pages, custom UI/UX features, and cloud infrastructure required."
  },
  {
    id: "04",
    question: "Can I hire Yotvis for just one specific service?",
    answer: "Yes, you can hire Yotvis for a single service like branding or UI/UX design based on your current business needs."
  },
  {
    id: "05",
    question: "Do you build custom solutions or only standard websites?",
    answer: "Yotvis builds custom digital solutions tailored to your business needs, including websites, applications, automations, dashboards, and cloud systems."
  }
];

export default function ServicesPage() {
  const { navigateTo } = usePageTransition();

  return (
    <main className="w-full min-h-screen bg-black">
      <SEO 
        title="Digital Services That Build Real Business Growth | Yotvis" 
        description="Need a brand that commands attention? A website that converts? AI systems that save you hours? Everything your digital presence needs — strategy, design, development, automation, and cloud — in one studio."
        keywords="Web Design, UI/UX, Cloud, AI Automation, Branding Services"
        faqSchema={servicesFaqs}
      />
      <ServicesFlowSection />
      
      {/* Services FAQ Section placed at the bottom */}
      <div className="relative z-[4] w-full bg-[#FFFFF3] rounded-t-[3rem] overflow-hidden">
        <FaqSection 
          title={<>Questions<br />About Our<br />Services</>}
          subtitle="Clear answers before choosing the right service for your current stage."
          faqsData={servicesFaqs}
          ctaText="Ready to start building?"
          ctaLabel="Contact Us"
          onCtaClick={() => navigateTo("/contact")}
        />
      </div>

      <div className="relative z-[5] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3]">
        <FooterSection />
      </div>
    </main>
  );
}
