import * as React from "react";
import type { SVGProps } from "react";
const SvgCarParking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 49 49"
    {...props}
  >
    <g fill="#fff" clipPath="url(#car-parking_svg__a)">
      <path d="M2.863 46.137V19.372h2.75v3.383h22.755V0H5.613v3.382h-2.75V0H0v49h24.894a7.93 7.93 0 0 1-1.522-2.863H2.863Zm9-41.773h6.19a4.596 4.596 0 0 1 4.59 4.591 4.596 4.596 0 0 1-4.59 4.591h-3.319v4.976h-2.87V4.364Zm-9 1.882h2.75v10.263h-2.75V6.246ZM25.928 43.931A5.074 5.074 0 0 0 30.997 49a5.074 5.074 0 0 0 5.068-5.069 5.074 5.074 0 0 0-5.068-5.068 5.074 5.074 0 0 0-5.07 5.068Z" />
      <path d="M38.82 42.584H49V30.069H28.079l-10.782 4.405h3.792v2.87H17.29v5.24h5.883c.642-3.739 3.904-6.592 7.823-6.592 3.918 0 7.18 2.854 7.823 6.592ZM49 27.198v-7.306H36.46l-5.717 7.306H49ZM49 49v-2.863H38.621A7.93 7.93 0 0 1 37.1 49H49ZM19.773 8.955c0-.948-.772-1.72-1.72-1.72h-3.319v3.44h3.319c.948 0 1.72-.772 1.72-1.72Z" />
    </g>
    <defs>
      <clipPath id="car-parking_svg__a">
        <path fill="#fff" d="M0 0h49v49H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarParking;
