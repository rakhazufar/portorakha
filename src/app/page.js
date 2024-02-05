import { Box, Container } from "@mui/material";
import Navbar from "@app/components/navbar";
import Header from "@app/components/header";
import Tabs from "@app/components/tabs";

export default function Home() {
  return (
    <Box component="main" sx={{ backgroundColor: "primary.main" }}>
      <Navbar />
      <Container maxWidth="md" sx={{ padding: 0 }}>
        <Header />
        <Tabs />
      </Container>
    </Box>
  );
}
