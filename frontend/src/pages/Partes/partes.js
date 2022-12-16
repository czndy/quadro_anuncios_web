import Box from "@mui/material/Box";
import * as React from "react";
import Teste from "../../assets/Teste.pdf";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

const actions = [
  {icon: <FileCopyIcon />, name: "Copy"},
  {icon: <SaveIcon />, name: "Save"},
  {icon: <PrintIcon />, name: "Print"},
  {icon: <ShareIcon />, name: "Share"},
];

export default function Partes({menu}) {
  const [link, setLink] = React.useState("");

  const handleUpload = async (event) => {
    let arquivo = await fetch(event.target.files).then((res) => {
      return res.blob();
    });

    console.log("arq", arquivo);

    console.log(URL.createObjectURL(arquivo, {type: "image/png"}));
  };

  return (
    <>
      <Box sx={{display: "flex", height: "100vh"}}>
        {menu}

        <Box sx={{transform: "translateZ(0px)", flexGrow: 1}}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{position: "absolute", bottom: 16, right: 16}}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </Box>
    </>
  );
}
