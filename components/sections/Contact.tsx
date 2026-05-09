"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setStatus({ type: "error", message: "Name is required." });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: "error", message: "Valid email is required." });
      return;
    }
    if (form.message.trim().length < 10) {
      setStatus({
        type: "error",
        message: "Message must be at least 10 characters.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  };

  const contactInfo: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
  }[] = [
    {
      icon: <Mail size={20} />,
      label: "EMAIL",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: "PHONE",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <MapPin size={20} />,
      label: "LOCATION",
      value: "Jabalpur, MP",
      href: "#",
    },
  ];

  return (
    <section
      className="w-full bg-black text-white dot-grid-white py-20"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <SectionLabel number="05" title="CONTACT" inverted />

        <h2 className="font-space text-display md:text-[56px] font-bold uppercase text-white leading-tight mt-4 border-b-[2px] border-white pb-4 mb-12">
          Let&apos;s Build Something.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border-[2px] border-white bg-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
            >
              <div className="border-b-[2px] border-white pb-2 mb-6">
                <span className="font-mono text-sm uppercase tracking-widest">
                  /init.contact_sequence
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-sm uppercase"
                  >
                    Name_
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your designation"
                    required
                    className="bg-black border-[2px] border-white text-white font-inter text-base p-3 focus:border-[3px] focus:outline-none focus:ring-0 placeholder-white/40 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-sm uppercase"
                  >
                    Email_
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-black border-[2px] border-white text-white font-inter text-base p-3 focus:border-[3px] focus:outline-none focus:ring-0 placeholder-white/40 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-sm uppercase"
                >
                  Message_
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows={6}
                  className="bg-black border-[2px] border-white text-white font-inter text-base p-3 focus:border-[3px] focus:outline-none focus:ring-0 placeholder-white/40 w-full resize-none min-h-[120px]"
                />
              </div>

              {/* Status message */}
              {status.type !== "idle" && (
                <div
                  className={`font-mono text-xs mb-4 px-3 py-2 border-[2px] ${
                    status.type === "success"
                      ? "border-white text-white"
                      : status.type === "error"
                      ? "border-white text-white bg-white/10"
                      : "border-white/50 text-white/70"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="border-[2px] border-white bg-white text-black font-mono text-sm uppercase tracking-widest px-8 py-3 shadow-box-inv hover:bg-black hover:text-white transition-colors active:translate-x-1 active:translate-y-1 active:shadow-none w-full md:w-auto disabled:opacity-50"
              >
                {status.type === "loading" ? "SENDING..." : "EXECUTE SEND"}
              </button>
            </form>
          </div>

          {/* Contact info boxes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="border-[2px] border-white bg-black p-6 shadow-box-inv hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-shadow block"
              >
                <div className="flex items-center gap-3 mb-3 border-b-[2px] border-white pb-2">
                  {info.icon}
                  <span className="font-mono text-sm uppercase">
                    {info.label}
                  </span>
                </div>
                <span className="font-mono font-bold text-lg break-all">
                  {info.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
