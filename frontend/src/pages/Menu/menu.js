import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
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
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

export default function Menu({name}) {
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

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: "border-box"},
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

            <ListItem
              key={"aee"}
              disablePadding
              onClick={() => {
                navigate("/cadastro-partes");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <NoteAddTwoToneIcon style={{color: "#5b3c88"}} />
                </ListItemIcon>
                <ListItemText primary={"Cadastro Partes"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />

        <Typography Typography variant="h4">
          Partes
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Apostila em PDF (Apenas visualização)
        </Typography>

        <Typography variant="h4">Mecânicas</Typography>
        <Typography variant="subtitle1" paragraph>
          Partes mecânicas da reunião Durante semana e FDS (Editável)
        </Typography>

        <Typography variant="h4">Discursos</Typography>
        <Typography variant="subtitle1" paragraph>
          Folha de discursos de FDS (Presidente, Tema do Discurso, Tema da
          Sentinela, etc) (Editável)
        </Typography>

        <Typography variant="h4">Cadastro Partes</Typography>
        <Typography variant="subtitle1" paragraph>
          Tela para dar carga no PDF do mês determinado
        </Typography>

        <Typography variant="h4">Cadastro</Typography>
        <Typography variant="subtitle1" paragraph>
          Cadastro de irmãos para utilização nos campos de edição
        </Typography>
      </Box>
    </>
  );
}
