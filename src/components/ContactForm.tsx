"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FormData } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="lg:col-span-7 bg-white dark:bg-surface-dark/50 backdrop-blur-sm border border-slate-200 dark:border-border-dark p-6 md:p-8 rounded-xl shadow-2xl">
      <div className="mb-8">
        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
          Available for hire
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Let's build something together.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-md">
          Whether it&apos;s a new product from scratch or a scaling existing
          application, I&apos;m ready to help.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium opacity-80">Full Name</span>
            <input
              className="w-full rounded-lg border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 p-4 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:opacity-30"
              placeholder="e.g., John Doe"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium opacity-80">
              Email Address
            </span>
            <input
              className="w-full rounded-lg border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 p-4 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:opacity-30"
              placeholder="name@company.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium opacity-80">Message</span>
          <textarea
            className="w-full rounded-lg border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-background-dark/50 p-4 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:opacity-30 resize-none"
            placeholder="Tell me about your project..."
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg glow-hover transition-all flex items-center justify-center gap-2 group"
          type="submit"
        >
          Send Message
          <FiSend className="text-sm group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}
