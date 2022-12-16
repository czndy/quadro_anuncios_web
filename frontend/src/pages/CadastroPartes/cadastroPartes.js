import Box from "@mui/material/Box";
import * as React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CadastroPartes({menu}) {

  const [link, setLink] = React.useState("");

  const handleUpload = async (event) => {
    let arquivo = await fetch(event.target.files)
    .then((res)=>{
      return res.blob()
    })

    console.log("arq",arquivo)

    console.log(URL.createObjectURL(arquivo, {type:"image/png"}));
  }




  return (
    <Box sx={{display: "flex", height: "100vh", width:"100%"}}>
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
          <Button 
            variant="contained" 
            component="label" 
            style={{width:"340px", height:"80px", textAlign:"center"}}
            sx={{backgroundColor: "#5b3c88",
                "&:hover": {
                  backgroundColor: "#6b46a1",
                },}}
          >
            Upload Apostila com designações preenchidas
            <input 
            hidden 
            accept="application/pdf" 
            multiple 
            type="file" 
            onChange={
              (event)=>{
                handleUpload(event)
              }
              } 
            />
          </Button>
      </Box>
    </Box>
  );
}