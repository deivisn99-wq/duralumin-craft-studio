import { useState } from "react";
import { content, type Lang } from "@/lib/content";


export function QuoteForm({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).quote;
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  return (
    <form
      action="https://formspree.io/f/mnpqbwqa"
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSubmitting(true);
        setError(false);
        try {
          const response = await fetch("https://formspree.io/f/mnpqbwqa", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(form),
          });
          if (!response.ok) throw new Error("Form submission failed");
          setSent(true);
          form.reset();
        } catch {
          setError(true);
        } finally {
          setSubmitting(false);
        }
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <Field label={t.name} id="name">
        <input required name="name" id="name" autoComplete="name" className={inputCls} />
      </Field>
