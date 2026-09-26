import Link from "next/link";
import LegalShell from "../components/legal-shell";
import { absoluteUrl, routeMetadata, SITE_ORIGIN } from "../../lib/site";
import { features } from "../content";

const faqs = [
  {
    question: "How much does an AI receptionist cost in Australia?",
    answer:
      "Unlike a human receptionist who typically costs tens of thousands per year and only covers business hours, Vectolift operates on a flat monthly fee. This provides 24/7 coverage, including weekends and public holidays, at a fraction of the cost.",
  },
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "Yes, and we believe transparency is important. However, because our AI uses advanced natural language processing and a natural Australian accent from ElevenLabs, callers quickly adapt and appreciate getting their questions answered and jobs booked immediately rather than leaving a voicemail.",
  },
  {
    question: "Does it work after hours?",
    answer:
      "Absolutely. Vectolift operates 24 hours a day, 7 days a week. Whether a customer calls at 2 PM on a Tuesday or 3 AM on a Sunday with a plumbing emergency, the AI answers instantly.",
  },
  {
    question: "What calendar tools does it integrate with?",
    answer:
      "Vectolift seamlessly integrates with Cal.com and Google Calendar. When a customer calls to book a job, the AI checks your real-time availability and schedules the appointment directly into your calendar.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 7-day free trial. You can test the AI receptionist with your real business calls, see how it handles your customers, and review the call summaries before making any commitment.",
  },
];

export const metadata = routeMetadata(
  "/ai-receptionist-australia",
  "AI Receptionist for Australian Businesses — Answer Every Call 24/7 | Vectolift",
  "Australia's AI receptionist for home service businesses. Answers calls 24/7 with a natural Australian accent, books appointments, detects emergencies, and never sends callers to voicemail. Try free for 7 days."
);

export default function AIReceptionistAustraliaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
    url: absoluteUrl("/ai-receptionist-australia"),
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
        name: "AI Receptionist Australia",
        item: absoluteUrl("/ai-receptionist-australia"),
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Receptionist Australia",
    provider: {
      "@type": "Organization",
      name: "Vectolift",
      url: SITE_ORIGIN,
    },
    description: "24/7 AI phone answering service for Australian trade and home service businesses. Features natural Australian accent, calendar booking, and emergency detection.",
    areaServed: {
      "@type": "Country",
      name: "Australia"
    }
  };

  return (
    <LegalShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      <article className="px-18 py-20 max-lg:px-6">
        <div className="mx-auto max-w-232">
          
          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="mt-4 text-[4rem] font-semibold leading-[1.05] tracking-[-2px] max-md:text-[2.5rem]">
              AI Receptionist Built for Australia
            </h1>
            <h2 className="mt-6 text-2xl font-medium text-color-002">
              Answer every call, book every job, 24/7 — with a natural Australian voice.
            </h2>
            <div className="mt-8 grid gap-4 text-lg leading-7 text-color-002/75 max-w-176">
              <p>
                In the home service industry, missed calls equal missed revenue. When a potential customer needs a job done and gets sent to voicemail, they simply call the next business on Google.
              </p>
              <p>
                Our AI receptionist is built specifically for Australian trades and service businesses. It answers instantly, understands local trade terminology, and books jobs directly into your calendar while you stay focused on the tools.
              </p>
              <p>
                Stop losing jobs to competitors and start capturing every lead, day or night.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/#hero" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary/90">
                Start Your 7-Day Free Trial
              </Link>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="text-primary font-bold text-xl mb-4">Step 1</div>
                <h3 className="text-xl font-semibold mb-3">Your phone rings</h3>
                <p className="text-color-002/75 leading-relaxed">
                  Instead of going to voicemail, Vectolift answers within seconds, day or night. Callers are greeted by a natural Australian accent, ready to help immediately.
                </p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="text-primary font-bold text-xl mb-4">Step 2</div>
                <h3 className="text-xl font-semibold mb-3">The AI handles it</h3>
                <p className="text-color-002/75 leading-relaxed">
                  The AI understands the request, asks relevant questions, detects emergencies, and books the job directly into your calendar using smart integration.
                </p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm">
                <div className="text-primary font-bold text-xl mb-4">Step 3</div>
                <h3 className="text-xl font-semibold mb-3">You get the job</h3>
                <p className="text-color-002/75 leading-relaxed">
                  You receive an instant SMS summary with caller details, job type, and booking confirmation. You just check your phone and head to the next job.
                </p>
              </div>
            </div>
          </section>

          {/* Who It's Built For Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">Built specifically for Australian home service businesses</h2>
            <p className="text-lg leading-7 text-color-002/75 mb-8">
              Whether you are a solo operator or running a fleet of vans, our AI receptionist is trained to handle the specific needs of your trade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog/ai-receptionist-for-plumbers-australia" className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002 hover:border-primary transition-colors">Plumbers</Link>
              <Link href="/blog/24-7-answering-service-for-electricians-australia" className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002 hover:border-primary transition-colors">Electricians</Link>
              <Link href="/blog/ai-receptionist-for-hvac-air-conditioning-australia" className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002 hover:border-primary transition-colors">HVAC / Air Conditioning</Link>
              <span className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002">Pest Control</span>
              <span className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002">Locksmiths</span>
              <span className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002">Landscapers</span>
              <span className="px-6 py-3 rounded-full bg-color-001 border border-black/10 text-color-002">Cleaners</span>
            </div>
          </section>

          {/* Key Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                    <img src={feature.imgSrc} alt={feature.alt} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.description}</h3>
                    <p className="text-color-002/75 leading-relaxed">{feature.description2}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Australian Businesses Choose... Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">Why Australian Businesses Choose an AI Receptionist</h2>
            <ul className="space-y-4 text-lg text-color-002/75 mb-8 list-disc pl-6">
              <li><strong>After-hours coverage:</strong> Capture emergency jobs at night and on weekends without paying penalty rates.</li>
              <li><strong>Focus on the tools:</strong> Never miss a call while under a sink, in a roof space, or driving between sites.</li>
              <li><strong>Cost-effective:</strong> A fraction of the cost of hiring a full-time human receptionist.</li>
              <li><strong>Professional image:</strong> Deliver a consistent, friendly first impression every single time.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/calculator" className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-transparent px-8 text-base font-medium text-color-002 transition-colors hover:bg-black/5">
                Calculate Missed Call Costs
              </Link>
              <Link href="/blog/ai-receptionist-vs-human-receptionist-australia" className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-transparent px-8 text-base font-medium text-color-002 transition-colors hover:bg-black/5">
                AI vs Human Receptionist
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="grid gap-4">
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
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl bg-color-001 p-12 text-center shadow-sm border border-black/5">
            <h2 className="text-3xl font-semibold mb-4 tracking-tight">Ready to stop missing calls?</h2>
            <p className="text-lg text-color-002/75 mb-8 max-w-160 mx-auto">
              Join the trade businesses across Australia using Vectolift to capture every lead and scale their operations.
            </p>
            <Link href="/#hero" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary/90">
              Start Your 7-Day Free Trial
            </Link>
          </section>

        </div>
      </article>
    </LegalShell>
  );
}
