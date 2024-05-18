import { Box } from "@mui/material";
import Post from "@app/components/post";
import Hello from "@app/../../public/static/photo-1.jpg";
import Binar from "@app/../../public/static/binar.jpg";
import Graduation from "@app/../../public/static/graduation.jpeg";

function Feed() {
  const allPost = [
    {
      theme: "Welcome 😀",
      title: "Hello World!🖐",
      body: firstPost,
      picture: Hello,
      alt: "Picture of the author",
      date: "6 February 2024",
      objectFit: "cover",
    },
    {
      theme: "Graduatee! 🎓",
      title: "Yuhuuuuuuuu🤸‍♀️",
      body: graduatePost,
      picture: Graduation,
      alt: "Graduate from university",
      date: "23 May 2023",
      objectFit: "contain",
    },
    {
      theme: "New Experience 😍",
      title: "Berbinar with Binar!🤸‍♀️",
      body: secondPost,
      picture: Binar,
      alt: "Binar Academy",
      date: "25 July 2022",
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

const firstPost = (
  <>
    Hy Buddy! I&apos;m a web developer and graphic designer with a knack for
    video editing.
    <br />
    My portfolio highlights innovative, user-centric digital projects. You can
    connect with me on LinkedIn with click{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Connect
    </span>{" "}
    on my Bio.
  </>
);

const graduatePost = (
  <>
    In <span style={{ fontWeight: 600, color: "#3A9BDC" }}>2023</span>, I
    achieved a significant milestone by graduating from the{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      Singaperbangsa University of Karawang
    </span>
    , where I pursued a major in{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>Communication</span>.
    This photograph captures a proud moment outside the iconic{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      Gedung H. Opon Sopandji
    </span>{" "}
    on campus, symbolizing the culmination of my academic journey. Equipped with
    a solid foundation in communication theories and practices, I am eager to
    apply my skills in the professional world, aiming to contribute innovatively
    and effectively in my future endeavors
  </>
);
const secondPost = (
  <>
    Finally, its done! <br /> <br /> Shout out to{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Binar Academy
    </span>{" "}
    for this opportunity and also kak{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Burhan Riyadi
    </span>{" "}
    for being a great mentor! And also to all my friends Binarians, specially
    for{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Ryan Adhitama Putra, Al Gifari, and Muhammad Ams Rahul
    </span>{" "}
    to all the mutual stress every night trying to complete our final project😆
    <br />
    <br />
    Thanks!
  </>
);

export default Feed;
