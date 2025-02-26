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
      web developer
    </span>
    ,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>graphic designer</span>,
    and <span style={{ fontWeight: 600, color: "#3A9BDC" }}>content creator</span>.
    As a web developer, I specialize in{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>React</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Express.js</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>SQL</span>, and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>WordPress</span>.
    I have experience in{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>full-stack development</span>,
    working on website performance optimization,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>SEO</span>, and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>backend APIs</span>.
    <br /> <br />
    I believe technology plays a key role in effective communication, and I enjoy
    building websites that deliver a seamless user experience.
    <br /> <br />
    In <span style={{ fontWeight: 600, color: "#3A9BDC" }}>graphic design</span>
    , I create compelling visuals for{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>branding</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>social media</span>, and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>marketing campaigns</span>.
    Whether it&apos;s designing{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>logos</span> or crafting{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>engaging visuals</span>,
    I love transforming ideas into impactful designs.
    <br /> <br />
    As a <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      content creator
    </span>, I develop engaging{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>videos</span> and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>digital content</span> 
    for various platforms, including{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Instagram</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>YouTube</span>, and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>TikTok</span>.
    <br /> <br />
    Beyond web development and design, I&apos;m passionate about{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      digital communication
    </span>{" "}
    and sharing knowledge on technology and creative fields.
    <br /> <br />
    Feel free to drop a message and say &quot;
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Hey!</span>&quot;.
    I&apos;m always open to new collaborations and discussions!

  </>
);

export default About;
