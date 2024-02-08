"use client";

import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#f5f5f5",
      button: "#3A9BDC",
      hoverMain: "#dadee3",
      hoverSecond: "#80808080",
      darkerText: "#6e6b6b",
      text: "#16191D",
    },
  },
});

export default lightTheme;
