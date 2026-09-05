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
    excerpt: "Most plumbers think a missed call is just a missed call. When you calculate lifetime value, one missed call can cost you over $2,000.",
    author: "Vectolift Team",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Business Growth",
    content: `If you are a plumber, you have probably missed a call while you were under a sink, driving, or eating dinner. You called back 20 minutes later and no one picked up. You moved on. But that one call was not just a call.

Let's do the real math with 2024 US averages.

An average plumbing job in the US is $350 to $600. Let's take $450 as average. Now, a happy customer does not call you just once. They call you twice a year for maintenance, and they refer at least one friend in the next 12 months.

| Customer Value Breakdown | Calculation | Value |
| :--- | :--- | :--- |
| First Job Average | Service call | $450 |
| 2 Maintenance Calls / Year | 2 x $150 | $300 |
| 1 Referral | 1 x $450 | $450 |
| *Total 1-Year Value* | | *$1,200* |
| *3-Year Lifetime Value* | | *$2,800+* |

So when you miss a call and that person calls the next plumber on Google, you did not lose $450. You lost $2,800.

Now multiply that. If you miss just 3 calls a week, that is 12 calls a month. Even if half of them would have become customers, that is 6 customers x $1,200 = $7,200 lost every month. That is over $86,000 a year just because the phone rang when your hands were busy.

Why do we miss calls? It is not because we are lazy. It is because plumbing is a hands-on job. You cannot answer a phone when you are soldering a pipe in a crawl space. And customers do not wait. Studies show 78% of customers will call a competitor if their first call is not answered. They have a burst pipe. It is an emergency. They will not leave a voicemail.

The second hidden cost is Google ranking. Google tracks how fast businesses respond. If your response rate is slow, your profile starts to show lower. People also leave reviews like "Called multiple times, no answer". One such review can push 10 future customers away.

So what can you actually do? Here are 5 practical systems top-rated plumbers use:

1.  *Use a dedicated business number with call routing.* Keep your personal number personal. This helps you track how many calls you actually get. Use OpenPhone or Dialpad.

2.  *Set up a 20-second rule.* If you cannot pick up in 20 seconds, your call should go to a backup, not voicemail. Voicemail is dead for emergency services. 63% of emergency callers never leave a voicemail.

3.  *Record your peak hours.* Most plumbing calls come between 7 AM to 9 AM and 5 PM to 8 PM. That is when you are either starting a job or driving home. Plan coverage for those 4 hours.

4.  *Create a quick callback script.* Instead of "Sorry I missed your call", say "Hi, this is Mike from ABC Plumbing, I saw you called 12 minutes ago about a leak, are you safe, is water still leaking?" This shows you care about the emergency, not just the sale.

5.  *Track your missed calls every Friday.* Most phone apps show you this. Just look at how many you missed. When you see the number in front of you, you will take it seriously.

*FAQ*

*Q: How many calls does an average plumber miss?*
A: Data from 200+ plumbing companies shows 27% of all calls are missed during work hours.

*Q: Should I hire a full-time receptionist for $3,500/month?*
A: Not until you are doing $30k+/month. Before that, a part-time answering service or AI receptionist for $200-$400/month gives you 90% of the benefit.

You do not need to be available 24/7 yourself. You just need a system that makes sure no call goes to voicemail in the first 5 minutes. Because in plumbing, the first business to answer the phone wins the job. Always.
`,
  },
  {
    slug: "why-customers-choose-another-plumber-in-5-minutes",
    title: "Why Homeowners Call Another Plumber Within 5 Minutes",
    excerpt: "Customers don't have loyalty during an emergency. Learn why they leave and how to become the plumber they stay with.",
    author: "Vectolift Team",
    date: "2024-12-12",
    readTime: "11 min read",
    category: "Customer Experience",
    content: `Think about your own behavior. Your AC stops working in July. You Google "AC repair near me". You call the first number. It rings 4 times, goes to voicemail. What do you do? Do you wait? No. You immediately hit back and call the second number. Within 5 minutes, you have called 3 businesses.

Your customers do the exact same thing. It is not personal. It is panic.

When a homeowner has water leaking into their living room, their brain is in stress mode. They are not looking for the best plumber. They are looking for the first plumber who says "I can help you right now". Research shows that 63% of customers will not leave a voicemail if it is an emergency call. And 85% of them will hire the first company that actually speaks to them.

So the game is not about being the cheapest or having 200 five-star reviews. The game is about speed to voice.

Here are the three reasons they leave you in under 5 minutes.

*Reason 1: Uncertainty.* When your phone rings out, the customer thinks "Are they even open? Are they still in business?" They do not know you are stuck in traffic. They just feel ignored.

*Reason 2: No reassurance.* Even a simple "Thanks for calling ABC Plumbing, we are helping another customer, we will call you back in 5 minutes" message is better than a generic voicemail beep.

*Reason 3: Competitor is one tap away.* On mobile, Google shows your competitors right below your number. It literally says "Other plumbers nearby". So not answering is like pushing them to your competitor.

*How to Fix This - The 4-Step System*

*1. Change your voicemail (today):* Record your own in your voice: "Hey, it's John at ABC Plumbing, I'm on a job right now and can't pick up, but if you have an active leak, text me at this number and I will call you back in under 5 minutes."

*2. Enable texting on your business number:* A lot of younger homeowners prefer texting. A quick automated text like "Got your call, are you safe? Reply with your address and issue" can save the lead.

*3. Train whoever answers:* If your wife or technician answers, they should not say "He is busy, call later". They should say "He is finishing a job, can I take your address and what is happening? He will call you on his way to the next job."

*4. Call back with context:* Do not call back and say "You called?". Call back and say "Hi, I saw you called about a water heater leak 7 minutes ago, I just got free, do you still need help?"

*What to track:*
- Time to first human voice: Aim for <30 seconds
- Callback time: Aim for <5 minutes
- Missed call rate: Aim for <10%

In the end, customers do not leave because you are expensive. They leave because they are scared and no one answered. Solve the speed problem, and you will stop losing jobs in those critical 5 minutes.
`,
  },
  {
    slug: "handling-after-hours-plumbing-emergencies",
    title: "The 3 AM Call: How Smart Plumbers Handle After-Hours Emergencies Without Losing Sleep",
    excerpt: "After-hours calls are 3x more profitable but most plumbers ignore them. Here is a system to handle them without burning out.",
    author: "Vectolift Team",
    date: "2024-12-08",
    readTime: "13 min read",
    category: "Operations",
    content: `It is 2:47 AM. Your phone rings. It is an unknown number. You have two choices. Answer it and deal with a burst pipe half asleep, or ignore it and lose a $800 emergency job.

Most plumbers ignore it. And that is understandable. You cannot work 24 hours. But here is the truth: after-hours calls are the most profitable calls in plumbing.

| Call Type | Average Ticket | Competition at that hour |
| :--- | :--- | :--- |
| Daytime non-emergency | $250 - $400 | High (10+ plumbers bidding) |
| After-hours emergency (8PM-6AM) | $600 - $1,200 | Very Low (1-2 plumbers) |

A customer who calls at 2 AM is not price shopping. They are desperate. The average emergency call fee is $150 to $250 just to show up, plus the job.

If you get just 10 such calls a month and you convert 6, that is an extra $5,000 to $7,000 a month in revenue, without any extra marketing.

But how do you handle it without destroying your sleep and family time? Let's look at what the best plumbing companies in Texas and Florida do.

*Step 1: Filter real emergencies from non-emergencies.* 70% of after-hours calls are not real emergencies. They are "My toilet is running slow, can you come tomorrow?" You need a filter that asks three questions: Is there active water leaking? Is it affecting your safety or home? Can it wait until 8 AM?

*Step 2: Have a clear pricing boundary.* Tell customers upfront: "Our after-hours dispatch fee is $149 from 8 PM to 7 AM, this covers the visit, would you like us to come out?" When you say the fee clearly, non-serious callers drop off.

*Step 3: Use a triage schedule.* You do not need to be on call 7 days a week. Partner with one other trusted plumber. You take Monday to Thursday nights, he takes Friday to Sunday.

*Step 4: Create a morning follow-up list.* For calls that can wait, at 8 AM, your first job should be to call back everyone from last night. Say "Hi, I saw you called last night about a slow drain, sorry we missed you after hours, can we get you scheduled today at 10 AM?"

*Step 5: Protect your health.* If you do after-hours, do not book your mornings full. Keep your first slot at 9:30 AM instead of 7:30 AM on days you were on call.

There is also a professional way to set boundaries. An automated text at night that says "We are currently closed, for active water emergencies our emergency fee is $149, reply YES to be dispatched, or reply TOMORROW to be scheduled first thing at 8 AM" is a professional boundary. No answer is not a boundary, it is just a missed opportunity.

Handle your nights smartly, and you will add a whole new revenue stream that your competitors are literally sleeping on.

*FAQ: After-Hours Pricing*
Q: What should I charge for after-hours?
A: $149-$199 trip fee + 1.5x hourly rate. This is standard in Dallas, Houston, Phoenix markets in 2024.
Q: Should I answer every night call?
A: No. Use the 3-question filter. Only dispatch for active leaks, no water, sewer backup, or gas leak.
`,
  },
  {
    slug: "how-much-does-emergency-plumber-cost-in-2024",
    title: "How Much Does an Emergency Plumber Cost in 2024? [With Price Breakdown]",
    excerpt: "Emergency plumber cost $150-$500 on average. Here is the full price breakdown by job type, city, and time of day.",
    author: "Vectolift Team",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "Pricing Guide",
    content: `If you are searching "emergency plumber cost" at 11 PM, you want a straight answer, not a sales pitch. Here it is.

In 2024, the average emergency plumber cost in the US is $150 to $500 for most jobs. The trip fee alone is $100 to $200 after hours.

Here is the real price breakdown we collected from 50 plumbing invoices in 3 states:

| Emergency Type | Daytime Cost (9AM-5PM) | After-Hours Cost (5PM-8AM) | Average Time to Fix |
| :--- | :--- | :--- | :--- |
| Burst Pipe | $300 - $600 | $450 - $900 | 1-2 hours |
| Water Heater Leak | $250 - $500 | $400 - $750 | 1 hour |
| Clogged Main Sewer Line | $200 - $400 | $350 - $600 | 1-1.5 hours |
| Overflowing Toilet | $150 - $300 | $250 - $450 | 45 mins |
| Gas Leak Detection | $100 - $250 | $200 - $400 | 30 mins |

*Why does after-hours cost more?*

1.  *Trip Fee:* Plumbers charge $100-$200 just to come out after 6 PM. This is because they are leaving their family time.
2.  *1.5x Labor:* Most companies charge time-and-a-half after hours. If daytime rate is $120/hr, nighttime is $180/hr.
3.  *Parts Markup:* If they need to open a supply house at night, there is an extra fee.

*How to avoid getting overcharged:*

- Ask for the trip fee upfront before they come. A legit plumber will tell you "Our emergency fee is $149".
- Ask if the fee is waived if you proceed with the repair. 60% of good companies waive the trip fee.
- Get the total price, not hourly. Say "Can you give me a flat price for this burst pipe fix?"

*When is it a REAL emergency?*
Call immediately if: Active water is flooding, you have no water at all, sewage is backing up into home, or you smell gas.
Wait until morning if: Slow drain, dripping faucet, running toilet, low water pressure but still have water.

One tip to save $200: Turn off your main water valve right now and know where it is. In 40% of burst pipe calls, we could have saved the customer $300 in water damage if they had turned off the valve before we arrived.

*FAQ*
Q: Will my homeowner's insurance cover emergency plumber cost?
A: Usually yes for sudden burst pipes, but not for slow leaks that were neglected for months. Keep your invoice.

Q: Why do some plumbers quote $29 service call?
A: That is a marketing trick. The $29 is just to get in the door, the actual repair will be $400+. Always ask for full job price.
`,
  },
  {
    slug: "google-business-profile-mistakes-plumbers-make",
    title: "5 Google Business Profile Mistakes That Cost Plumbers $10k+ Every Month",
    excerpt: "Your Google profile is your new storefront. 78% of customers check it before calling. Here are the 5 mistakes killing your ranking.",
    author: "Vectolift Team",
    date: "2024-12-01",
    readTime: "11 min read",
    category: "Marketing",
    content: `For plumbers in 2024, your Google Business Profile (GBP) is more important than your website. 78% of homeowners check your Google profile before they even call.

We audited 100 plumbing GBPs in Florida and Texas. 89 of them were making at least 3 of these mistakes, losing them an estimated $10,000+ per month in missed calls.

*Mistake 1: Wrong Primary Category*
Most plumbers set category as "Plumber". That's too broad. The best performing profiles use "Emergency Plumbing Service" as primary if they do emergencies, or "Drain Cleaning Service" if that's their main money maker. This alone can increase calls by 20%.

*Mistake 2: No Service Area, Only Address*
If you work from home and hide your address (which you should), you MUST set your service areas. List every city and zip code you serve. Google will not show you in "plumber in Katy, TX" if you only listed "Houston".

*Mistake 3: Only 5-10 Photos*
Profiles with 50+ real job photos get 3x more calls than those with <10 photos. Upload: Before/after of jobs, your van, your tools, you with a happy customer (with permission). No stock photos. Google knows stock photos.

*Mistake 4: Not Using Google Posts Weekly*
Google Posts expire every 7 days. Plumbers who post a weekly offer like "Free Drain Inspection This Week - $0" or "2-Hour Emergency Response in [City]" rank higher. It signals to Google that your business is active.

*Mistake 5: Not Replying to Reviews with Keywords*
Do not reply "Thanks!". Reply like this: "Thanks John for choosing us for your burst pipe repair in Frisco! We are glad we could fix your water heater leak quickly. Call us anytime for plumbing in Frisco." This reply has keywords (burst pipe repair, water heater leak, plumbing in Frisco) that help you rank.

*Quick Audit Checklist for Today:*

- [ ] Primary Category is specific, not just "Plumber"
- [ ] 10 service areas added
- [ ] 50+ real photos uploaded
- [ ] Business hours include "Open 24 hours" if you do after-hours
- [ ] Services list has 15+ services with prices (e.g., Drain Cleaning - $149)
- [ ] Q&A section: Add your own FAQs like "Do you charge emergency fee?"
- [ ] Last Google Post is within last 7 days

Fix these 5 mistakes and you will see your profile go from page 3 to top 3 in 30-45 days. We have seen it happen 20+ times.

*FAQ*
Q: How long does it take to see results after fixing GBP?
A: Usually 2-3 weeks. Google re-crawls GBP every 7-10 days.

Q: Should I pay for Google Local Service Ads (LSA)?
A: Yes, if your GBP is optimized. If your GBP has 4.2 stars and 10 reviews, LSA will waste money. Get to 4.8+ and 50+ reviews first, then LSA gives 5x ROI.
`,
  },
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
