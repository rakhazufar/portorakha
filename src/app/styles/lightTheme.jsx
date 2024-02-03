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
      text: "#16191D",
    },
  },
});

export default lightTheme;
