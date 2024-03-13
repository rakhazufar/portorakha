import { Box } from "@mui/material";
import Post from "@app/components/post";

function Certificate() {
  const allPost = [
    {
      theme: "Binar 😀",
      title: "Look!🤞",
      body: firstPost,
      picture: "/static/sertifikat.png",
      alt: "Sertifikat Binar Academy",
      date: "22 July 2022",
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
    Thrilled to share that I&apos;ve successfully completed the{" "}
    <span
      style={{
        fontWeight: 600,
        color: "#3A9BDC",
      }}
    >
      Fullstack Web Development Wave 2 program!
    </span>{" "}
    . This journey, supported by Kampus Merdeka, has been incredibly enriching
    and has significantly expanded my skill set. A huge thank you to Binar
    Academy for the guidance and knowledge. Eager to apply what I&apos;ve
    learned in the real world.
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

export default Certificate;
