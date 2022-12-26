import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import LocalPrintshopTwoToneIcon from "@mui/icons-material/LocalPrintshopTwoTone";
import PrintIcon from "@mui/icons-material/Print";
import PublishTwoToneIcon from "@mui/icons-material/PublishTwoTone";
import SaveIcon from "@mui/icons-material/Save";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import {Divider} from "@mui/material";
import {red} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {Document, Page} from "react-pdf/dist/esm/entry.webpack";
import PDF from "../../assets/Teste.pdf";
import "./partes.css";

export default function Partes({menu}) {
  const [numPages, setNumPages] = useState(null);

  const handleUpload = async (event) => {
    let arquivo = await fetch(event.target.files).then((res) => {
      return res.blob();
    });

    console.log("arq", arquivo);

    console.log(URL.createObjectURL(arquivo, {type: "image/png"}));
  };

  const handleDownload = (event) => {
    console.log(PDF);
  };

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setTimeout(() => {
      document
        .querySelectorAll("div.textLayer")
        .forEach((element) => element.remove());
      document
        .querySelectorAll("div.annotationLayer")
        .forEach((element) => element.remove());
      console.log("delete");
    }, 100);
  }

  return (
    <>
      <Box sx={{display: "flex", height: "100vh", overflow: "auto"}} id="box1">
        {menu}
        <Box
          sx={{
            "& > :not(style)": {
              m: "auto",
              pt: "5%",
            },
          }}
          m="auto"
          display="flex"
          width="-webkit-fill-available"
          id="box2"
        >
          <Document
            file={PDF}
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode="canvas"
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => {
                return (
                  <>
                    <Page pageNumber={page} key={page} scale={2.5} />
                    <Divider
                      sx={{width: "auto", borderColor: "rgba(0, 0, 0, 0.25)"}}
                    />
                  </>
                );
              })}
          </Document>
        </Box>
      </Box>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
          backgroundColor: "#5b3c88",
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 40,
          }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            key="Upload"
            icon={
              <>
                <label
                  for="file-input"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <PublishTwoToneIcon sx={{color: "#5b3c88"}} />
                </label>
                <input
                  id="file-input"
                  style={{display: "none"}}
                  accept="application/pdf"
                  multiple
                  type="file"
                  onChange={(event) => {
                    handleUpload(event);
                  }}
                />
              </>
            }
            tooltipTitle="Upload"
          />
          <SpeedDialAction
            key="Download"
            icon={
              <a
                href={PDF}
                download="Partes"
                onClick={(event) => {
                  handleDownload(event);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#5b3c88",
                }}
              >
                <DownloadTwoToneIcon />
              </a>
            }
            tooltipTitle="Download"
          />
        </SpeedDial>
      </Box>
    </>
  );
}
