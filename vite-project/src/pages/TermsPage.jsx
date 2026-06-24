import React from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFFF3] text-black pt-32 font-clash flex flex-col">
      <SEO 
        title="Terms & Conditions | Yotvis"
        description="Review the Yotvis Terms and Conditions for using our website and engaging our digital services across design, development, automation, and cloud solutions."
      />
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 flex flex-col justify-center min-h-[60vh] flex-grow">
        <h1 className="text-4xl md:text-5xl font-clash font-medium text-black mb-8 leading-[1.1] tracking-tight">
          Terms & Conditions
        </h1>
        <div className="text-black/75 font-nunito space-y-6 text-base md:text-lg leading-relaxed max-w-5xl">
          <p><strong>Last updated: June 2026</strong></p>
          <p>
            These terms and conditions outline the rules and regulations for the use of Yotvis's Website, located at yotvis.com.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the Yotvis website if you do not accept all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-clash font-medium text-black pt-4">Intellectual Property</h2>
          <p>
            Unless otherwise stated, Yotvis and/or its licensors own the intellectual property rights for all material on Yotvis. All intellectual property rights are reserved. You may view and/or print pages from yotvis.com for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <h2 className="text-2xl font-clash font-medium text-black pt-4">User Conduct</h2>
          <p>
            You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of yotvis.com, or in any way which is unlawful, illegal, fraudulent, or harmful.
          </p>
        </div>
      </section>
      
      <div className="relative z-[5] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] mt-auto">
        <FooterSection />
      </div>
    </main>
  );
}
