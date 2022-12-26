import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

export default function Menu({name, content}) {
  const [leftBarOpen, setLeftBarOpen] = React.useState(true);
  let navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#5b3c88",
        }}
      >
        <Toolbar>
          {name !== "Dashboard" ? (
            <IconButton
              onClick={() => {
                setLeftBarOpen(!leftBarOpen);
              }}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {name}
            {name !== "Dashboard" ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <ArrowBackTwoToneIcon />
                Voltar para Dashboard
              </Box>
            ) : (
              ""
            )}
          </Typography>
        </Toolbar>
      </AppBar>

      {leftBarOpen || name === "Dashboard" ? (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{overflow: "auto"}}>
            <List>
              <ListItem
                key={"acc"}
                disablePadding
                onClick={() => {
                  navigate("/partes");
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionTwoToneIcon style={{color: "#5b3c88"}} />
                  </ListItemIcon>
                  <ListItemText primary={"Partes"} />
                </ListItemButton>
              </ListItem>

              <ListItem
                key={"abb"}
                disablePadding
                onClick={() => {
                  navigate("/mecanicas");
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsTwoToneIcon style={{color: "#5b3c88"}} />
                  </ListItemIcon>
                  <ListItemText primary={"Mecânicas"} />
                </ListItemButton>
              </ListItem>

              <ListItem
                key={"aaa"}
                disablePadding
                onClick={() => {
                  navigate("/discursos");
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <CommentTwoToneIcon style={{color: "#5b3c88"}} />
                  </ListItemIcon>
                  <ListItemText primary={"Discursos"} />
                </ListItemButton>
              </ListItem>
            </List>

            <Divider />

            <List>
              <ListItem
                key={"add"}
                disablePadding
                onClick={() => {
                  navigate("/cadastro");
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <PersonAddTwoToneIcon style={{color: "#5b3c88"}} />
                  </ListItemIcon>
                  <ListItemText primary={"Cadastro"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      ) : (
        <></>
      )}

      {content}
    </>
  );
}
