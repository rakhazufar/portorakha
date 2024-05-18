import { Box } from "@mui/material";
import Post from "@app/components/post";
import Apparel from "@app/../../public/static/Apparel.png";
import Wedding from "@app/../../public/static/syafiq-maya.png";
import Secondhand from "@app/../../public/static/secondhand.png";

function Project() {
  const allPost = [
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
    {
      theme: "Wedding Invitation 😍",
      title: "Mobile Only📱",
      body: secondPost,
      picture: Wedding,
      alt: "Wedding Invitation",
      date: "14 July 2022",
      objectFit: "contain",
    },
  ];
  return (
    <Box>
      {allPost.map((post) => (
        <>
          <Post content={post} />
        </>
      ))}
    </Box>
  );
}

const finalProjectPost = (
  <>
    For my final project at a full-stack development bootcamp hosted by Binar
    Academy, I collaborated with a team of five to create a web application
    using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). Although
    the website itself is no longer active, the codebase is accessible for
    review. You can explore the frontend and backend repositories to understand
    our project&apos;s structure, features, and the technologies we implemented.
    Here are the links to the repositories: <br /> 1. Frontend:{" "}
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

const secondPost = (
  <>
    The wedding invitation website for &quot;Syafiq & Maya&quot; was one of my{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      first projects using React.js
    </span>
    , specifically designed for mobile use. It’s a simple site that does its
    job, but looking back, I see plenty of room for improvement. Now, with more
    experience and a better grasp of the technology, I’m excited about the
    possibility of creating far more sophisticated and visually appealing
    wedding websites. You can check out the original version{" "}
    <a
      href="https://syafiq-maya.web.app"
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      here
    </a>{" "}
    to see where I started!
  </>
);

export default Project;
