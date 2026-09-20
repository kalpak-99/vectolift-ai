import { routeMetadata } from "../lib/site";
import HomePage from "./home-page";

export const metadata = routeMetadata(
  "/",
  "Vectolift - Never Miss Another Call",
  "Your AI receptionist answers every call, books jobs, and sounds like your best team member — 24/7, without missing a beat. Built for Australian home service businesses.",
);

export default function Page() {
  return <HomePage />;
}
