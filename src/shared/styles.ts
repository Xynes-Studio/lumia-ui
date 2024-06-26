import { css } from "@emotion/react";
import { backgroundType, colorTypes, spacingTypes } from "./types/styles.types";

// Global style variables

export const background: backgroundType = {
  app: "#F6F9FC",
  appInverse: "#333333",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const color: colorTypes = {
  // Palette
  primary: "#FF4785",
  secondary: "#1EA7FD",
  tertiary: "#DDDDDD",

  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seaFoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",

  // Monochrome
  foreground: "#333333",
  foreground200: "#444444",
  foreground300: "#666666",
  foregroundInverse: "#FFFFFF",
  foregroundInverse200: "#F8F8F8",
  foregroundInverse300: "#F3F3F3",

  medium: "#DDDDDD",
  medium100: "#EEEEEE",
  medium200: "#999999",

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
};

export const spacing: spacingTypes = {
  padding: {
    small: "1vw",
    medium: "2vw",
    large: "3vw",
  },
  borderRadius: {
    small: "2.5vw",
    medium: "5vw",
    large: "10vw",
  },
};

export const typography = {
  type: {
    primary: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
    title: '"DM Serif Display", serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: "400",
    medium: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    s1: "0.8rem",
    s2: "1rem",
    s3: "1.2rem",
    m1: "1.4rem",
    m2: "1.6rem",
    m3: "1.8rem",
    l1: "2rem",
    l2: "2.2rem",
    l3: "2.4rem",
    code: "0.9rem",
  },
};

export const breakpoint = 600;
export const strokes = {
  s1: "0.5vw",
  s2: "1vw",
  s3: "2vw",
};

export const shadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

export const pageMargin: number = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
