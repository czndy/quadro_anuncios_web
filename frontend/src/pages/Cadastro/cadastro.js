import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../Login/login.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export default function Cadastro({menu}) {
    return (
        <Box sx={{display: "flex", height: "100vh"}}>
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
                <Paper elevation={3} style={{backgroundColor: "#f3f3f3"}}>
                    <List dense={true}>
                        
                        <ListItem secondaryAction={[
                            <IconButton>
                                <EditIcon/>
                            </IconButton>,
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                        ]}>
                            <ListItemText
                                primary="Guilherme Pereira"
                                secondary="Indicador, Volante, Som"
                            />
                        </ListItem>
                        
                    </List>
                    <Button style={{width:'31.25vw'}} sx={{backgroundColor:"#e0e0e0",color: "#5b3c88", "&:hover": { backgroundColor: "#6b46a1", color: "white"}}}>
                        <AddIcon/>
                    </Button>
                </Paper>
            </Box>
        
        
        </Box>

    )
}
