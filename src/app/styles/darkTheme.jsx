"use client";

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#16191D",
      button: "#3A9BDC",
      text: "#f5f5f5",
    },
  },
});

export default darkTheme;
