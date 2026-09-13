import { useState } from "react";
import { toast } from "sonner";

const ACCESS_KEY = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined;

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!ACCESS_KEY) {
      toast.error("Contact form is not configured yet", {
        description: "Add your Web3Forms access key to VITE_WEB3FORMS_ACCESS_KEY.",
      });
      return;
    }

    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from your portfolio");
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (json.success) {
        toast.success("Message sent — thank you!");
        form.reset();
      } else {
        toast.error("Could not send your message", { description: json.message });
      }
    } catch {
      toast.error("Network error", { description: "Please try again in a moment." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-card grid gap-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="rounded-xl border border-purple/30 bg-background/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-purple/30 bg-background/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple"
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="rounded-xl border border-purple/30 bg-background/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple"
        />
      </div>
      <button type="submit" disabled={sending} className="btn-purple justify-self-start">
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
