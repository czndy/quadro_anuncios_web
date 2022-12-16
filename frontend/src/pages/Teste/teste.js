import Dashboard from "../Dashboard/dashboard";
import Menu from "../Menu/menu"
import { Box } from "@mui/material";

export default function Teste(){
    return(
        <Box sx={{display: "flex", height: "100vh", width:"100%"}}>
            <Menu/>
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
            </Box>
        </Box>
    )
}