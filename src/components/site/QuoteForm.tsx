import { useState } from "react";
import { content, type Lang } from "@/lib/content";

export function QuoteForm({ lang }: { lang: Lang }) {
  const t = content[lang].quote;
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <Field label={t.name}>
        <input required name="name" className={inputCls} autoComplete="name" />
      </Field>
      <Field label={t.phone}>
        <input required name="phone" type="tel" className={inputCls} autoComplete="tel" />
      </Field>
      <Field label={t.email}>
        <input name="email" type="email" className={inputCls} autoComplete="email" />
      </Field>
      <Field label={t.type}>
        <select name="type" className={inputCls} defaultValue={t.typeOptions[0]}>
          {t.typeOptions.map((o) => (
            <option key={o} value={o} className="text-brown-deep">
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field label={t.message} className="sm:col-span-2">
        <textarea name="message" rows={4} className={inputCls} />
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-sm bg-beige px-6 py-3.5 text-sm font-semibold tracking-wide text-brown transition-all duration-150 hover:bg-white md:hover:scale-[1.02] md:hover:shadow-lift"
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
  "w-full rounded-sm border border-beige/35 bg-brown-deep/40 px-3.5 py-3 text-sm text-beige placeholder:text-beige/50 outline-none transition-colors focus:border-beige";

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block label-caps text-beige-deep/80">{label}</span>
      {children}
    </label>
  );
}
