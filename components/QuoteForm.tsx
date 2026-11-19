"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries());
    const body = `Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nProduct: ${d.product}\nVolume: ${d.volume}\nNotes: ${d.notes}`;
    const url = `mailto:sales@gnuts.in?subject=${encodeURIComponent("Gnuts quote request")}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }

  const input =
    "w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/40 outline-none focus:border-[#e8c46b]";
  return (
    <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={input} />
        <input name="company" required placeholder="Company" className={input} />
      </div>
      <input name="email" type="email" required placeholder="Email" className={input} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input name="product" placeholder="Product (creamy / crunchy / raw kernels)" className={input} />
        <input name="volume" placeholder="Volume per month" className={input} />
      </div>
      <textarea name="notes" rows={3} placeholder="Destination market, labelling, samples" className={input} />
      <button
        type="submit"
        className="mt-2 rounded-md bg-[#e8c46b] px-6 py-3 text-[15px] font-semibold text-[#2b2410] transition hover:bg-[#f2d489]"
      >
        Request a quote
      </button>
      {sent && (
        <p className="text-sm text-white/70">
          Opening your email client. Or write to us directly at sales@gnuts.in.
        </p>
      )}
    </form>
  );
}
