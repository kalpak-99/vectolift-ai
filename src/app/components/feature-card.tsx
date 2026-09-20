import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";

export type FeatureCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  description2: string;
};

/** A feature card matching exact 198px x 114.5px specification. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div
      data-cid={cids[0]}
      className="leading-text flex flex-col items-center gap-2 text-color-002 md:items-start w-[198px] h-[114.5px] shrink-0 max-md:w-full max-md:h-auto max-md:flex-row max-md:items-start max-md:gap-4 max-md:p-4 max-md:rounded-xl max-md:bg-color-002/[0.03] max-md:border max-md:border-color-002/[0.06]"
    >
      <div data-cid={cids[2]} className="w-6 h-6 block relative shrink-0 text-color-002 max-md:mt-0.5">
        <img
          data-cid={cids[3]}
          className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-contain align-middle text-clr-0"
          data-component="image"
          alt={d.alt}
          sizes="100vw"
          src={d.imgSrc}
          srcSet={d.srcSet}
        />
      </div>
      <div data-cid={cids[4]} className="flex flex-col items-center md:items-start gap-1 text-color-002 leading-snug max-md:items-start max-md:flex-1 max-md:min-w-0">
        <p data-cid={cids[5]} className="block font-semibold text-left max-md:text-left text-[15px] leading-[1.25rem]">
          {d.description}
        </p>
        <p data-cid={cids[6]} className="block text-[13px] leading-[1.15rem] text-left max-md:text-left opacity-75 max-md:text-[0.8125rem] max-md:leading-[1.25rem]">
          {d.description2}
        </p>
      </div>
    </div>
  );
}
