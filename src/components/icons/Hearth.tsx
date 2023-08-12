import * as React from "react";
import type { SVGProps } from "react";
const SvgHearth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 350 298"
    {...props}
  >
    <path
      fill="url(#hearth_svg__a)"
      d="M0 0h350v298H0z"
      style={{ mixBlendMode: "exclusion" }}
    />
    <defs>
      <pattern
        id="hearth_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#hearth_svg__b"
          transform="matrix(.00063 0 0 .00073 0 -.245)"
        />
      </pattern>
      <image
        id="hearth_svg__b"
        width={1600}
        height={1600}
      />
    </defs>
  </svg>
);
export default SvgHearth;