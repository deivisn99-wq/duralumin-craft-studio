import { useState } from "react";
import { content, type Lang } from "@/lib/content";

export function QuoteForm({ lang }: { lang: Lang }) {
  const t = (content[lang] ?? content.al).quote;
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <Field label={t.name} id="name">
        <input required name="name" id="name" autoComplete="name" className={inputCls} />
      </Field>
      <Field label={t.phone} id="phone">
        <input
          required
          name="phone"
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputCls}
        />
      </Field>
      <Field label={t.email} id="email">
        <input name="email" id="email" type="email" autoComplete="email" className={inputCls} />
      </Field>
      <Field label={t.type} id="type">
        <select name="type" id="type" className={inputCls} defaultValue={t.typeOptions[0]}>
          {t.typeOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label={t.message} id="message" className="sm:col-span-2">
        <textarea name="message" id="message" rows={4} className={inputCls} />
      </Field>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-beige px-6 py-4 text-sm font-bold text-brown-deep transition-transform hover:-translate-y-0.5"
        >
          {t.submit}
        </button>
        {sent && (
          <p className="mt-3 text-sm text-beige-deep" role="status">
            {t.success}
          </p>
        )}
      </div>
    </form>
  );
}
const inputCls =
  "w-full rounded-xl border border-beige/25 bg-brown-deep/30 px-4 py-3 text-sm text-beige outline-none transition-colors placeholder:text-beige/50 focus:border-beige";
function Field({
  label,
  id,
  children,
  className,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label htmlFor={id} className={className}>
      <span className="mb-2 block text-xs font-semibold tracking-widest text-beige-deep/80">
        {label}
      </span>
      {children}
    </label>
  );
}
