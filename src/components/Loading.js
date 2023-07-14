import React from 'react';

export const WallySpinner = () => (
  <div className="mx-auto" style={{ width: '500px' }}>
    <svg
      className="wally-loader__spinner"
      stroke="#FFF"
      width="120"
      height="120"
      viewBox="0 0 206 206"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="cut-off-bottom">
          <rect x="0" y="0" width="100" height="100" fill="#000" />
        </clipPath>
      </defs>

      <circle
        className="wally-loader__circle"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="103"
        cy="103"
        r="100"
      />
    </svg>

    <svg
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      id="wally-loader"
      className="loader-wally"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>wally</title>
      <defs>
        <circle id="path-1" cx="50" cy="50" r="50" />
      </defs>

      <g id="wally">
        <mask id="mask" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <circle id="bg" cx="50" cy="50" r="50" fill="#EEF8FA" />
        <path
          d="M-25,118.865226 L-25,140.0625 C-25,141.875 -25,145.820074 -23.1764706,149.125 L-18.6176471,156.375 C-16.0170615,158.205078 -20.8158855,164.4799 -9.5,153.65625 L-5.8529412,137.34375 C-4.9411765,123.257736 -2.1443176,114.6875 0.0687042,123.257736 C1.5228826,149.226412 -2.266449,187.96845 -2.1443176,188.909356 C32,197 102.268298,208.134967 102.268298,188.134967 L102.400199,118.865226 C107.907513,98.757002 119.127945,143.854634 124.529412,149.125 C122.143778,145.440594 135.470588,129.1875 126.352941,104.71875 C124.183887,101.769932 118.386391,75.6514602 80.349774,75.4784758 C58.9588586,75.3814752 50.6457783,93.4122692 50.6457783,93.4122692 L25.7928434,73.3363793 C23.5798216,74.0752005 30.8735115,72.2612893 3.1903839,81.0172098 C-24.4927436,89.7747469 -22.6094805,116.234893 -25,118.865226 Z"
          id="wally__shirt"
          fill="#A7992C"
          mask="url(#mask)"
        />
        <g id="wally__face" mask="url(#mask)">
          <g transform="translate(22.000000, 8.000000)">
            <path
              d="M7.1092063,75.5402465 L27.6905795,82.3406293 C27.6905795,82.3406293 52.0500734,71.8231363 52.2703957,65.2432189 C51.5082436,53.6055675 51.1965282,41.8139146 51.0724949,33.5950969 C54.3348979,33.3097888 56.8955335,30.5928778 56.8955335,27.2745504 C56.8955335,23.9189385 54.2712493,21.1825747 50.9533576,20.9491408 C49.9464028,-0.987159303 29.5788238,0.470181357 28.8770563,0.43127571 C26.1744352,0.267547783 7.7212129,-0.834778856 6.79422689,20.9361723 C6.74200232,20.929688 6.68814575,20.9232037 6.63428917,20.9232037 C3.1026032,20.9232037 0.24330846,23.766558 0.24330846,27.2745504 C0.24330846,30.7128369 2.99652206,33.5059381 6.43028697,33.6145497 C6.16916417,41.9095576 5.74810364,53.2505535 5.25686636,61.55853 C4.61711548,68.365397 7.1092063,75.5402465 7.1092063,75.5402465"
              id="wally__head"
              fill="#F5C094"
              fillRule="evenodd"
            />
            <path
              d="M7.9953918,13.0838781 C7.9953918,13.0838781 7.6543001,15.9337167 10.156183,16.2190248 C10.156183,16.2190248 8.1259532,24.1152499 10.6882207,38.4082116 C10.6882207,38.4082116 11.9383462,43.498367 8.7183756,44.6071779 C8.7183756,44.6071779 4.51103434,45.9753598 4.64485978,42.1885435 C4.64485978,42.1885435 4.73462075,40.5788224 5.89172118,36.9703238 C5.89172118,36.9703238 7.2332396,34.1577698 6.63428917,24.355168 C6.63428917,24.355168 0.97934838,15.7245989 7.9953918,13.0838781"
              id="wally__hair--right"
              fill="#966948"
              fillRule="nonzero"
            />
            <path
              d="M49.7042114,13.0838781 C49.7042114,13.0838781 50.1889206,16.2190248 47.2692412,16.2190248 C47.2692412,16.2190248 49.576914,24.1152499 47.0146464,38.4082116 C47.0146464,38.4082116 45.764521,43.498367 48.9844916,44.6071779 C48.9844916,44.6071779 53.1885688,45.9753598 53.0580074,42.1885435 C53.0580074,42.1885435 52.9682464,40.5788224 51.807882,36.9703238 C51.807882,36.9703238 50.1921846,36.432129 51.068578,24.2157561 C51.068578,24.2157561 55.6072188,18.4155727 49.7042114,13.0838781"
              id="wally__hair--left"
              fill="#966948"
              fillRule="nonzero"
            />
            <path
              d="M24.1242948,18.6246906 C24.1242948,18.6246906 19.7472237,15.7245989 15.3685207,19.7643018 C15.3685207,19.7643018 16.0947685,16.1363503 21.2078794,15.7245989 C21.2078794,15.7245989 25.3776843,15.7245989 25.167154,17.7947034 C25.167154,17.7947034 25.0643369,18.7251968 24.1242948,18.6246906"
              id="wally__eyebrow--right"
              fill="#966948"
              fillRule="nonzero"
            />
            <path
              d="M32.048556,16.7630554 C32.048556,16.7630554 36.425627,13.8629637 40.8043301,17.8961823 C40.8043301,17.8961823 40.0748182,14.2747151 34.9649713,13.8629637 C34.9649713,13.8629637 30.7951665,13.8629637 31.0056968,15.9330683 C31.0056968,15.9330683 31.1085139,16.8635617 32.048556,16.7630554"
              id="wally__eyebrow--left"
              fill="#966948"
              fillRule="nonzero"
            />
            <path
              d="M29.2276136,44.9931543 C22.9231299,44.9931543 20.0801553,39.9143464 19.9642821,39.6987443 L19.95449,39.1297492 C20.0605711,39.3194142 23.6852821,43.7514158 29.26515,43.7514158 C29.539329,43.7708686 35.9025654,43.3153483 37.6749364,37.2606571 L37.9997079,38.3386678 C35.9335737,45.3611369 29.2912623,44.9996386 29.2276136,44.9931543"
              id="wally__mouth"
              fill="#E6A274"
              fillRule="evenodd"
            />
            <path
              d="M25.8201242,27.0655947 C25.8201242,28.5537357 24.6059032,29.7565685 23.1109751,29.7565685 C21.6095189,29.7565685 20.3985619,28.5537357 20.3985619,27.0655947 C20.3985619,25.5774537 21.6095189,24.3746208 23.1109751,24.3746208 C24.6059032,24.3746208 25.8201242,25.5774537 25.8201242,27.0655947"
              id="wally__eye--right"
              fill="#FEFEFE"
              fillRule="evenodd"
            />
            <path
              d="M24.0064631,27.0592725 C24.0064631,27.5472142 23.6082508,27.9524813 23.1137495,27.9524813 C22.6225122,27.9524813 22.2210359,27.5472142 22.2210359,27.0592725 C22.2210359,26.5713309 22.6225122,26.1790323 23.1137495,26.1790323 C23.6082508,26.1790323 24.0064631,26.5713309 24.0064631,27.0592725"
              id="wally__cornia--right"
              fill="#BA7258"
              fillRule="evenodd"
            />
            <path
              d="M31.4396502,27.0655947 C31.4396502,28.5537357 32.6538713,29.7565685 34.1487993,29.7565685 C35.6469914,29.7565685 36.8612125,28.5537357 36.8612125,27.0655947 C36.8612125,25.5774537 35.6469914,24.3746208 34.1487993,24.3746208 C32.6538713,24.3746208 31.4396502,25.5774537 31.4396502,27.0655947"
              id="wally__eye--left"
              fill="#FEFEFE"
              fillRule="evenodd"
            />
            <path
              d="M35.0416761,27.0592725 C35.0416761,27.5472142 34.6434639,27.9524813 34.1489625,27.9524813 C33.6577253,27.9524813 33.2562489,27.5472142 33.2562489,27.0592725 C33.2562489,26.5713309 33.6577253,26.1790323 34.1489625,26.1790323 C34.6434639,26.1790323 35.0416761,26.5713309 35.0416761,27.0592725"
              id="wally__cornia--left"
              fill="#BA7258"
              fillRule="evenodd"
            />
            <path
              d="M25.8201242,39.1357472 L32.6664378,38.5083936 L32.6794939,38.0901579 C32.6794939,38.0901579 27.8568821,37.9701989 27.4684619,37.9572303 C27.4815181,37.5519632 28.0168198,21.1824126 28.0168198,21.1824126 L27.5990233,21.169444 L25.8201242,39.1357472 Z"
              id="wally__nose"
              fill="#E6A274"
              fillRule="evenodd"
            />
            <path
              d="M35.1309475,2.59767177 C35.1309475,2.59767177 42.713301,4.26899348 45.6623567,10.0578294 L42.8503905,11.8750473 C42.8503905,11.8750473 40.1167611,5.73281842 34.3590032,3.36443721 L35.1309475,2.59767177 Z"
              id="wally__shine"
              fillOpacity="0.5"
              fill="#FEFEFE"
              fillRule="evenodd"
            />
          </g>
        </g>
        <g id="wally__tie" mask="url(#mask)">
          <g transform="translate(19.000000, 68.000000)">
            <polygon
              id="wally__collar-shadow"
              fillOpacity="0.1"
              fill="#000000"
              points="0 7.706 0.578 7.516 8.802 1.42108547e-14 30.049 20.984 53.637 5.288 60.057 7.909 41.71 31.756 30.023 22.13 18.472 32.003"
            />
            <path
              d="M33.5611509,28.1782423 L39,118.892 L37.023,126.892 L33.394,128.892 L26.768,128.892 L24,118.892 L27.8518904,28.504 L27.609,28.504 L25.212,19.003 L29.623,19.294 L30.605,20.152 L31.548,19.42 L35.875,19.003 L33.5611509,28.1782423 Z"
              id="tie"
              fill="#3B68B1"
            />
            <polygon
              id="wally__knot"
              fill="#2A4C82"
              points="27.64 28.031 33.435 28.031 33.565 29.704 27.543 29.704"
            />
          </g>
        </g>
        <g id="wally__collar" mask="url(#mask)">
          <g transform="translate(20.000000, 65.000000)">
            <path
              d="M3.92845894,2.24326494 C2.50051316,4.39713039 1.38452851,6.9450158 0,9.13861436 L17.6322359,33 L24.0451275,24.1411729 C25.6403102,21.9293634 27.6069517,21.7803642 29.0461538,22.8928912 C22.5818047,15.1747354 14.3341314,7.71484473 7.8713903,0 C5.72947164,0 4.86595037,0.821150855 3.92845894,2.24326494"
              id="wally__collar--right"
              fill="#F7F9FB"
              fillRule="evenodd"
            />
            <path
              d="M4.44615385,1.30596379 C6.37111228,3.9824447 16.5708082,14.1851833 17.2393759,18.0252796 C18.3488109,24.4144054 15.6842291,29.2823895 16.0023641,30.7571851 C16.9664582,32.1922556 15.9959045,30.7439434 17.4880702,33 C19.850666,29.7624016 22.0259337,26.508251 24.4498956,23.5404524 C25.2072828,22.6168431 27.0288877,21.4912976 28.9538462,22.894919 C22.4554965,15.1783117 14.1791442,7.71991774 7.68886906,0.0066208557 C7.60973906,0.00331042785 7.53383885,0 7.45632375,0 C6.30167167,0 5.16962816,0.336008427 4.44615385,1.30596379"
              id="wally__collar__shadow--right"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
            <path
              d="M54.7543603,2.75485502 C54.5229552,2.7580917 54.2642315,2.7580917 53.9781892,2.7580917 C47.5181317,10.2930799 36.4171176,15.5753397 29.9538462,23.120038 C31.3920928,22.0325139 33.3606426,22.1781645 34.9515523,24.3402659 L41.3617934,33 L59,9.88849508 C57.6179977,7.74581372 58.8682277,6.03361064 57.4428369,3.92329606 C56.727731,2.86652044 56.3340211,2.75 55.2541309,2.75 C55.1014678,2.75 54.932735,2.75161834 54.7543603,2.75485502"
              id="wally__collar--left"
              fill="#F7F9FB"
              fillRule="nonzero"
            />
            <path
              d="M54.7926247,2.75805292 C48.1932587,10.2633772 36.5548546,15.6588356 29.9538462,23.167381 C31.9034349,21.8016053 33.7577615,22.8968028 34.5247858,23.795509 C36.9966738,26.6832872 39.2123395,29.8496965 41.6103172,33 C43.1246565,30.8047732 42.1424711,32.2140347 43.1180867,30.8176579 C43.4383646,29.382627 40.738176,24.6458977 41.8599696,18.4290411 C42.5399441,14.6924848 56.1361492,6.62828772 58.0923077,4.00947716 C57.3630597,3.08016984 56.2346962,2.75 55.0800535,2.75 C54.9831489,2.75 54.8895293,2.75322117 54.7926247,2.75805292"
              id="wally__collar__shadow--left"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
);
