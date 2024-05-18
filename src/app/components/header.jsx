"use client";

import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import Plane from "@app/components/pesawat";
import Link from "next/link";

function Header({ innerRef }) {
  return (
    <Box component="header" ref={innerRef}>
      <Plane />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { md: 5, xs: 3 },
          marginTop: { md: -10, sm: -9, xs: -7 },
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="static/photo.jpg"
          sx={{
            width: { md: "150px", sm: "120px", xs: "100px" },
            height: { md: "150px", sm: "120px", xs: "100px" },
            border: "5px solid",
            borderColor: "primary.text",
          }}
        />
        <Box sx={{ display: "flex", marginTop: { md: 8, xs: 7.5 } }}>
          {/* <Button
            variant="outlined"
            sx={{
              borderColor: "primary.text",
              borderRadius: "50px",
              marginRight: { md: 2, xs: 1 },
              minWidth: 0,
              height: "40px",
              ":hover": {
                borderColor: "primary.button",
              },
            }}
          >
            <EmailIcon
              sx={{
                color: "primary.text",
                width: { md: "20px", xs: "17px" },
                height: { md: "20px", xs: "17px" },
              }}
            />
          </Button> */}

          <Button
            variant="contained"
            size="large"
            LinkComponent={Link}
            href="https://linkedin.com/in/rakhazufar"
            endIcon={
              <LinkedInIcon
                sx={{
                  width: { md: 23, sm: 20, xs: 17 },
                  height: { md: 23, sm: 20, xs: 17 },
                }}
              />
            }
            sx={{
              backgroundColor: "primary.button",
              textTransform: "none",
              borderRadius: "50px",
              fontSize: "12px",
              px: 4,
              ":hover": {
                backgroundColor: "primary.button",
              },
            }}
          >
            Connect
          </Button>
        </Box>
      </Box>
      <Box sx={{ paddingLeft: { md: 6, xs: 3 }, marginTop: { md: 0, xs: 1 } }}>
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: 30, xs: 25 },
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
              width: { md: 28, xs: 20 },
              height: { md: 28, xs: 20 },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: 17, xs: 15 },
              pr: 1,
              fontWeight: 400,
              color: "primary.text",
            }}
          >
            Web Developer & Graphic Designer
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
              fontSize: { md: 15, xs: 14 },
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
              marginLeft: { md: 3, xs: 1.5 },
              width: 21,
              height: 21,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: 15, xs: 14 },
              fontWeight: 400,
              maxWidth: { md: 120, xs: 65 },
              marginLeft: 0.5,
              color: "primary.darkerText",
            }}
          >
            Graduate 2023
          </Typography>

          <CakeIcon
            sx={{
              color: "primary.darkerText",
              marginLeft: { md: 3, xs: 1.5 },
              width: 21,
              height: 21,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: 15, xs: 14 },
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
