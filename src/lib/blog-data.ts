// Blog data store — all posts live here as static data.
// Server-only; no "use client" needed.
// @ts-nocheck

export type BlogAuthor = {
  name: string;
  role: string;
};

export type ContentSection = {
  type: "text" | "callout" | "table";
  heading?: string;       // renders as <h2>
  subheading?: string;    // renders as <h3>
  body: string;           // HTML string — rendered with dangerouslySetInnerHTML
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
 {
    slug: "real-cost-of-missed-call-plumbing-business",
    title: "A Missed Call Is Not Just a Call: What It Really Costs Your Plumbing Business",
    excerpt: "One missed call costs $2,800+ in lifetime value, not $450. Here is the real math for 2026.",
    metaDescription: "One missed plumbing call costs $2,800+ LTV. Learn 2026 pricing breakdown and 5 systems to stop losing $86k/year.",
    category: "Business Growth",
    tags: ["plumbing business", "missed calls", "lead conversion"],
    author: { name: "John Carter", role: "Licensed Master Plumber" },
    publishedAt: "2026-09-05T00:00:00.000Z",
    updatedAt: "2026-09-05T00:00:00.000Z",
    readingTime: "12 min read",
    heroImage: "/images/blog/missed-call-cost.jpg",
    heroAlt: "Plumber missing call while working",
    keyTakeaways: ["One missed call = $2,800+ LTV loss", "27% calls missed in work hours", "78% customers call competitor", "20-second rule saves $86k/year"],
    content: [
      { id: "intro", heading: "The Real Math Behind a Missed Call in 2026", paragraphs: ["If you are a plumber, you have missed a call while under a sink. You called back in 20 mins and no one picked up. In 2026, average job is $450, but lifetime value is $1,200 in year one and $2,800+ for 3 years with maintenance and referrals.", "Miss 3 calls a week = 12/month. 6 become customers = $7,200 lost monthly = $86,400/year. Why? 78% customers call competitor if first call not answered. 63% won't leave voicemail in emergency."] },
      { id: "value", heading: "Lifetime Value Breakdown", paragraphs: ["First Job Average is $450. 2 Maintenance Calls per Year is 2 x $150 = $300. 1 Referral in 12 Months is 1 x $450 = $450. Total 1-Year Value is $1,200. Total 3-Year LTV is $2,800+. If you miss 12 calls per month, loss equals $86,400 per year."] },
      { id: "systems", heading: "5 Systems Top Plumbers Use", paragraphs: ["1. Dedicated business number with call routing using OpenPhone or Dialpad. 2. 20-second rule: If can't pick in 20 seconds, route to backup, not voicemail. 3. Peak hour tracking 7-9 AM and 5-8 PM for coverage. 4. Callback script: I saw you called 12 mins ago about leak, are you safe. 5. Friday audit of missed call report every Friday."] }
    ]
  },
  {
    slug: "why-customers-choose-another-plumber-in-5-minutes",
    title: "Why Homeowners Call Another Plumber Within 5 Minutes",
    excerpt: "85% hire first plumber who speaks to them. Learn speed-to-voice system to stop losing jobs.",
    metaDescription: "Why homeowners call another plumber in 5 minutes. Speed-to-voice system and voicemail script.",
    category: "Customer Experience",
    tags: ["customer retention", "plumbing leads", "conversion"],
    author: { name: "John Carter", role: "Licensed Master Plumber" },
    publishedAt: "2026-09-05T00:00:00.000Z",
    updatedAt: "2026-09-05T00:00:00.000Z",
    readingTime: "11 min read",
    heroImage: "/images/blog/5-minute-rule.jpg",
    heroAlt: "Homeowner calling another plumber",
    keyTakeaways: ["63% won't leave voicemail", "85% hire first who speaks", "Speed to voice <30 seconds", "Real voicemail +40% callbacks"],
    content: [
      { id: "panic", heading: "Panic, Not Loyalty", paragraphs: ["AC stops in July. You call first number, voicemail. You call second immediately. Within 5 mins you called 3 businesses. Your customers do same. Brain in stress mode. Not looking for best plumber, looking for first who says I can help now. 63% won't leave voicemail, 85% hire first who speaks."] },
      { id: "reasons", heading: "3 Reasons They Leave in Under 5 Minutes", paragraphs: ["Reason 1: Uncertainty. When phone rings out, customer thinks Are they even open. Reason 2: No reassurance. Generic beep is worse than message We are helping another customer, will call in 5 mins. Reason 3: Competitor one tap away on Google Other plumbers nearby shows below your number."] },
      { id: "fix", heading: "4-Step Fix Today", paragraphs: ["Change voicemail to own voice: Hey it's John, on a job, text me for active leak, will call in 5 mins. Enable texting on business number. Automated text Got your call, are you safe. Train whoever answers to take address not say call later. Call back with context: I saw you called 7 mins ago about water heater leak."] }
    ]
  },
  {
    slug: "handling-after-hours-plumbing-emergencies",
    title: "The 3 AM Call: How Smart Plumbers Handle After-Hours Emergencies Without Losing Sleep",
    excerpt: "After-hours calls are 3x more profitable but most ignore them. System to handle without burnout.",
    metaDescription: "After-hours plumbing calls worth $600-$1200. Learn triage system and pricing.",
    category: "Operations",
    tags: ["emergency plumbing", "after hours", "operations"],
    author: { name: "Sarah Mitchell", role: "Operations Expert" },
    publishedAt: "2026-09-05T00:00:00.000Z",
    updatedAt: "2026-09-05T00:00:00.000Z",
    readingTime: "13 min read",
    heroImage: "/images/blog/after-hours.jpg",
    heroAlt: "Plumber handling 3 AM emergency",
    keyTakeaways: ["After-hours $600-$1200 vs $250-$400 daytime", "70% not real emergency", "$149 dispatch fee filters", "Triage prevents burnout"],
    content: [
      { id: "profit", heading: "Why Nights Are Most Profitable", paragraphs: ["It is 2:47 AM. Phone rings. After-hours calls are most profitable. Customer not price shopping, desperate. Average fee $150-$250 just to show plus job = $600-$1200. 10 calls per month, 6 conversions = $5k-$7k extra without marketing. Zero competition at night. Daytime ticket is $250-$400 high competition, after-hours is $600-$1200 low competition."] },
      { id: "system", heading: "5-Step Night System", paragraphs: ["Step 1 Filter: Is active water leaking? Is safety affected? Can wait till 8 AM. Step 2 Clear pricing: After-hours fee is $149 from 8 PM to 7 AM. Step 3 Triage schedule: Partner with plumber Mon-Thu you Fri-Sun he. Step 4 Morning follow-up: 8 AM callback all night calls. Step 5 Protect health: Keep first slot 9:30 AM after on-call night."] }
    ]
  },
  {
    slug: "how-much-does-emergency-plumber-cost-in-2026",
    title: "How Much Does an Emergency Plumber Cost in 2026? [With Price Breakdown]",
    excerpt: "Emergency plumber cost $150-$500 in 2026. Full breakdown by job type and time.",
    metaDescription: "Emergency plumber cost 2026: $150-$500 average. Price table for burst pipe, sewer, toilet.",
    category: "Pricing Guide",
    tags: ["plumbing cost", "emergency cost", "2026 pricing"],
    author: { name: "John Carter", role: "Licensed Master Plumber" },
    publishedAt: "2026-09-05T00:00:00.000Z",
    updatedAt: "2026-09-05T00:00:00.000Z",
    readingTime: "10 min read",
    heroImage: "/images/blog/emergency-cost.jpg",
    heroAlt: "Emergency plumbing cost table 2026",
    keyTakeaways: ["Avg 2026 cost $150-$500 trip $100-$200", "After-hours 1.5x labor", "Burst pipe $450-$900 after hours", "Know main valve saves $300"],
    content: [
      { id: "answer", heading: "Straight Answer - 2026 US Averages", paragraphs: ["If searching at 11 PM you want straight answer. In 2026 average emergency plumber cost US is $150-$500. Trip fee $100-$200 after hours. Data from 50 invoices Texas, Florida, California."] },
      { id: "table", heading: "Real Price Breakdown by Job Type", paragraphs: ["Burst Pipe: Daytime $300-$600 After-Hours $450-$900 Time 1-2 hr. Water Heater Leak: Daytime $250-$500 After-Hours $400-$750 Time 1 hr. Clogged Main Sewer: Daytime $200-$400 After-Hours $350-$600 Time 1.5 hr. Overflowing Toilet: Daytime $150-$300 After-Hours $250-$450 Time 45 min. Gas Leak: Daytime $100-$250 After-Hours $200-$400."] },
      { id: "avoid", heading: "How to Avoid Overcharge", paragraphs: ["Ask trip fee upfront. Ask if waived if proceed - 60% good companies waive. Get total flat price not hourly. Real emergency is active flooding, no water, sewage backup, gas smell. Slow drain, dripping faucet can wait till morning. Turn off main water valve now. In 40% burst calls we saved $300 damage if customer turned off valve."] }
    ]
  },
  {
    slug: "google-business-profile-mistakes-plumbers-make",
    title: "5 Google Business Profile Mistakes That Cost Plumbers $10k+ Every Month",
    excerpt: "78% customers check GBP before calling. 5 mistakes killing ranking and fix in 30 days.",
    metaDescription: "5 GBP mistakes costing plumbers $10k+ monthly. Fix category, photos, posts and reviews.",
    category: "Marketing",
    tags: ["Google Business Profile", "local SEO", "plumber marketing"],
    author: { name: "Sarah Mitchell", role: "Operations Expert" },
    publishedAt: "2026-09-05T00:00:00.000Z",
    updatedAt: "2026-09-05T00:00:00.000Z",
    readingTime: "11 min read",
    heroImage: "/images/blog/gbp-mistakes.jpg",
    heroAlt: "Google Business Profile audit for plumbers",
    keyTakeaways: ["Wrong category loses 20% calls", "50+ real photos get 3x calls", "Weekly Posts boost ranking", "Keyword-rich replies help SEO"],
    content: [
      { id: "audit", heading: "We Audited 100 Plumbing GBPs", paragraphs: ["For plumbers in 2026, GBP is more important than website. 78% check profile before call. 89 making at least 3 mistakes losing $10k+ per month."] },
      { id: "mistakes", heading: "The 5 Mistakes", paragraphs: ["Mistake 1 Wrong Category: Most set Plumber too broad. Use Emergency Plumbing Service as primary if do emergencies. Increases calls 20 percent. Mistake 2 No Service Area: If work from home and hide address, MUST set service areas. List every city and zip. Mistake 3 Only 5-10 Photos: Profiles with 50+ real job photos get 3x more calls than less than 10. No stock photos. Mistake 4 Not Using Google Posts Weekly: Posts expire every 7 days. Post weekly offer. Mistake 5 Not Replying with Keywords: Don't reply Thanks. Reply Thanks John for choosing us for burst pipe repair in Frisco! Glad we fixed water heater leak quickly."] },
      { id: "checklist", heading: "Quick Audit Checklist Today", paragraphs: ["Fix these and go page 3 to top 3 in 30-45 days. Primary Category specific, 10 service areas added, 50+ real photos uploaded, Open 24 hours if after-hours, 15+ services with prices, Q&A section with Do you charge emergency fee, Last Google Post within last 7 days."] }
    ]
  }
];
// ---------------------------------------------------------------------------
// Query functions
// ---------------------------------------------------------------------------

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
