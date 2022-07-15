import { styled } from "../../styles/config/stitches.config";

export const Container = styled("button", {
  width: "$18",
  height: "$5",
  borderRadius: "4px",
  background: "linear-gradient(91deg, #2C9AFF 0%, #00417C 100%)",
  border: "none",
  color: "#fff",
  cursor: "pointer",

  variants: {
    outlined: {
      true: {
        color: "#2A97FC",
        background: "transparent",
        border: "1px solid #2C9AFF",
      },
    },
  },
});
