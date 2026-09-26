import { routeMetadata } from "../lib/site";
import HomePage from "./home-page";

export const metadata = routeMetadata(
  "/",
  "Vectolift — AI Receptionist for Australian Businesses | Never Miss a Call",
  "AI receptionist that answers every call 24/7, books jobs, and detects emergencies — with a natural Australian accent. Built for tradies and home service businesses. Try free for 7 days.",
);

export default function Page() {
  return <HomePage />;
}
