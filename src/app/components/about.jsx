import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function About() {
  const content = {
    title: "Hello Buddy!👋",
    body: firstPost,
    date: "6 February 2024",
  };

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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const firstPost = (
  <>
    I&apos;m a big supporter of creative coding, and I aim to inspire confidence
    in others to build whatever they can dream up. I enjoy talking about this
    topic and teaching others how to enhance their coding skills.
    <br /> <br />
    I find it amazing how you can just open up a computer and have the world of
    knowledge at your fingertips!
    <br /> <br />I enjoy working with React, designing CSS both within and
    outside of JavaScript, and exploring Golang.
    <br />
    <br />
    Beyond making websites, I&apos;m passionate about graphic design, public
    speaking, and video editing.
    <br /> <br /> For more on this, you can check the &quot;Content&quot; tab.
    Feel free to drop a message and say &quot;Hey!&quot;. I&apos;m eager to
    connect with you!
  </>
);

export default About;
