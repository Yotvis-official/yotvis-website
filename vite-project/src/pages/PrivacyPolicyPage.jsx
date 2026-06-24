import React from "react";
import SEO from "@/components/ui/SEO";
import FooterSection from "@/components/sections/footer-section";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFFF3] text-black pt-32 font-clash flex flex-col">
      <SEO 
        title="Privacy Policy | Yotvis"
        description="Read the Yotvis Privacy Policy to understand how we collect, use, protect, and manage personal information shared through our website and services."
      />
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 py-16 flex flex-col justify-center min-h-[60vh] flex-grow">
        <h1 className="text-4xl md:text-5xl font-clash font-medium text-black mb-8 leading-[1.1] tracking-tight">
          Privacy Policy
        </h1>
        <div className="text-black/75 font-nunito space-y-6 text-base md:text-lg leading-relaxed max-w-5xl">
          <p><strong>Last updated: June 2026</strong></p>
          <p>
            Yotvis ("we", "us", or "our") operates yotvis.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website.
          </p>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We only use the contact data you submit via our forms to communicate with you about your projects and to provide and improve our digital services.
          </p>
          <h2 className="text-2xl font-clash font-medium text-black pt-4">Data Collection & Use</h2>
          <p>
            While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, such as your email address, phone number, and project details.
          </p>
          <h2 className="text-2xl font-clash font-medium text-black pt-4">Use of Cookies</h2>
          <p>
            Yotvis uses cookies to remember your preferences and analyze how our website is used. You have the option to accept or decline cookies through our consent banner. Declining cookies may limit some functionality of the site.
          </p>
          <h2 className="text-2xl font-clash font-medium text-black pt-4">Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal info, we cannot guarantee its absolute security.
          </p>
        </div>
      </section>
      
      <div className="relative z-[5] w-[calc(100%+4px)] -ml-[2px] bg-[#FFFFF3] mt-auto">
        <FooterSection />
      </div>
    </main>
  );
}
