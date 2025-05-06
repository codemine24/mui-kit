/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const drawLine = keyframes`
  0% {
    stroke-dashoffset: 200;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const PathSVG = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "block" },
        width: 236,
        height: 68,
      }}
    >
      <svg
        width="236"
        height="68"
        viewBox="0 0 236 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
          stroke="url(#paint0_linear)"
          strokeWidth="1.5"
          strokeDasharray="350"
          strokeDashoffset="350"
          css={{
            animation: `${drawLine} 2.5s ease-in-out infinite alternate`,
          }}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="150.23"
            y1="0"
            x2="229.579"
            y2="32.925"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2EB9DF" stopOpacity="0" />
            <stop stopColor="#2EB9DF" />
            <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default PathSVG;
