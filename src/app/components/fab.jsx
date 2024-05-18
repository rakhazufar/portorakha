"use client";

import { Fab, Action } from "react-tiny-fab";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import GitHubIcon from "@mui/icons-material/GitHub";

function FloatButton() {
  return (
    <Box
      sx={{
        ".rtf--mb": {
          backgroundColor: "primary.button",
          color: "primary.text",
          width: "55px",
          height: "55px",
          marginBottom: -0.7,
        },
      }}
    >
      <Fab
        icon={<ChatIcon sx={{ width: "20px" }} />}
        event="click"
        alwaysShowTitle={true}
      >
        <Action text="Email" style={{ backgroundColor: "#e74c3c" }}>
          <a
            href="mailto:rakhazufar1@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <EmailIcon />
          </a>
        </Action>
        <Action text="Whatsapp" style={{ backgroundColor: "green" }}>
          <a
            href="https://wa.me/6289639143290"
            style={{ textDecoration: "none", color: "white" }}
          >
            <WhatsAppIcon />
          </a>
        </Action>

        <Action text="Github" style={{ backgroundColor: "black" }}>
          <a
            href="https://github.com/rakhazufar"
            style={{ textDecoration: "none", color: "white" }}
          >
            <GitHubIcon />
          </a>
        </Action>
      </Fab>
    </Box>
  );
}

export default FloatButton;
