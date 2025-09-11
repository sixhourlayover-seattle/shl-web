import { PrivacyPageText } from "@/lib/text";

export default function PrivacyPage() {
  return (
    <main className="container py-10 prose prose-slate max-w-3xl">
      <h1>{PrivacyPageText.title}</h1>
      <p>{PrivacyPageText.description}</p>
      <h2>{PrivacyPageText.whatWeCollect}</h2>
      <ul>
        <li>{PrivacyPageText.anonymousUsage}</li>
        <li>{PrivacyPageText.serverLogs}</li>
      </ul>
      <h2>{PrivacyPageText.contact}</h2>
      <p>{PrivacyPageText.contactEmail}</p>
    </main>
  );
}
