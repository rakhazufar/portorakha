import { Inter } from "next/font/google";
import "./globals.css";
import ColorModeProvider from "@app/provider/darkMode";
import { Box } from "@mui/material";
import "react-tiny-fab/dist/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakha Zufar",
  description: "Developed By Rakha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ColorModeProvider>
        <Box
          component="body"
          sx={{ backgroundColor: "primary.main" }}
          className={inter.className}
        >
          {children}
        </Box>
      </ColorModeProvider>
    </html>
  );
}
