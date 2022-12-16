import Box from "@mui/material/Box";
import * as React from "react";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import { useEffect, useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Divider } from "@mui/material";
import PDF from '../../assets/Teste.pdf'

const actions = [
  {icon: <FileCopyIcon />, name: "Copy"},
  {icon: <SaveIcon />, name: "Save"},
  {icon: <PrintIcon />, name: "Print"},
  {icon: <ShareIcon />, name: "Share"},
];

export default function Partes({menu}) {
  const [link, setLink] = React.useState("");
  const [numPages, setNumPages] = useState(null);

  const handleUpload = async (event) => {
    let arquivo = await fetch(event.target.files).then((res) => {
      return res.blob();
    });

    console.log("arq", arquivo);

    console.log(URL.createObjectURL(arquivo, {type: "image/png"}));
  };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setTimeout(() => {
            document.querySelectorAll("div.textLayer").forEach(element=>element.remove());
            document.querySelectorAll("div.annotationLayer").forEach(element=>element.remove());
            console.log("delete")
        }, 100);
    }


  return (
    <>
      <Box sx={{display: "flex", height:"100vh", overflow:"auto"}} id="box1">
        {menu}
        <Box
            sx={{
            "& > :not(style)": {
                ml:"10%",
                pt:"5%"
            },
            }}
            m="auto"
            display="flex"
            width="-webkit-fill-available"
            id="box2"
        >
            <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess} renderMode="canvas" >
                {Array.apply(null, Array(numPages))
                    .map((x, i)=>i+1)
                    .map((page) => {
                        return <><Page pageNumber={page} key={page} scale={2.5} /><Divider sx={{width:"auto", borderColor:"rgba(0, 0, 0, 0.25)"}}/></>
                    })
                }
            </Document>
        </Box>
        
        
      </Box>
      <Box sx={{transform: "translateZ(0px)", flexGrow: 1}}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{position: "absolute", bottom: 20, right: 40}}
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
    </>
  );
}
