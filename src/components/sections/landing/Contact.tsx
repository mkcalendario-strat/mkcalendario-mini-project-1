"use client";

import { Section, SectionWrapper } from "@/components/layouts/Section";
import Button from "@/components/ui/Button";
import HighlightTab from "@/components/ui/HighlightTab";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("idle");

    const request = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, subject, message })
    });

    setLoading(false);

    if (request.ok) {
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <Section className="py-[150px]">
      <SectionWrapper className="flex flex-col gap-[100px] md:flex-row">
        <div className="flex flex-col items-baseline gap-2 md:w-[50%]">
          <HighlightTab>Contact</HighlightTab>
          <h1 className="text-4xl font-bold text-neutral-100">
            Let&apos;s build something together.
          </h1>
          <p className="text-neutral-200">
            Looking to hire a developer? I&apos;m open to freelance work or
            professional job. Let&apos;s bring your ideas to life.
          </p>
        </div>

        <div className="flex w-full flex-col items-baseline gap-3 md:w-[50%]">
          <Input
            className="bg-neutral-800"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="bg-neutral-800"
            placeholder="Title of Your Message"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Textarea
            className="bg-neutral-800"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            className="bg-neutral-100"
            onClick={handleSubmit}>
            <i className="far fa-paper-plane" />
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && (
            <p className="mt-1 text-green-400">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-1 text-red-400">Failed to send message.</p>
          )}
        </div>
      </SectionWrapper>
    </Section>
  );
}
