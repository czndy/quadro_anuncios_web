import Box from "@mui/material/Box";
import React from "react";
import Card from "../../components/Card/Card";

import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

export default function DashText() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "70px",
      }}
    >
      <Card
        title="Partes"
        content="Apostila em PDF e dar carga no PDF do mês determinado (Apenas
          visualização)"
        icon={<DescriptionTwoToneIcon className="icon1" fontSize="large" />}
      />

      <Card
        title="Mecânicas"
        content="Partes mecânicas da reunião Durante semana e FDS (Editável)"
        icon={<SettingsTwoToneIcon fontSize="large" />}
      />

      <Card
        title="Discursos"
        content="Folha de discursos de FDS (Presidente, Tema do Discurso, Tema da
          Sentinela, etc) (Editável)"
        icon={<CommentTwoToneIcon fontSize="large" />}
      />

      <Card
        title="Cadastro"
        content="Cadastro de irmãos para utilização nos campos de edição"
        icon={<PersonAddTwoToneIcon fontSize="large" />}
      />
    </Box>
  );
}
