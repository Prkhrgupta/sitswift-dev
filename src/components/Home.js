import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Table from "./Table";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 140;

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default function Home() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate('/login');
  };

   const handleListItemIcon = () => {
    navigate('/transaction-list');
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={styles.toolbar}>
          <Typography variant="h6" noWrap component="div">
            SIT-Swift
          </Typography>
          <LogoutIcon
            onClick={handleLogoutClick}
            style={{ cursor: "pointer" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["List"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon onClick={handleListItemIcon}>
                  {index === 0 ? <FormatListNumberedIcon /> : <p />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Table />
      </Box>
    </Box>
  );
}