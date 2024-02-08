import Feed from "@app/components/feed";
import { Box } from "@mui/material";

function SelectedTab({ tab }) {
  return <Box>{tab == 0 && <Feed />}</Box>;
}

export default SelectedTab;
