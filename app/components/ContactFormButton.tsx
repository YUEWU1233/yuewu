"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactFormButton() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  function showForm() {
    dialog.current?.showModal();
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={showForm}
        aria-label="Open message form"
        aria-haspopup="dialog"
        aria-controls="contact-form-dialog"
        title="Leave a message"
        className="rounded-full border border-slate-300 p-2 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-slate-700" aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      </button>
      <dialog
        ref={dialog}
        id="contact-form-dialog"
        aria-labelledby="contact-form-title"
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-emerald-100 bg-amber-50 p-5 text-slate-800 shadow-2xl backdrop:bg-slate-950/50 backdrop:backdrop-blur-sm sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 id="contact-form-title" className="text-2xl sm:text-3xl">Leave a message</h2>
            <p className="mt-2 text-sm text-slate-600">Questions, research ideas or a collaboration in mind?</p>
          </div>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close message form" className="shrink-0 rounded-full border border-slate-300 p-2 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        {open && <ContactForm />}
      </dialog>
    </>
  );
}
