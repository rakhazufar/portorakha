import { Avatar, Box, Typography } from "@mui/material";
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
    I&apos;m a{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      front-end developer
    </span>
    ,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>graphic designer</span>,
    and <span style={{ fontWeight: 600, color: "#3A9BDC" }}>video editor</span>.
    As a front-end developer, I enjoy working with{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>React</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Next.js</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>TypeScript</span>, and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Framer Motion</span>.
    I&apos;m a big supporter of{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>creative coding</span>,
    and I aim to inspire confidence in others to build whatever they can dream
    up. I enjoy talking about these topics and teaching others how to enhance
    their coding skills.
    <br /> <br />
    I find it amazing how you can just open up a computer and have the world of
    knowledge at your fingertips!
    <br /> <br />
    In <span style={{ fontWeight: 600, color: "#3A9BDC" }}>graphic design</span>
    , I create visually compelling designs that communicate messages effectively
    and creatively. Whether it&apos;s{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>logo design</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>branding</span>, or
    creating stunning visuals, I love bringing ideas to life through design.
    <br /> <br />
    Beyond making websites, I&apos;m passionate about{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      public speaking
    </span>{" "}
    and teaching others about the world of technology and design.
    <br /> <br />
    Feel free to drop a message and say &quot;
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Hey!</span>&quot;.
    I&apos;m eager to connect with you!
  </>
);

export default About;
