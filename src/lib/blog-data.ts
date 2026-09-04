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
  publishedAt: string;    // ISO date
  updatedAt: string;      // ISO date
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  keyTakeaways: string[];
  content: ContentSection[];
};

// ---------------------------------------------------------------------------
// Posts
// ---------------------------------------------------------------------------

const posts: BlogPost[] = [
 
{
    slug: "real-cost-of-missed-call-plumbing-business",
    title: "A Missed Call Is Not Just a Call: What It Really Costs Your Plumbing Business",
    excerpt: "Most plumbers think a missed call is just a missed call. When you calculate lifetime value, one missed call can cost you over $2,000.",
    author: "Vectolift Team",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Business Growth",
    content: `If you are a plumber, you have probably missed a call while you were under a sink, driving, or eating dinner. You called back 20 minutes later and no one picked up. You moved on. But that one call was not just a call.

Let's do the real math. An average plumbing job in the US is $350 to $600. Let's take $450 as average. Now, a happy customer does not call you just once. They call you twice a year for maintenance, and they refer at least one friend in the next 12 months. So one new customer is not worth $450. One new customer is worth $450 plus $300 plus $450 = $1,200 in one year alone. If they stay with you for 3 years, that is over $2,500.

So when you miss a call and that person calls the next plumber on Google, you did not lose $450. You lost $2,500.

Now multiply that. If you miss just 3 calls a week, that is 12 calls a month. Even if half of them would have become customers, that is 6 customers x $1,200 = $7,200 lost every month. That is over $86,000 a year just because the phone rang when your hands were busy.

Why do we miss calls? It is not because we are lazy. It is because plumbing is a hands-on job. You cannot answer a phone when you are soldering a pipe in a crawl space. And customers do not wait. Studies show 78% of customers will call a competitor if their first call is not answered. They have a burst pipe. It is an emergency. They will not leave a voicemail.

The second hidden cost is Google ranking. Google tracks how fast businesses respond. If your response rate is slow, your profile starts to show lower. People also leave reviews like "Called multiple times, no answer". One such review can push 10 future customers away.

So what can you actually do? Here are 5 practical things top-rated plumbers do, without hiring a full-time receptionist for $3,500 a month.

1. Use a dedicated business number with call routing. Keep your personal number personal. This helps you track how many calls you actually get.

2. Set up a 20-second rule. If you cannot pick up in 20 seconds, your call should go to a backup, not voicemail. Voicemail is dead for emergency services.

3. Record your peak hours. Most plumbing calls come between 7 AM to 9 AM and 5 PM to 8 PM. That is when you are either starting a job or driving home. Plan coverage for those 4 hours.

4. Create a quick callback script. Instead of "Sorry I missed your call", say "Hi, this is Mike from ABC Plumbing, I saw you called 12 minutes ago about a leak, are you safe, is water still leaking?" This shows you care about the emergency, not just the sale.

5. Track your missed calls every Friday. Most phone apps show you this. Just look at how many you missed. When you see the number in front of you, you will take it seriously.

You do not need to be available 24/7 yourself. You just need a system that makes sure no call goes to voicemail in the first 5 minutes. Whether it is a family member, a part-time answering help, or an AI receptionist, the goal is simple: every customer should hear a human voice in the first 30 seconds.

Because in plumbing, the first business to answer the phone wins the job. Always.`,
  },
  {
    slug: "why-customers-choose-another-plumber-in-5-minutes",
    title: "Why Homeowners Call Another Plumber Within 5 Minutes",
    excerpt: "Customers don't have loyalty during an emergency. Learn why they leave and how to become the plumber they stay with.",
    author: "Vectolift Team",
    date: "2024-12-12",
    readTime: "7 min read",
    category: "Customer Experience",
    content: `Think about your own behavior. Your AC stops working in July. You Google "AC repair near me". You call the first number. It rings 4 times, goes to voicemail. What do you do? Do you wait? No. You immediately hit back and call the second number. Within 5 minutes, you have called 3 businesses.

Your customers do the exact same thing. It is not personal. It is panic.

When a homeowner has water leaking into their living room, their brain is in stress mode. They are not looking for the best plumber. They are looking for the first plumber who says "I can help you right now". Research shows that 63% of customers will not leave a voicemail if it is an emergency call. And 85% of them will hire the first company that actually speaks to them.

So the game is not about being the cheapest or having 200 five-star reviews. The game is about speed to voice.

Here are the three reasons they leave you in under 5 minutes.

Reason 1: Uncertainty. When your phone rings out, the customer thinks "Are they even open? Are they still in business?" They do not know you are stuck in traffic. They just feel ignored.

Reason 2: No reassurance. Even a simple "Thanks for calling ABC Plumbing, we are helping another customer, we will call you back in 5 minutes" message is better than a generic voicemail beep. People need to hear that their emergency is acknowledged.

Reason 3: Competitor is one tap away. On mobile, Google shows your competitors right below your number. It literally says "Other plumbers nearby". So not answering is like pushing them to your competitor.

How do you fix this without staying glued to your phone?

First, change your voicemail. Do not use the default robotic voicemail. Record your own in your voice: "Hey, it's John at ABC Plumbing, I'm on a job right now and can't pick up, but if you have an active leak, text me at this number and I will call you back in under 5 minutes. If you can wait, leave your address and I'll call by 6 PM." When people hear a real human voice and a clear plan, they wait.

Second, enable texting on your business number. A lot of younger homeowners prefer texting. A quick automated text like "Got your call, are you safe? Reply with your address and issue" can save the lead.

Third, train whoever answers. If your wife or technician answers, they should not say "He is busy, call later". They should say "He is finishing a job, can I take your address and what is happening? He will call you on his way to the next job." That one line collects the lead.

Fourth, call back with context. Do not call back and say "You called?". Call back and say "Hi, I saw you called about a water heater leak 7 minutes ago, I just got free, do you still need help?" This makes you sound professional and attentive.

In the end, customers do not leave because you are expensive. They leave because they are scared and no one answered. Solve the speed problem, and you will stop losing jobs in those critical 5 minutes. Your reviews will also improve because people will write "Called and someone actually picked up quickly" which is more powerful than "Good work".

Remember, you are not just fixing pipes. You are fixing a stressful day for a family. The first person to calm that stress wins.`,
  },
  {
    slug: "handling-after-hours-plumbing-emergencies",
    title: "The 3 AM Call: How Smart Plumbers Handle After-Hours Emergencies Without Losing Sleep",
    excerpt: "After-hours calls are 3x more profitable but most plumbers ignore them. Here is a system to handle them without burning out.",
    author: "Vectolift Team",
    date: "2024-12-08",
    readTime: "9 min read",
    category: "Operations",
    content: `It is 2:47 AM. Your phone rings. It is an unknown number. You have two choices. Answer it and deal with a burst pipe half asleep, or ignore it and lose a $800 emergency job.

Most plumbers ignore it. And that is understandable. You cannot work 24 hours. But here is the truth: after-hours calls are the most profitable calls in plumbing. A customer who calls at 2 AM is not price shopping. They are desperate. The average emergency call fee is $150 to $250 just to show up, plus the job. That one call can be worth $600 to $1,200.

If you get just 10 such calls a month and you convert 6, that is an extra $5,000 to $7,000 a month in revenue, without any extra marketing. Your competitors are all sleeping, so you have zero competition.

But how do you handle it without destroying your sleep and family time?

Let's look at what the best plumbing companies in Texas and Florida do. They do not have the owner answering at 3 AM every night. They have a system.

Step 1: Filter real emergencies from non-emergencies. 70% of after-hours calls are not real emergencies. They are "My toilet is running slow, can you come tomorrow?" You do not want to wake up for those. You need a filter that asks three questions: Is there active water leaking? Is it affecting your safety or home? Can it wait until 8 AM? If the answer is no, it can wait.

Step 2: Have a clear pricing boundary. Tell customers upfront: "Our after-hours dispatch fee is $149 from 8 PM to 7 AM, this covers the visit, would you like us to come out?" When you say the fee clearly, non-serious callers drop off, and serious callers respect your time.

Step 3: Use a triage schedule. You do not need to be on call 7 days a week. Partner with one other trusted plumber. You take Monday to Thursday nights, he takes Friday to Sunday. Or you take one week, he takes next week. This way you get the extra income but only lose sleep half the time.

Step 4: Create a morning follow-up list. For calls that can wait, do not just ignore them. At 8 AM, your first job should be to call back everyone from last night. Say "Hi, I saw you called last night about a slow drain, sorry we missed you after hours, can we get you scheduled today at 10 AM?" That customer will be shocked you even called back and will book you.

Step 5: Protect your health. If you do after-hours, do not book your mornings full. Keep your first slot at 9:30 AM instead of 7:30 AM on days you were on call. One extra emergency job at night is not worth doing a bad job the next day because you are exhausted.

There is also a mental side. Many plumbers feel guilty for not answering at night. But remember, you are a business owner, not an emergency room. It is okay to have boundaries. The key is to have a professional boundary, not a silent phone.

An automated text at night that says "We are currently closed, for active water emergencies our emergency fee is $149, reply YES to be dispatched, or reply TOMORROW to be scheduled first thing at 8 AM" is a professional boundary. No answer is not a boundary, it is just a missed opportunity.

Handle your nights smartly, and you will add a whole new revenue stream that your competitors are literally sleeping on. And you will still get your sleep.`,
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
