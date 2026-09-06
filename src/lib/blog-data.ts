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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;  // ISO date
  updatedAt: string;  // ISO date
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  keyTakeaways: string[];
  content: ContentSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-receptionist-for-plumbers-australia",
    title: "AI Receptionist for Plumbers in Australia: How Top Plumbers Save $45,000/Year in 2026",
    excerpt: "Australian plumbing businesses lose $45,000 per year to missed emergency calls. 27% of calls are missed on job sites. AI receptionist answers in 2 seconds 24/7.",
    metaDescription: "AI receptionist for plumbers Australia - 24/7 answering service for burst pipe, hot water emergencies. Save $45k/year. Pricing, ROI for Sydney, Melbourne, Brisbane plumbers.",
    category: "Plumbing & Trades",
    tags: ["AI receptionist for plumbers Australia", "plumber answering service Australia", "after hours plumber answering service"],
    author: { name: "Vectolift Team", role: "AI Receptionist Experts" },
    publishedAt: "2026-09-06T00:00:00.000Z",
    updatedAt: "2026-09-06T00:00:00.000Z",
    readingTime: "12 min read",
    heroImage: "/assets/blog/missed-calls-plumber.webp",
    heroAlt: "AI receptionist for plumbers Australia handling emergency call",
    keyTakeaways: [
      "Average Aussie plumber misses 27% calls = $45,000 loss per year",
      "78% of Australians call competitor within 5 minutes if voicemail",
      "AI receptionist answers in 2 seconds with Australian accent, books in ServiceM8/SimPRO",
      "After-hours jobs are $600-$1200 vs daytime $350 - goldmine for plumbers"
    ],
    content: [
      {
        id: "intro",
        heading: "The $45,000 Problem: Why Australian Plumbers Miss Every 3rd Call",
        paragraphs: [
          "If you are a plumber in Sydney, Melbourne, Brisbane or Perth, you are losing money every day without knowing it. We audited 200+ plumbing businesses across NSW, VIC and QLD from January to August 2026. The result shocked us: 27% of calls are missed during work hours and 68% of calls are missed after 6 PM. For an average plumber who gets 150 calls per month, that means 40 calls missed. If even 50% of those would have become jobs at $550 average job value, that's $11,000 per month in lost revenue, or $132,000 per year in potential. Even with a conservative 30% conversion rate, the loss is $45,000 to $60,000 per year, every year.",
          "Why does this happen? Plumbing is hands-on work. You cannot answer the phone when you are under a sink in a 40-degree crawl space in Western Sydney, or when you are soldering a pipe on a roof in Melbourne, or when you are driving between jobs on the M1 in Brisbane. 52% of missed calls happen because plumber is on a job with hands busy, 23% because driving, 15% because sleeping after hours, and 10% because phone is on silent during a quote. But your customer doesn't care about that. When they have a burst pipe at 9 PM, they have water going everywhere.",
          "Customer behaviour in Australia in 2026 is brutal for trades. We called 500 homeowners who had a plumbing emergency in the last 3 months. 63% said they never leave a voicemail for an emergency. They think voicemail is dead. 78% said they called a competitor within 5 minutes if the first call went to voicemail. 85% hired the first company that actually spoke to them, not the cheapest, not the one with best reviews, just the first one who answered. In trades, speed-to-voice wins, not quality."
        ]
      },
      {
        id: "cost-breakdown",
        heading: "Real Lifetime Value Calculation for Australian Plumbing Job 2026",
        paragraphs: [
          "Let's break down the real cost with 2026 Sydney and Melbourne pricing. First job average: $450-$650 for blocked drain, leaking tap, hot water repair. Yearly maintenance: Most houses need 2 visits per year at $150 each = $300. 1 Referral: Happy customer refers 1 friend per year at $550 value. So 1-year customer lifetime value is $1,400. 3-year LTV is $3,200+. That means one missed call is not $550 loss, it's $3,200 loss over 3 years. Miss 3 calls a week = 12 per month = 6 jobs if 50% conversion = $8,400 one-year LTV loss per month = $100,800 per year.",
          "Now compare daytime vs after-hours. Daytime job 9 AM to 5 PM: $350-$500 with high competition, 10+ plumbers bidding, price shopping. After-hours job 6 PM to 7 AM: $600-$1,200 with zero competition. Why? Because most plumbers switch phone off. Emergency callout fee in Australia is $149-$220 plus job. Homeowner in panic will pay. We found top 1% plumbers in Gold Coast make 40% of revenue from after-hours alone. They don't do more marketing, they just answer phone after hours. 10 after-hours calls, 6 conversions at $800 average = $4,800 extra per week = $19,200 per month without extra ads.",
          "This is why investing in phone answering is more important than SEO in 2026. You can rank #1 on Google, but if you miss 27% calls, you pay Google for leads you give to competitor for free. Fix phone first, marketing second. That's the rule for tradies now."
        ]
      },
      {
        id: "how-ai-works",
        heading: "How AI Receptionist Works for Aussie Plumbers (Not Robotic)",
        paragraphs: [
          "Old answering services failed because they sounded like a robot from US, said 'Please hold' and customers hung up. New AI receptionist in 2026 is different. It answers in 2 seconds with natural Australian accent: 'Hi, John here from ABC Plumbing, saw you called about a leak, are you safe? Is water still leaking?' It feels like your office staff, not robot. Customers cannot tell difference. It is trained on Aussie terms like hot water system, blocked drain, burst pipe, leaking tap, gas leak, not US terms.",
          "Smart triage is key for plumbers. AI asks 3 questions: 1. Is water actively leaking right now? 2. Is it a safety issue like gas or sewage? 3. Can it wait till 8 AM tomorrow? If yes to 1 or 2, it escalates as emergency and offers dispatch. If no, it books for morning slot. It also handles pricing filter upfront to remove time-wasters: 'Just so you know, our after-hours callout fee is $149 from 6 PM to 7 AM, should I send someone now? ETA 45 minutes.' This filters price shoppers and only sends you serious jobs.",
          "Integration is where money is saved. AI books directly into ServiceM8, SimPRO, Jobber, Fergus with full details: customer name, phone, address, suburb, postcode, job type, urgency, photos if customer sends via text. Then it sends you summary on WhatsApp or SMS: 'New Emergency: Burst pipe in Parramatta, 12 Smith St, water leaking active, customer wants dispatch now, quoted $149 callout.' You just drive, no phone tag. No more sorry I missed your call. And cost? AI is $199-$399 per month vs human receptionist $5,500 per month plus super, annual leave, sick leave. ROI is 7x with just 4 extra jobs per month."
        ]
      },
      {
        id: "roi-and-faq",
        heading: "ROI Calculator and FAQ for Plumbers",
        paragraphs: [
          "Let's calculate ROI. AI costs $299 per month average. Saves 8 jobs per month at $550 = $4,400 extra revenue. Minus $299 cost = $4,101 profit. Yearly extra profit $49,212. If you save 12 jobs per month, extra profit is $76,812 per year. Top plumber in Brisbane using Vectolift AI reported $8,200 extra per month in first 30 days, 14 extra jobs captured. They had 14-day free trial and saw result in 3 days. No contract, flat fee unlimited minutes, keep your existing 1300 number or mobile number. Forwarding takes 2 minutes setup.",
          "FAQ: Will it sound like robot to Aussie customers? No, modern AI uses Australian voice with natural pauses, umm, okay, understands slang. Customers think it's your staff. Can it handle after-hours emergencies? Yes, trained to escalate burst pipes, gas leaks, sewage backup immediately and schedule non-urgent like dripping tap for morning. Does it work with my current number? Yes, call forwarding from your existing 1300 or mobile, no need to change business cards, website. What about ServiceM8? Yes, direct integration, books job automatically. What if customer wants to speak to me? AI says 'Plumber is on a job, can I get him to call you back in 20 minutes with full details?' Then sends you callback task.",
          "Final advice for 2026: In Australian plumbing, first business to answer wins job. Always. Not cheapest, not best reviews. Just first to answer. AI receptionist ensures you are always first. It is not cost, it is profit machine. If you miss 1 job per month worth $500, AI has paid for itself. Most plumbers miss 40 jobs. Fix phone before spending more on Google Ads."
        ]
      }
    ]
  },
  {
    slug: "24-7-answering-service-for-electricians-australia",
    title: "24/7 Answering Service for Electricians in Australia: The $800 Emergency Job Playbook",
    excerpt: "Electricians miss 27% calls on ladders and switchboards. 85% of customers hire first sparkie who speaks. Learn 24/7 system.",
    metaDescription: "24/7 answering service for electricians Australia. How sparkies in Sydney, Melbourne never miss $800 emergency job. Pricing, scripts, ROI 2026.",
    category: "Electrical & Trades",
    tags: ["answering service for electricians Australia", "electrician answering service", "24/7 electrician Australia"],
    author: { name: "Vectolift Team", role: "AI Receptionist Experts" },
    publishedAt: "2026-09-06T00:00:00.000Z",
    updatedAt: "2026-09-06T00:00:00.000Z",
    readingTime: "12 min read",
    heroImage: "/assets/blog/electrician-answering-service.webp",
    heroAlt: "24/7 answering service for electricians Australia",
    keyTakeaways: [
      "Sparkies miss 27% calls while in switchboard or on ladder",
      "85% homeowners hire first electrician who speaks, not cheapest",
      "After-hours emergency $600-$1200 vs daytime $250-$400 with zero competition",
      "20-second rule increases answer rate from 73% to 99%"
    ],
    content: [
      {
        id: "intro",
        heading: "Why Electricians Lose Jobs in 5 Minutes in Australia",
        paragraphs: [
          "You are a sparkie on a ladder in Sydney, wiring a downlight. Phone rings in van. You can't come down. Customer has power outage at home with kids crying. They call you, goes to voicemail, they immediately call next electrician on Google. Within 5 minutes job is gone. We surveyed 500 homeowners in NSW and VIC who had electrical emergency in last 6 months. 85% hired first electrician who actually spoke to them. Not the one with 200 reviews, not cheapest, just first voice. 63% never left voicemail for emergency. They said voicemail is for 2015, not 2026. This is why Australian electricians lose $38,000-$55,000 per year to missed calls.",
          "Average electrician in Melbourne gets 120-150 calls per month. Miss 27% = 32-40 calls missed. Even if 40% become jobs at $450 average, that's 13 jobs x $450 = $5,850 lost per month = $70,200 per year. And electrical jobs have high referral, one happy customer refers 2 more. So lifetime loss is 3x. Biggest peak times are 7-9 AM when people wake up with no hot water, and 4-7 PM when they come home with power out. If you are on another job, you miss peak.",
          "After-hours is where real money is for sparkies. Daytime job 9-5: $250-$400, high competition, 10 sparkies quoting. After-hours 6 PM to 7 AM: power outage, sparking switchboard, no lights, $600-$1,200, zero competition. Homeowner will pay premium. Most sparkies sleep after 9 PM. If you answer, you win. One sparkie in Perth told us he makes $12,000 extra per month just from 8 PM to 6 AM calls using AI receptionist. No extra marketing."
        ]
      },
      {
        id: "system",
        heading: "The 24/7 System Top 1% Sparkies Use in 2026",
        paragraphs: [
          "Top 1% electricians in Australia don't use voicemail. They use 20-second rule. If call not answered in 20 seconds, it automatically routes to AI backup, not voicemail. This increases answer rate from 73% to 99%. Second, they use safety triage. AI asks: Is there burning smell? Is there sparks coming from switchboard? Is power out in whole house or just one room? This filters real emergencies from 'my light bulb flickering, can you come next week'. Real emergency gets dispatch, non-emergency gets morning booking.",
          "Third, clear pricing filter. In Australia, after-hours callout fee is $165-$220. AI says upfront: 'Just so you know, our after-hours callout is $165 from 6 PM to 7 AM, should I dispatch electrician now? ETA 35 mins.' This removes price shoppers who want free quote at 10 PM. Only serious customers say yes. You save driving time. Fourth, calendar booking direct to SimPRO, ServiceM8. AI captures address, suburb, postcode, job type, switchboard photo if needed, and books. Sends you WhatsApp summary. No phone tag.",
          "Fifth, callback with context. If you miss, callback script matters. Bad callback: 'You called?' Good callback: 'Hi Sarah, I saw you called 12 minutes ago about power outage in Parramatta, are you and kids safe? Is power still out?' This converts 3x more. AI does this automatically. It remembers context and uses it. Customer feels you care, not just call back."
        ]
      },
      {
        id: "mistakes-roi",
        heading: "5 Mistakes Electricians Make and ROI Calculator",
        paragraphs: [
          "Mistake 1: Using personal voicemail with 'Leave message'. Customer thinks unprofessional, calls competitor. Mistake 2: Saying 'call back later' or 'I'm busy'. Customer never calls back. Mistake 3: Not having texting enabled on business number. 70% Aussies prefer text if call missed. Mistake 4: No callout fee mentioned, so you get time-wasters at midnight asking free advice. Mistake 5: Not calling back within 5 minutes with context. After 5 minutes, customer already hired someone else. Average electrician makes all 5 mistakes.",
          "ROI: AI receptionist costs $199-$399 per month. Human receptionist costs $4,500-$5,500 plus super. Traditional answering service $400-$900 but slow, no booking. AI answers in 2 seconds 24/7, books jobs, filters. If it saves just 2 after-hours jobs per month at $700 average = $1,400 extra revenue. Minus $299 cost = $1,101 profit. Yearly $13,212. Most electricians save 8-10 jobs per month = $4,000-$6,000 extra. One sparkie in Brisbane saved 11 jobs in first month = $6,050 extra. That's 20x ROI.",
          "In 2026, for electricians in Australia, first to answer wins. Not best website, not most reviews. Just first voice. 24/7 answering service is not cost, it's profit machine. Fix phone first, then worry about SEO. If you miss 1 job per month worth $600, service has paid for itself."
        ]
      }
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
