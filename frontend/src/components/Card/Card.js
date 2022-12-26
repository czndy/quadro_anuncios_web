import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Card({title, content, icon}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3",
        borderRadius: "10px",
        alignItems: "center",
        boxShadow: 10,
        p: 4,
      }}
    >
      <Box sx={{display: "flex", flexDirection: "column"}}>
        <Typography Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="subtitle1" paragraph sx={{m: 0}}>
          {content}
        </Typography>
      </Box>
      <Box sx={{display: "flex", alignItems: "center"}}>{icon}</Box>
    </Box>
  );
}
