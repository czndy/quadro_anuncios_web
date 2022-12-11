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
import Menu from "../Menu/menu";

export default function Dashboard({menu}) {
  return (
    <Box sx={{display: "flex", height: "100vh"}}>
      {menu}

      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />

        <Typography variant="h4">Partes</Typography>
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
    </Box>
  );
}
