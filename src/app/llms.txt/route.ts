import { getAllPosts } from "../../lib/blog-data";
import { SITE_ORIGIN } from "../../lib/site";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts()
    .map((post) => `- [${post.title}](${SITE_ORIGIN}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");

  const llmsText = `# Vectolift: AI Receptionist for Service Businesses

> Vectolift is an AI receptionist service for home service and trade businesses. It answers calls 24/7, captures lead details, detects urgent requests, books appointments, and helps teams recover revenue that would otherwise be lost to missed calls and voicemails.

## Core Features

- 24/7 AI call answering for busy or after-hours phone traffic
- Natural voice conversations designed for customer-facing reception
- Lead capture for name, business, email, phone, service need, and location
- Appointment booking support for service businesses
- Emergency detection and escalation for urgent jobs
- Missed call revenue calculator
- Contact form for new AI receptionist inquiries
- Privacy and terms pages for website visitors

## Pages

- [Home](${SITE_ORIGIN}/): Vectolift overview, benefits, customer examples, and contact call-to-action
- [Calculator](${SITE_ORIGIN}/calculator): Interactive missed-call revenue calculator
- [FAQ](${SITE_ORIGIN}/faq): Common questions about Vectolift and AI receptionists
- [Blog](${SITE_ORIGIN}/blog): AI receptionist insights and guides for trade businesses
${posts}
- [Privacy Policy](${SITE_ORIGIN}/privacy): Website and service privacy information
- [Terms and Conditions](${SITE_ORIGIN}/terms-and-conditions): Legal terms for using Vectolift

All canonical URLs use the https://www.vectolift.com host.

## Best For

- Plumbing, electrical, HVAC, cleaning, pest control, landscaping, and repair businesses
- Teams that receive calls while technicians are on-site or unavailable
- Businesses that want after-hours answering without hiring a full-time receptionist
- Operators who need more calls answered, more leads captured, and more jobs booked

## Contact

Use the Contact Us buttons on the website to reserve an AI agent or send an inquiry.
`;

  return new Response(llmsText, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
