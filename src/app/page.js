import { Box, Container, Typography } from "@mui/material";
import Navbar from "@app/components/navbar";
import Header from "@app/components/header";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Home() {
  return (
    <Box component="main" sx={{ backgroundColor: "primary.main" }}>
      <Navbar />
      <Container maxWidth="md" sx={{ padding: 0 }}>
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 5,
            marginTop: -10,
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="static/photo.jpg"
            sx={{
              width: 150,
              height: 150,
              border: "5px solid",
              borderColor: "primary.text",
            }}
          />
          <Box>
            <Button
              variant="contained"
              size="large"
              endIcon={<LinkedInIcon sx={{ width: 23, height: 23 }} />}
              sx={{
                backgroundColor: "primary.button",
                textTransform: "none",
                borderRadius: "50px",
                px: 4,
                marginTop: 8,
                ":hover": {
                  backgroundColor: "primary.button",
                },
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box sx={{ paddingLeft: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: 30,
                fontWeight: 600,
                color: "primary.text",
              }}
            >
              Rakha Zufar
            </Typography>
            <VerifiedIcon
              sx={{
                color: "primary.button",
                marginLeft: 1,
                width: 28,
                height: 28,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
