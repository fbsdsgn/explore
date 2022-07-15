import { globalCss } from "./config/stitches.config";

export const globalStyles = globalCss({
  "*, *::before, *::after'": {
    boxSizing: "border-box",
  },
  "*": {
    margin: 0,
    padding: 0,
  },

  "html, body": {
    width: "100%",
    height: "auto",
  },

  body: {
    lineHeight: 1.5,
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "'Roboto', sans-serif",
    background:
      "linear-gradient(154.81deg, #001120 21.84%, #01050A 42.38%, #05070A 65.8%, #001528 86.91%, #01101E 100%)",
    position: "relative",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "input, button, textarea, select": {
    font: "inherit",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  "#root, #__next": {
    isolation: "isolate",
  },
});
