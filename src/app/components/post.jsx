import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/legacy/image";

function Post({ content }) {
  return (
    <Box
      sx={{
        padding: { md: 5, xs: 3 },
        borderRadius: "7px",
        mt: 2,
        ":hover": {
          backgroundColor: "primary.hoverMain",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar
            alt="Rakha :)"
            src="static/photo.jpg"
            sx={{
              width: 40,
              height: 40,
            }}
          />
          <Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography
                variant="p"
                sx={{ fontWeight: 700, fontSize: 16, color: "primary.text" }}
              >
                Rakha ✨
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: "primary.darkerText",
                }}
              >
                •
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: "primary.darkerText",
                  mt: 0.2,
                }}
              >
                {content.date}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                mt: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.hoverSecond",
                  py: 0.5,
                  borderRadius: "50px",
                  textAlign: "center",
                  width: "auto",
                  maxWidth: "fit-content",
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 13,
                    px: 2,
                    color: "primary.text",
                    mt: 0.2,
                  }}
                >
                  {content.theme}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {/* title */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: 28, xs: 24 },
                    color: "primary.text",
                    mt: 0.5,
                  }}
                >
                  {content.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { md: 16, xs: 12 },
                    color: "primary.text",
                    mt: 0.2,
                  }}
                >
                  {content.body}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    marginTop: 1,
                    minHeight: { md: "40vh", xs: "25vh" },
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={content.picture}
                    fill="true"
                    objectFit={content.objectFit}
                    alt={content.alt}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
