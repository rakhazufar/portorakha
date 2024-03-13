import Feed from "@app/components/feed";
import { Box } from "@mui/material";
import About from "@app/components/about";
import Certificate from "@app/components/certificate";
import Project from "@app/components/project";

function SelectedTab({ tab }) {
  return (
    <Box>
      {(() => {
        switch (tab) {
          case 0:
            return <Feed />;
          case 1:
            return <About />;
          case 2:
            return <Certificate />;
          case 3:
            return <Project />;
        }
      })()}
    </Box>
  );
}

export default SelectedTab;
