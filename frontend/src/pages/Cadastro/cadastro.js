import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import * as React from "react";
import "../Login/login.css";

export default function Cadastro({menu}) {
  const handleAddNew = (event) => {
    console.log("%cAddNew", "color:white;background-color:green", event);
    //return (alert("Add New"));
  };

  const handleEdit = (event) => {
    console.log("%cEdit", "color:black;background-color:yellow", event);
    //return (alert("Edit"));
  };

  const handleDelete = (event) => {
    console.log("%cDelete", "color:white;background-color:red", event);
    //return (alert("Delete"))
  };

  return (
    <Box sx={{display: "flex", height: "100vh"}}>
      {menu}
      <Box
        sx={{
          "& > :not(style)": {
            m: "auto",
            width: 600,
            height: 600,
          },
        }}
        m="auto"
        display="flex"
        alignItems="center"
        width="1000px"
        height="98vh"
      >
        <Paper elevation={3} style={{backgroundColor: "#f3f3f3"}}>
          <List dense={true}>
            <ListItem
              secondaryAction={[
                <IconButton
                  onClick={(event) => {
                    handleEdit(event);
                  }}
                  key={"edit"}
                >
                  <EditIcon />
                </IconButton>,
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={(event) => {
                    handleDelete(event);
                  }}
                  key={"Delete"}
                >
                  <DeleteIcon />
                </IconButton>,
              ]}
            >
              <ListItemText
                primary="Guilherme Pereira"
                secondary="Indicador, Volante, Som"
                key={"conteudo"}
              />
            </ListItem>
          </List>
          <Button
            style={{width: "31.25vw"}}
            sx={{
              backgroundColor: "#e0e0e0",
              color: "#5b3c88",
              "&:hover": {backgroundColor: "#6b46a1", color: "white"},
            }}
            onClick={(e) => {
              handleAddNew(e);
            }}
          >
            <AddIcon />
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
