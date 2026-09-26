import LegalShell from "../components/legal-shell";
import { absoluteUrl, routeMetadata, SITE_ORIGIN } from "../../lib/site";

const faqs = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is a virtual phone agent that answers calls around the clock, understands natural speech, books appointments, qualifies leads, and routes urgent requests without sending callers to voicemail.",
  },
  {
    question: "How does Vectolift's AI calling agent work?",
    answer:
      "When a customer calls your business, Vectolift answers quickly, understands the caller's intent through conversation, takes the next action, and can send structured call details into your calendar or CRM.",
  },
  {
    question: "How much does it cost compared with a human receptionist?",
    answer:
      "A full-time receptionist can cost tens of thousands per year and usually covers only business hours. Vectolift is designed to cover calls 24/7 at a lower operating cost while helping recover revenue from missed calls.",
  },
  {
    question: "Can Vectolift replace a human receptionist?",
    answer:
      "For many small and medium businesses, Vectolift can handle the everyday reception work: answering calls, booking appointments, qualifying leads, updating records, and handing off complex or urgent calls to a person.",
  },
  {
    question: "What happens when calls are missed?",
    answer:
      "Missed calls often become missed jobs, especially in service businesses where customers call the next available provider. Vectolift helps prevent that loss by answering instantly, including after hours and during busy periods.",
  },
  {
    question: "What trades does Vectolift work best for?",
    answer:
      "Vectolift is built for Australian home service businesses including plumbers, electricians, HVAC and air conditioning, pest control, locksmiths, landscapers, cleaners, and other trades that rely on phone calls to book jobs.",
  },
  {
    question: "Which CRM platforms can Vectolift integrate with?",
    answer:
      "Vectolift integrates with calendar tools such as Cal.com and Google Calendar, so booked appointments land directly on your schedule. For other tools and CRM platforms, reach out to discuss your specific setup requirements.",
  },
  {
    question: "Does Vectolift offer a free trial?",
    answer:
      "Yes. Vectolift offers a 7-day free trial so you can test the AI receptionist with your real business calls before committing to a plan.",
  },
  {
    question: "Can Vectolift detect emergencies like a burst pipe or gas leak?",
    answer:
      "Yes. Vectolift's AI is designed to recognise emergency situations — such as burst pipes, gas leaks, or power outages — and immediately notify you via SMS so you can respond quickly.",
  },
  {
    question: "Does Vectolift use an Australian accent?",
    answer:
      "Yes. Vectolift uses ElevenLabs voice technology to produce a natural-sounding Australian accent, so callers hear a friendly, local voice rather than a robotic or American-sounding system.",
  }
];

export const metadata = routeMetadata(
  "/faq",
  "AI Receptionist FAQ — Common Questions for Trade Businesses | Vectolift",
  "Answers to common questions about AI receptionists for Australian trade businesses. Learn about pricing, integrations, call handling, emergency detection, and the 7-day free trial."
);

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
    url: absoluteUrl("/faq"),
    publisher: { "@type": "Organization", name: "Vectolift", url: SITE_ORIGIN },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_ORIGIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: absoluteUrl("/faq"),
      },
    ],
  };

  return (
    <LegalShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="px-18 py-20 max-lg:px-6">
        <div className="mx-auto max-w-232">
          <p className="text-sm font-semibold uppercase tracking-[1.2px] text-primary">FAQ</p>
          <h1 className="mt-4 text-[4rem] font-semibold leading-[1.05] tracking-[-2px] max-md:text-[2.5rem]">
            AI Receptionist FAQ
          </h1>
          <p className="mt-5 max-w-176 text-lg leading-7 text-color-002/75">
            Everything you need to know about AI receptionists, AI calling agents, and how Vectolift works for service businesses.
          </p>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-black/10 bg-white p-6 shadow-sm open:border-primary/40"
              >
                <summary className="cursor-pointer list-none text-xl font-semibold tracking-[-0.3px] marker:hidden">
                  <span className="flex items-center justify-between gap-6">
                    {faq.question}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </LegalShell>
  );
}
