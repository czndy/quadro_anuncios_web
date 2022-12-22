import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../Login/login.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function Cadastro({menu}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [totalIrmaos, setTotalIrmaos] = React.useState();

  const irmaos = [
    {nome: "Guilherme", funcoes: "Indicador, Volante, Som"},
    {nome: "Bruno", funcoes: "Indicador, Volante, Som"},
    {nome: "Gabriel", funcoes: "Indicador, Volante, Som"},
  ];

  React.useEffect(() => {
    setTotalIrmaos(irmaos.length);
  });

  const handleAddNew = (event) => {
    handleOpen();
    console.log("%cAddNew", "color:white;background-color:green", event);
    //return (alert("Add New"));
  };

  const handleEdit = (event) => {
    console.log("%cEdit", "color:black;background-color:yellow", event);
    //return (alert("Edit"));
  };

  const handleDelete = (event) => {
    console.log("%cDelete", "color:white;background-color:red", event);
    //return (alert("Delete"))
  };

  return (
    <>
      <Box sx={{display: "flex", height: "100vh"}}>
        {menu}
        <Box
          sx={{
            "& > :not(style)": {
              m: "auto",
              width: 600,
              height: 60 + totalIrmaos * 60 + "px", // 60 = 1 irmão, ..+60 px cada irmão
            },
          }}
          m="auto"
          display="flex"
          alignItems="center"
          width="1000px"
          height="98vh"
        >
          <Paper
            elevation={3}
            style={{backgroundColor: "#f3f3f3", position: "relative"}}
          >
            <List dense={true}>
              {irmaos.map((irmao) => (
                <ListItem
                  secondaryAction={[
                    <IconButton
                      onClick={(event) => {
                        handleEdit(event);
                      }}
                      key={"edit"}
                    >
                      <EditIcon />
                    </IconButton>,
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={(event) => {
                        handleDelete(event);
                      }}
                      key={"Delete"}
                    >
                      <DeleteIcon />
                    </IconButton>,
                  ]}
                >
                  <ListItemText
                    primary={irmao.nome}
                    secondary={irmao.funcoes}
                    key={"conteudo"}
                  />
                </ListItem>
              ))}
            </List>
            <Button
              style={{width: "31.25vw", height: "3rem"}}
              sx={{
                position: "absolute",
                bottom: "0",
                backgroundColor: "#e0e0e0",
                color: "#5b3c88",
                "&:hover": {backgroundColor: "#6b46a1", color: "white"},
              }}
              onClick={(e) => {
                handleAddNew(e);
              }}
            >
              <AddIcon />
            </Button>
          </Paper>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
              <TextField id="outlined-basic" label="Nome" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Funções"
                variant="outlined"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Button variant="contained" color="success">
                  Adicionar
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancelar
                </Button>
              </Box>
              {/* adicionar checkbox com todas as funções para ficar mais simples */}
            </Box>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
