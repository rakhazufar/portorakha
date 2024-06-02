import { Box } from "@mui/material";
import Post from "@app/components/post";
import Apparel from "@app/../../public/static/Apparel.png";
import Wedding from "@app/../../public/static/syafiq-maya.png";
import Secondhand from "@app/../../public/static/secondhand.png";
import WisudaMQ from "@app/../../public/static/wisuda-mq.png";
import Exclusive from "@app/../../public/static/exclusive.png";

function Project() {
  const allPost = [
    {
      theme: "Exclusive 📱",
      title: "Under Development!",
      body: graduationInvitationPost,
      picture: Exclusive,
      alt: "Web for selling smartphones",
      date: "under development",
      objectFit: "contain",
    },
    {
      theme: "Graduation Invitation 🎓",
      title: "Fast-tracked Project!",
      body: graduationInvitationPost,
      picture: WisudaMQ,
      alt: "Madinatul Quran graduation invitation",
      date: "30 July 2022",
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
        <Post content={post} key={post.title} />
      ))}
    </Box>
  );
}

const graduationInvitationPost = (
  <>
    I had the opportunity to create a website for the{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      graduation invitation day
    </span>{" "}
    at{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Pondok Pesantren Madinatul Quran
    </span>
    . This was a{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      fast-tracked project
    </span>{" "}
    developed using{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Next.js
    </span>
    ,{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Framer Motion
    </span>
    , and{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Tailwind CSS
    </span>{" "}
    to ensure a smooth and visually appealing experience. You can explore the
    website at{" "}
    <a
      href="https://wisuda-mq.rakhazufar.com"
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      wisuda-mq.rakhazufar.com
    </a>{" "}
    or review the codebase on GitHub. Here is the link to the repository:
    <br />
    <a
      href="https://github.com/rakhazufar/wisuda-mq.git"
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Graduation Invitation Website Repository on GitHub
    </a>
  </>
);

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
