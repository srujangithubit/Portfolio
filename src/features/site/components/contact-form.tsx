"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(20, "Share a bit more detail"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    try {
      setStatus("sending");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 rounded-3xl border border-white/10 bg-[#101010] p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/75">
          Name
          <input
            {...register("name")}
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
          {errors.name ? (
            <span className="text-xs text-rose-300">{errors.name.message}</span>
          ) : null}
        </label>
        <label className="grid gap-2 text-sm text-white/75">
          Email
          <input
            {...register("email")}
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
          {errors.email ? (
            <span className="text-xs text-rose-300">
              {errors.email.message}
            </span>
          ) : null}
        </label>
      </div>
      <label className="grid gap-2 text-sm text-white/75">
        Company / Team
        <input
          {...register("company")}
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
        />
      </label>
      <label className="grid gap-2 text-sm text-white/75">
        Message
        <textarea
          {...register("message")}
          rows={6}
          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
        />
        {errors.message ? (
          <span className="text-xs text-rose-300">
            {errors.message.message}
          </span>
        ) : null}
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.01] disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" ? (
          <span className="text-sm text-cyan-300">
            Your message has been sent successfully!
          </span>
        ) : null}
        {status === "error" ? (
          <span className="text-sm text-rose-300">
            Something went wrong. Please try again or email me directly.
          </span>
        ) : null}
      </div>
    </form>
  );
}
