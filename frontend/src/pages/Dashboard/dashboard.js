import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
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

const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: "border-box"},
        }}
      >
        <Toolbar />
        <Box sx={{overflow: "auto"}}>
          <List>
            <ListItem key={"acc"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DescriptionTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Partes"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"abb"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Mecânicas"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"aaa"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CommentTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Discursos"} />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem key={"add"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAddTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Cadastro"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"aee"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NoteAddTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={"Cadastro Partes"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
