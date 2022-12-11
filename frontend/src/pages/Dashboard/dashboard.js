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

import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

import * as React from "react";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

export default function Dashboard() {
  let navigate = useNavigate();

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
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
                  <DescriptionTwoToneIcon />
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
                  <SettingsTwoToneIcon />
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
                  <CommentTwoToneIcon />
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
                  <PersonAddTwoToneIcon />
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
                  <NoteAddTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Cadastro Partes"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        <Typography paragraph>
          Partes - Apostila em PDF (Apenas visualização)
        </Typography>
        <Typography paragraph>
          Mecânicas - Partes mecânicas da reunião Durante semana e FDS
          (Editável)
        </Typography>
        <Typography paragraph>
          Discursos - Folha de discursos de FDS (Presidente, Tema do Discurso,
          Tema da Sentinela, etc) (Editável)
        </Typography>
        <Typography paragraph>
          CadastroPartes - Tela para dar carga no PDF do mês determinado
        </Typography>
        <Typography paragraph>
          Cadastro - Cadastro de irmãos para utilização nos campos de edição
        </Typography>
      </Box>
    </Box>
  );
}
