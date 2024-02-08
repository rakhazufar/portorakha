"use client";

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#16191D",
      hoverMain: "#2d333b",
      hoverSecond: "#80808080",
      button: "#3A9BDC",
      darkerText: "#6e6b6b",
      text: "#f5f5f5",
    },
  },
});

export default darkTheme;
