"use client";

import { Box, Grid } from "@mui/material";
import { useState } from "react";
import SelectedTab from "@app/components/selectedTab";

const tabStyle = {
  fontSize: { md: 17, xs: 14 },
  fontWeight: 600,
  marginTop: 5,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "primary.darkerText",
  ":hover": {
    backgroundColor: "primary.hoverMain",
  },
  "& .MuiGrid-item": {
    padding: 0,
  },
};

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const isSelected = (tab) => {
    return {
      color: selectedTab == tab ? "primary.text" : "primary.darkerText",
      borderBottom: selectedTab == tab && "5px solid",
      borderColor: "primary.button",
    };
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} sx={{ width: "90%", marginLeft: 0 }}>
        <Grid
          item
          xs={3}
          onClick={() => {
            setSelectedTab(0);
          }}
          sx={{
            ...tabStyle,
            ...isSelected(0),
          }}
        >
          Feed
        </Grid>
        <Grid
          item
          xs={3}
          onClick={() => {
            setSelectedTab(1);
          }}
          sx={{
            ...tabStyle,
            ...isSelected(1),
          }}
        >
          About
        </Grid>
        <Grid
          item
          xs={3}
          onClick={() => {
            setSelectedTab(2);
          }}
          sx={{
            ...tabStyle,
            ...isSelected(2),
          }}
        >
          Certificate
        </Grid>
        <Grid
          item
          xs={3}
          onClick={() => {
            setSelectedTab(3);
          }}
          sx={{
            ...tabStyle,
            ...isSelected(3),
          }}
        >
          Project
        </Grid>
      </Grid>
      <SelectedTab tab={selectedTab} />
    </Box>
  );
}

export default Tabs;
