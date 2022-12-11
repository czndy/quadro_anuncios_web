import Box from "@mui/material/Box";
import * as React from "react";

export default function Dashboard({menu, ct}) {
  const content = `<>

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

</>`;

  ct = content;

  return <Box sx={{display: "flex", height: "100vh"}}>{menu}</Box>;
}
