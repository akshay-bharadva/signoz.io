import React from "react";

export const PlaySVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.867 477.867"
    id={"play-icon"}
  >
    <path d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm100.624 246.546a17.068 17.068 0 01-7.662 7.662v.085L195.362 322.56c-8.432 4.213-18.682.794-22.896-7.638a17.061 17.061 0 01-1.8-7.722V170.667c-.004-9.426 7.633-17.07 17.059-17.075a17.068 17.068 0 017.637 1.8l136.533 68.267c8.436 4.204 11.867 14.451 7.662 22.887z" />
  </svg>
);

export const RightSVG = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.7711 1.70873L19.7679 1.7061C19.9108 1.52593 20 1.29945 20 1.04965C20 0.469895 19.5392 0 18.9706 0C18.6333 0 18.3362 0.167852 18.1484 0.423562L18.1466 0.422084L7.16027 10.7353L2.13944 8.09518C2.11222 8.07941 2.08419 8.06529 2.05585 8.05116L2.02959 8.0372L2.0196 8.03326C1.97708 8.01372 1.93343 7.99647 1.88897 7.9812L1.87238 7.97463V7.97512C1.73401 7.92963 1.58679 7.90466 1.43359 7.90466C0.641748 7.90466 0 8.55913 0 9.3664C0 9.82019 0.202796 10.2255 0.520927 10.4937L0.521088 10.4939C0.521249 10.494 0.521572 10.4944 0.522055 10.4945L5.92266 15.088C6.02591 15.1945 6.13883 15.2911 6.26076 15.3754L6.26189 15.3765C6.61932 15.6232 7.05019 15.7676 7.51441 15.7676C8.13006 15.7676 8.68752 15.5138 9.09184 15.1036L9.09667 15.1083L9.16496 15.0226C9.2252 14.9554 9.28158 14.8851 9.33377 14.8107L19.7711 1.70873Z"
      fill="#169E00"
    />
  </svg>
);
export const WrongSVG = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M0 18.26H18V0.26H0V18.26Z" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_110_129" transform="scale(0.00625)" />
      </pattern>
      <image
        id="image0_110_129"
        width="160"
        height="160"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
