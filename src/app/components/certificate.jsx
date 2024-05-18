import { Box } from "@mui/material";
import Sertifikat from "@app/../../public/static/sertifikat.png";
import OverallScore from "@app/../../public/static/overall-score.png";
import Post from "@app/components/post";

function Certificate() {
  const allPost = [
    {
      theme: "Binar 😀",
      title: "Look!🤞",
      body: firstPost,
      picture: Sertifikat,
      alt: "Sertifikat Binar Academy",
      date: "22 July 2022",
      objectFit: "contain",
    },
    {
      theme: "Overall Score 😍",
      title: "Berbinar with Binar!🤸‍♀️",
      body: secondPost,
      picture: OverallScore,
      alt: "Binar Academy",
      date: "25 July 2022",
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
    I successfully completed a{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      six-month fullstack web development bootcamp
    </span>
    , achieving a final hard skill score of{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>4.7</span> and a soft
    skill score of{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>4.8</span>. The program
    encompassed everything from{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      basic web development
    </span>{" "}
    to{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>advanced topics</span>{" "}
    like React.js and API architecture. My skills in{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>problem-solving</span>,{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>critical thinking</span>
    , and{" "}
    <span style={{ fontWeight: 600, color: "#3A9BDC" }}>
      team collaboration
    </span>{" "}
    were notably enhanced, preparing me to design, develop, and deploy effective
    web solutions.
  </>
);

export default Certificate;
