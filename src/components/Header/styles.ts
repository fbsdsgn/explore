import { styled } from "../../styles/config/stitches.config";

export const Container = styled("header", {
  display: "flex",
  height: 88,
  jc: "center",
  ai: "center",
  position: "fixed",
  width: "100vw",
  top: 0
});

export const Navbar = styled("nav", {
  width: "100%",
  maxWidth: "1216px",
  display: "flex",
  jc: "space-between",
  ai: "center",
});

export const Logo = styled("a", {
  fontSize: "$3",
  p: "$1 $2",
  color: "#fff",
});

export const NavList = styled("ul", {
  width: "100%",
  maxWidth: "460px",
  display: "flex",
  justifyContent: "space-between",
});

export const Item = styled("li", {
  fontSize: "$2",
  color: "#fff",
});

export const Link = styled("a", {
  p: "$1 $2",
  cursor: "pointer",

  variants: {
    color: {
      blue: {
        color: "#2A97FC",
      },
    },
  },
});

export const Wrapper = styled("div", {
  display: "flex",
  gap: "$3"
});
