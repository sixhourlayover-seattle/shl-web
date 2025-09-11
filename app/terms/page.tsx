import { TermsPageText } from "@/lib/text";

export default function TermsPage() {
  return (
    <main className="container py-10 prose prose-slate max-w-3xl">
      <h1>{TermsPageText.title}</h1>
      <p>{TermsPageText.description}</p>
      <h2>{TermsPageText.liabilityTitle}</h2>
      <p>{TermsPageText.liabilityDescription}</p>
    </main>
  );
}
