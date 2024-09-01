import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  color: {
    background: "#fff",
    border: "#e9ecef",
  },
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  radius: "12px",
});

export const card = style({
  maxWidth: 300,
  fontFamily: vars.font,
  background: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius,
  padding: 24,
  transition: "box-shadow 0.4s ease",

  ":hover": {
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  },
});

globalStyle(`${card} img`, {
  display: "block",
  width: "100%",
  borderRadius: vars.radius,
});
