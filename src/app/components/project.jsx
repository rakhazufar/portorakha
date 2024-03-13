import { Box } from "@mui/material";
import Post from "@app/components/post";

function Project() {
  const allPost = [
    {
      theme: "Welcome 😀",
      title: "Hello World!🖐",
      body: firstPost,
      picture: "/static/photo-1.jpg",
      alt: "Picture of the author",
      date: "6 February 2024",
    },
    {
      theme: "New Experience 😍",
      title: "Berbinar with Binar!🤸‍♀️",
      body: secondPost,
      picture: "/static/binar.jpg",
      alt: "Binar Academy",
      date: "25 July 2022",
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

export default Project;
