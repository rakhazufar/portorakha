import MyIframeComponent from "@app/components/pesawat";
import { Box, Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";

function Header() {
  return (
    <Box component="header">
      <MyIframeComponent />
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
            variant="outlined"
            sx={{
              borderColor: "primary.text",
              borderRadius: "50px",
              marginTop: 8,
              py: 1,
              marginRight: 2,
              ":hover": {
                borderColor: "primary.button",
              },
            }}
          >
            <EmailIcon sx={{ color: "primary.text" }} />
          </Button>

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
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 17,
              fontWeight: 400,
              color: "primary.text",
            }}
          >
            Web Developer, Graphic Designer, and... Sometime Video Editor :)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: 1.5 }}>
          <BusinessCenterIcon
            sx={{
              color: "primary.darkerText",
              marginTop: -0.5,
              width: 20,
              height: 20,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: 15,
              fontWeight: 400,
              marginLeft: 0.5,
              color: "primary.darkerText",
            }}
          >
            Available
          </Typography>

          <SchoolIcon
            sx={{
              color: "primary.darkerText",
              marginLeft: 3,
              width: 21,
              height: 21,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: 15,
              fontWeight: 400,
              marginLeft: 0.5,
              color: "primary.darkerText",
            }}
          >
            Graduate 2023
          </Typography>

          <CakeIcon
            sx={{
              color: "primary.darkerText",
              marginLeft: 3,
              width: 21,
              height: 21,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: 15,
              fontWeight: 400,
              marginLeft: 0.5,
              color: "primary.darkerText",
            }}
          >
            August 20th
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
