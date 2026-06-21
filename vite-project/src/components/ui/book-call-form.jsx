import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Project Need" },
  { id: 3, title: "Project Details" },
];

export default function BookCallForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectNeeds: [],
    timeline: "",
    budget: "",
    projectDescription: "",
    preferredCallTime: "",
    link: "",
  });

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (need) => {
    setFormData((prev) => {
      const isSelected = prev.projectNeeds.includes(need);
      return {
        ...prev,
        projectNeeds: isSelected
          ? prev.projectNeeds.filter((n) => n !== need)
          : [...prev.projectNeeds, need],
      };
    });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.projectNeeds.length > 0;
      case 3:
        return (
          formData.projectDescription.trim() !== "" &&
          formData.timeline !== "" &&
          formData.budget !== ""
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid() && currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isStepValid()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectNeeds: [],
      timeline: "",
      budget: "",
      projectDescription: "",
      preferredCallTime: "",
      link: "",
    });
    setCurrentStep(1);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#000000] text-[#FFFFF3] rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)] min-h-[500px] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 rounded-full bg-[#D3E4BF] p-4"
        >
          <CheckCircle2 className="w-12 h-12 text-[#000000]" />
        </motion.div>
        <h3 className="text-3xl font-medium mb-4 font-clash tracking-wide">Request received.</h3>
        <p className="text-white/70 max-w-sm mx-auto mb-10 text-lg">
          Thanks for sharing your project details. Yotvis will review your request and respond with the next step.
        </p>
        <button
          onClick={resetForm}
          className="bg-[#FCFF7C] text-[#000000] px-8 py-4 rounded-full font-medium hover:bg-[#D3E4BF] transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#000000] text-[#FFFFF3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)] flex flex-col relative overflow-hidden">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-10 mt-2">
        <div className="flex items-center space-x-2 w-full max-w-[200px]">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            return (
              <div
                key={step.id}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors duration-300",
                  isActive ? "bg-[#FCFF7C]" : isCompleted ? "bg-[#D3E4BF]" : "bg-white/20"
                )}
              />
            );
          })}
        </div>
        <span className="text-sm font-medium text-white/50 tracking-wider">
          STEP {currentStep} OF {steps.length}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col relative min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-1"
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-medium mb-6 font-clash">Basic Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-white/70 ml-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-white/70 ml-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-white/70 ml-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm text-white/70 ml-1">Company / Brand</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => updateForm("company", e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-medium mb-6 font-clash">What do you need help with?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Brand Identity", "Logo Design", "UI/UX Design", 
                    "Website Development", "Full-Stack Development", "App Development", 
                    "AI Automation", "DevOps / Linux / Deployment", "Maintenance / Support"
                  ].map((need) => {
                    const isSelected = formData.projectNeeds.includes(need);
                    return (
                      <div
                        key={need}
                        onClick={() => handleCheckbox(need)}
                        className={cn(
                          "cursor-pointer border rounded-2xl px-5 py-4 flex items-center transition-all duration-200",
                          isSelected
                            ? "border-[#D3E4BF] bg-[#D3E4BF]/10"
                            : "border-white/20 hover:border-white/50"
                        )}
                      >
                        <div className={cn(
                          "w-5 h-5 rounded-[4px] border flex items-center justify-center mr-4 transition-colors",
                          isSelected ? "border-[#D3E4BF] bg-[#D3E4BF]" : "border-white/40"
                        )}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                        </div>
                        <span className="font-medium text-[15px]">{need}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-medium mb-6 font-clash">Project Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="timeline" className="text-sm text-white/70 ml-1">Expected Timeline *</label>
                    <div className="relative">
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) => updateForm("timeline", e.target.value)}
                        className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 appearance-none outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      >
                        <option value="" disabled className="text-black">Select an option</option>
                        <option value="As soon as possible" className="text-black">As soon as possible</option>
                        <option value="Within 2 weeks" className="text-black">Within 2 weeks</option>
                        <option value="Within 1 month" className="text-black">Within 1 month</option>
                        <option value="1–3 months" className="text-black">1–3 months</option>
                        <option value="Still exploring" className="text-black">Still exploring</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="budget" className="text-sm text-white/70 ml-1">Estimated Budget *</label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => updateForm("budget", e.target.value)}
                        className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 appearance-none outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      >
                        <option value="" disabled className="text-black">Select an option</option>
                        <option value="Under ₹10,000" className="text-black">Under ₹10,000</option>
                        <option value="₹10,000 – ₹25,000" className="text-black">₹10,000 – ₹25,000</option>
                        <option value="₹25,000 – ₹50,000" className="text-black">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,00,000" className="text-black">₹50,000 – ₹1,00,000</option>
                        <option value="Above ₹1,00,000" className="text-black">Above ₹1,00,000</option>
                        <option value="Not sure yet" className="text-black">Not sure yet</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectDescription" className="text-sm text-white/70 ml-1">Project Description *</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    value={formData.projectDescription}
                    onChange={(e) => updateForm("projectDescription", e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3] resize-none"
                    placeholder="Tell us a bit about what you want to achieve..."
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="preferredCallTime" className="text-sm text-white/70 ml-1">Preferred Call Time (Optional)</label>
                    <input
                      type="text"
                      id="preferredCallTime"
                      name="preferredCallTime"
                      autoComplete="off"
                      value={formData.preferredCallTime}
                      onChange={(e) => updateForm("preferredCallTime", e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      placeholder="e.g. Weekdays afternoon"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="link" className="text-sm text-white/70 ml-1">Website / Social Link (Optional)</label>
                    <input
                      type="url"
                      id="link"
                      name="link"
                      autoComplete="url"
                      value={formData.link}
                      onChange={(e) => updateForm("link", e.target.value)}
                      className="w-full bg-transparent border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-[#FCFF7C] transition-colors text-[#FFFFF3]"
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-full border border-white/20 text-[#FFFFF3] font-medium hover:bg-white/5 transition-colors"
            >
              Back
            </button>
          ) : (
            <div></div> // empty spacer
          )}

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isStepValid()}
              className="px-8 py-3 rounded-full bg-[#FCFF7C] text-[#000000] font-medium hover:bg-[#D3E4BF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isStepValid() || isSubmitting}
              className="px-8 py-3 rounded-full bg-[#FCFF7C] text-[#000000] font-medium hover:bg-[#D3E4BF] transition-colors disabled:opacity-50 flex items-center space-x-2"
            >
              <span>{isSubmitting ? "Submitting..." : "Submit Request"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
