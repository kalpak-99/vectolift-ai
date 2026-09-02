import Link from "next/link";
import Illustration4 from "../svgs/svg-illustration4";
import SocialLinks from "./social-links";

export default function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={`bg-color-002 text-color-001 w-full [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif] ${className}`}>
      <div className="mx-auto flex w-full max-w-288 flex-col gap-8 px-6 md:px-8 py-16 max-lg:py-12">
        {/* Top: Logo & Navigation Columns */}
        <div className="flex items-start justify-between gap-12 max-md:flex-col max-md:gap-8">
          <Link href="/" className="shrink-0 flex items-center hover:opacity-90 transition-opacity" aria-label="Vectolift home">
            <Illustration4 cid="site-footer-logo" />
          </Link>

          <div className="grid grid-cols-3 gap-12 md:gap-16 text-xs font-medium max-md:grid-cols-2 max-md:gap-x-10 max-md:gap-y-8 max-sm:grid-cols-1">
            {/* Company */}
            <div className="flex flex-col gap-3.5">
              <p className="text-primary [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase text-xs font-medium tracking-[1.2px]">
                Company
              </p>
              <Link className="text-color-001/80 hover:text-primary transition-colors text-[13px]" href="/#customers">
                Customers
              </Link>
              <a className="text-color-001/80 hover:text-primary transition-colors text-[13px]" href="mailto:vectolift@gmail.com">
                Contact
              </a>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3.5">
              <p className="text-primary [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase text-xs font-medium tracking-[1.2px]">
                Resources
              </p>
              <Link className="text-color-001/80 hover:text-primary transition-colors text-[13px]" href="/blog">
                Blog
              </Link>
              <Link className="text-color-001/80 hover:text-primary transition-colors text-[13px]" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-color-001/80 hover:text-primary transition-colors text-[13px]" href="/faq">
                FAQ
              </Link>
              <Link className="text-color-001/80 hover:text-primary transition-colors text-[13px]" href="/terms-and-conditions">
                Terms and Conditions
              </Link>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3.5 col-span-2 md:col-span-1 max-sm:col-span-1">
              <p className="text-primary [font-family:foundryGridnik,_'foundryGridnik_Fallback'] uppercase text-xs font-medium tracking-[1.2px]">
                Social
              </p>
              <div className="flex items-center gap-3 pt-1">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom: Copyright & Legal */}
        <div className="flex items-center justify-between gap-6 text-xs text-color-001/70 max-md:flex-col max-md:items-start max-md:gap-4">
          <p className="[font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-xs">
            © 2026 Vectolift. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link className="hover:text-primary transition-colors [font-family:foundryGridnik,_'foundryGridnik_Fallback']" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary transition-colors [font-family:foundryGridnik,_'foundryGridnik_Fallback']" href="/terms-and-conditions">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
