/* eslint-disable */

import { Box } from "@mui/material";
import Post from "@app/components/post";
import Apparel from "@app/../../public/static/Apparel.png";
import Secondhand from "@app/../../public/static/secondhand.png";
import Muslimlifefest from "@app/../../public/static/muslimlifefest.png";
import Moslemjourney from "@app/../../public/static/moslemjourney.png";
import Satsenu from "@app/../../public/static/satsenu.png";


function Project() {
  const allPost = [
    {
      theme: "Wordpress💻",
      title: "Moslem Journey Websiteee!",
      body: moslemJourneyPost,
      picture: Moslemjourney,
      alt: "Wordpress project moslem journey!",
      date: "Sometimes in 2024",
      objectFit: "contain",
    },
    {
      theme: "Wordpress💻",
      title: "Muslem Life Fest!",
      body: muslimLifeFestPost,
      picture: Muslimlifefest,
      alt: "Muslimlifefest",
      date: "Sometimes in 2024",
      objectFit: "contain",
    },
    {
      theme: "Wordpress💻",
      title: "Satsenu Event Management!",
      body: satsenuPost,
      picture: Satsenu,
      alt: "Satsenu!",
      date: "Sometimes in 2024",
      objectFit: "contain",
    },
    {
      theme: "Binar Academy👨‍💻",
      title: "Final Project💻",
      body: finalProjectPost,
      picture: Secondhand,
      alt: "Binar Academy Final Project",
      date: "25 July 2022",
      objectFit: "contain",
    },
    {
      theme: "Company Profile 👨‍💻",
      title: "99 Apparel 👕",
      body: firstPost,
      picture: Apparel,
      alt: "99 Apparel",
      date: "8 July 2022",
      objectFit: "contain",
    },
  ];
  return (
    <Box>
      {allPost.map((post) => (
        <Post content={post} key={post.title} />
      ))}
    </Box>
  );
}

const finalProjectPost = (
  <>
    For my final project at a{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      full-stack bootcamp
    </span>{" "}
    by{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Binar Academy
    </span>
    , I worked with a team of five to build a{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      web app
    </span>{" "}
    using the{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      PERN stack (PostgreSQL, Express.js, React.js, Node.js)
    </span>
    . Although the site is no longer active, the{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      codebase is available
    </span>{" "}
    for review. Explore the frontend and backend repos to understand the
    project&apos;s{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      structure and technologies
    </span>
    . Here are the repository links: <br /> 1. Frontend:
    <a
      href="https://gitlab.com/kelompok-4-fsw7/frontend.git"
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Frontend Repository on GitLab
    </a>{" "}
    <br /> 2. Backend:
    <a
      href="https://gitlab.com/kelompok-4-fsw7/backend.git"
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Backend Repository on GitLab
    </a>
  </>
);

const satsenuPost = (
  <>
    I had the opportunity to contribute to{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Satsenu
    </span>
    , an{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      event management platform
    </span>{" "}
    designed to streamline{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      event planning, coordination, and ticketing
    </span>
    . This project focuses on making{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      organizing events more efficient and seamless
    </span>
    . Stay tuned for updates on upcoming features! 🎟️🚀
  </>
);


const moslemJourneyPost = (
  <>
    For my project at{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Moslem Journey
    </span>
    , I worked on creating content and sharing stories about{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Muslim-friendly travel experiences
    </span>
    . The goal was to provide valuable insights and{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      recommendations for Muslim travelers
    </span>
    . Check out the latest posts and explore the journey! 🚀✨
  </>
);

const muslimLifeFestPost = (
  <>
    As part of my content creation journey, I contributed to{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Muslim Life Fest
    </span>
    , an event that brings together{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Islamic lifestyle, business, and culture
    </span>
    . My role involved crafting engaging content to{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      highlight the event's impact
    </span>
    . Stay tuned for more insights from the festival! 🎉📢
  </>
);


const firstPost = (
  <>
    99 Apparel is an elegantly designed company profile website developed using
    React.js, focusing solely on front-end functionalities to highlight the
    brand’s fashion offerings. The site features a clean, modern user interface
    that efficiently showcases various clothing collections through a
    well-organized layout and high-quality images. This project demonstrates
    advanced usage of React.js to create a responsive and visually appealing
    digital presence for the brand, emphasizing usability and aesthetic appeal.
    You can explore the site{" "}
    <a
      href="https://99apparel.rakhazufar.com"
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      {" "}
      here.
    </a>
  </>
);

export default Project;
