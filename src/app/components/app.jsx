"use client";

import { Box, Container } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Navbar from "@app/components/navbar";
import Header from "@app/components/header";
import Tabs from "@app/components/tabs";
import FloatButton from "@app/components/fab";

function App() {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const current = headerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0] adalah objek yang mewakili elemen yang diamati
        const entry = entries[0];

        // Jika `isIntersecting` false, berarti elemen sudah tidak dalam viewport
        // yang bisa diartikan telah discroll melewati
        if (!entry.isIntersecting) {
          setHasScrolledPast(true);
        } else {
          setHasScrolledPast(false);
        }
      },
      {
        // Opsi untuk menentukan seberapa banyak elemen harus dalam viewport
        // sebelum `isIntersecting` menjadi true/false
        threshold: 0.1, // Atur sesuai kebutuhan
      }
    );

    if (current) {
      observer.observe(current);
    }

    // Bersihkan observer ketika komponen di-unmount
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <Box component="main" sx={{ backgroundColor: "primary.main" }}>
      <Navbar hasScrolledPast={hasScrolledPast} />
      <Container maxWidth="md" sx={{ padding: 0, mt: 7 }}>
        <Header innerRef={headerRef} />
        <Tabs />
        <FloatButton />
      </Container>
    </Box>
  );
}

export default App;
