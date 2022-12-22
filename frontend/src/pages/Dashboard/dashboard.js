import Box from "@mui/material/Box";
import * as React from "react";

export default function Dashboard({menu}) {
  return <Box sx={{display: "flex", height: "100vh"}}>{menu}</Box>;
}
