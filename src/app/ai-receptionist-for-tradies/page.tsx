import Link from "next/link";
import LegalShell from "../components/legal-shell";
import { absoluteUrl, routeMetadata, SITE_ORIGIN } from "../../lib/site";
import { features } from "../content";

const faqs = [
  {
    question: "Do I need to change my current phone number?",
    answer:
      "No, you can keep your existing business number. You simply set up call forwarding so that when you can't answer, or after a certain number of rings, the call routes to your Vectolift AI receptionist.",
  },
  {
    question: "How does the AI know my pricing and services?",
    answer:
      "During setup, we train the AI on your specific business details, including your service area, pricing structures, emergency call-out fees, and the specific jobs you do or don't take.",
  },
  {
    question: "Can it book jobs directly into my calendar?",
    answer:
      "Yes. Vectolift integrates with Cal.com and Google Calendar. It checks your availability in real-time and books the appointment, preventing any double-bookings.",
  },
  {
    question: "What happens if a customer has a genuine emergency?",
    answer:
      "The AI is programmed to detect emergencies such as burst pipes, gas leaks, or dangerous electrical faults. When an emergency is detected, it will immediately escalate the call by sending you an urgent SMS notification.",
  },
  {
    question: "Is the Australian accent realistic?",
    answer:
      "Yes, we use advanced voice technology from ElevenLabs to provide a natural-sounding Australian accent. It sounds friendly, professional, and local.",
  },
];

export const metadata = routeMetadata(
  "/ai-receptionist-for-tradies",
  "AI Receptionist for Tradies — Never Miss a Job Call Again | Vectolift",
  "Built for Australian tradies: AI receptionist that answers calls 24/7, books jobs, detects emergencies, and speaks with a natural Aussie accent. Stop losing work to missed calls."
);

