import type { ReactNode } from "react";
import { routeMetadata } from "../../lib/site";

export const metadata = routeMetadata(
  "/calculator",
  "Missed Call Revenue Calculator | Vectolift",
  "Estimate how much missed calls cost your trade business each year, then see what a 24/7 AI receptionist can recover.",
);

export default function CalculatorLayout({ children }: { children: ReactNode }) {
  return children;
}
