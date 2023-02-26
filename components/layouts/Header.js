<<<<<<< HEAD
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KosenSNS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
=======
export default function Header() {
  return (
    <nav className="item-center m-auto flex py-3.5 md:py-10 md:pb-0">
      <div className="container mx-auto flex flex-wrap  items-center justify-between">
        <a className="itaric px-5 text-4xl font-bold italic">KosenSNS</a>
        <div className="">
          <ul className="flex">
            <li>
              <a className="block py-2 px-5 ">test</a>
            </li>
            <li>
              <a className="block py-2 px-5">test2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
>>>>>>> master
  );
}