export default function AIReceptionistForTradiesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
    url: absoluteUrl("/ai-receptionist-for-tradies"),
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
        name: "AI Receptionist for Tradies",
        item: absoluteUrl("/ai-receptionist-for-tradies"),
      },
    ],
  };

  return (
    <LegalShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <article className="px-18 py-20 max-lg:px-6">
        <div className="mx-auto max-w-232">
          
          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="mt-4 text-[4rem] font-semibold leading-[1.05] tracking-[-2px] max-md:text-[2.5rem]">
              Your AI Receptionist. Built for Tradies.
            </h1>
            <h2 className="mt-6 text-2xl font-medium text-color-002">
              You can't answer the phone when you're under a sink, on a roof, or on the tools.
            </h2>
            <div className="mt-8 grid gap-4 text-lg leading-7 text-color-002/75 max-w-176">
              <p>
                Every missed call is a missed job. Let Vectolift answer your calls instantly with a natural Australian accent, 24/7.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#hero" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary/90">
                Start Your 7-Day Free Trial
              </Link>
              <Link href="/calculator" className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-transparent px-8 text-base font-medium text-color-002 transition-colors hover:bg-black/5">
                Calculate Missed Call Costs
              </Link>
            </div>
          </section>

          {/* The Missed Call Problem Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">The Missed Call Problem for Tradies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-lg text-color-002/75 space-y-4">
                <p>
                  As a tradie, you are constantly on the move. You're up a ladder, underneath a house, dealing with a complex fault, or driving between jobs. Answering the phone just isn't always possible.
                </p>
                <p>
                  But when a customer has a blocked drain or no hot water, they won't leave a voicemail. They will simply call the next business on their Google search list until someone answers.
                </p>
                <p>
                  Furthermore, after-hours jobs are often the most profitable, but they are also the hardest calls to answer when you're trying to spend time with family or getting some rest.
                </p>
              </div>
              <div className="rounded-2xl bg-color-001 p-8 border border-black/5 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">How much are missed calls costing you?</h3>
                <p className="mb-6 text-color-002/75">
                  Even missing just one job a week can cost your business tens of thousands of dollars a year in lost revenue.
                </p>
                <div>
                  <Link href="/calculator" className="text-primary font-medium hover:underline">
                    Use our free calculator to find out &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* How Vectolift Works for Trade Businesses Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">How Vectolift Works for Trade Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-black/10 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Answers in Seconds</h3>
                <p className="text-color-002/75">Picks up every call instantly with a friendly, natural Australian accent.</p>
              </div>
              <div className="p-6 border border-black/10 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Understands Trades</h3>
                <p className="text-color-002/75">Trained to understand local trade terminology, pricing, and service areas.</p>
              </div>
              <div className="p-6 border border-black/10 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Detects Emergencies</h3>
                <p className="text-color-002/75">Identifies urgent issues (burst pipes, sparks) and escalates them immediately via SMS.</p>
              </div>
              <div className="p-6 border border-black/10 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Books Your Calendar</h3>
                <p className="text-color-002/75">Schedules jobs directly into Google Calendar or Cal.com without double-booking.</p>
              </div>
              <div className="p-6 border border-black/10 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Instant SMS Summaries</h3>
                <p className="text-color-002/75">Sends you a text with the caller's name, issue, and address right after the call.</p>
              </div>
            </div>
          </section>

          {/* Trade-Specific Use Cases Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">Built for Your Trade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group border border-black/10 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Plumbers</h3>
                <p className="text-color-002/75 mb-4">Capture emergency blockages and burst pipes at 2 AM without having to wake up for tire-kickers.</p>
                <Link href="/blog/ai-receptionist-for-plumbers-australia" className="text-primary font-medium group-hover:underline">Learn more about plumbing &rarr;</Link>
              </div>
              <div className="group border border-black/10 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Electricians</h3>
                <p className="text-color-002/75 mb-4">Ensure safety by having the AI identify dangerous faults and schedule routine wiring jobs automatically.</p>
                <Link href="/blog/24-7-answering-service-for-electricians-australia" className="text-primary font-medium group-hover:underline">Learn more about electrical &rarr;</Link>
              </div>
              <div className="group border border-black/10 p-8 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3">HVAC / Air Con</h3>
                <p className="text-color-002/75 mb-4">Handle the massive spike in calls during summer heatwaves without getting overwhelmed.</p>
                <Link href="/blog/ai-receptionist-for-hvac-air-conditioning-australia" className="text-primary font-medium group-hover:underline">Learn more about HVAC &rarr;</Link>
              </div>
              <div className="border border-black/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">Other Services</h3>
                <p className="text-color-002/75">Perfect for pest control, landscaping, locksmiths, cleaners, and property maintenance teams.</p>
              </div>
            </div>
          </section>

          {/* Cost Comparison Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 tracking-tight">The Cost: AI vs Human Receptionist</h2>
            <div className="bg-color-001 rounded-xl p-8 border border-black/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Human Receptionist</h3>
                  <ul className="list-disc pl-5 text-color-002/75 space-y-2">
                    <li>~$60,000+ per year salary</li>
                    <li>Only works 9 AM - 5 PM</li>
                    <li>Takes sick leave and holidays</li>
                    <li>Can only handle one call at a time</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Vectolift AI Receptionist</h3>
                  <ul className="list-disc pl-5 text-color-002/75 space-y-2">
                    <li>Flat, affordable monthly fee</li>
                    <li>Works 24/7/365 without breaks</li>
                    <li>Never takes a sick day</li>
                    <li>Handles unlimited simultaneous calls</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-black/10">
                <Link href="/blog/ai-receptionist-vs-human-receptionist-australia" className="text-primary font-medium hover:underline">
                  Read the full comparison
                </Link>
                <span className="text-black/20 hidden md:inline">•</span>
                <Link href="/blog/how-much-does-ai-receptionist-cost-australia" className="text-primary font-medium hover:underline">
                  Detailed pricing breakdown
                </Link>
              </div>
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
          <section className="rounded-2xl bg-primary text-white p-12 text-center shadow-sm">
            <h2 className="text-3xl font-semibold mb-4 tracking-tight">Ready to let AI handle your calls?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-160 mx-auto">
              Focus on the tools. We'll handle the phones. Try Vectolift free for 7 days.
            </p>
            <Link href="/#hero" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-primary transition-colors hover:bg-gray-100 shadow-sm">
              Start Your 7-Day Free Trial
            </Link>
          </section>

        </div>
      </article>
    </LegalShell>
  );
}
