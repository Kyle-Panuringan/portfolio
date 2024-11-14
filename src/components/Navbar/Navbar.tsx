import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navButtons = ["Home", "About Me", "Personal Projects", "Contact"];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" id="home">
      <Toolbar
        sx={{
          bgcolor: "secondary.main",
          borderBottom: 1,
          borderColor: "primary.main",
          boxShadow: "0 0 7px red",
          zIndex: 3,
        }}
      >
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <Typography variant="h6">KYLE</Typography>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
            }}
          >
            PANURINGAN
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ display: { xs: "none", md: "block" } }}>
          {navButtons.map((navButton, i) => {
            return (
              <Button
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  "&:hover": { background: "transparent", color: "red" },
                }}
                key={i}
                href={`#${navButton.toLowerCase().replace(/\s/g, "")}`}
              >
                {navButton}
              </Button>
            );
          })}
        </Stack>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            id="navButton"
            onClick={handleClick}
            aria-controls={open ? "navMenu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ padding: "0px" }}
          >
            <CssBaseline />
            <MenuIcon />
          </IconButton>
          <Menu
            id="navMenu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              "aria-labelledby": "navButton",
              sx: { py: "0px" },
            }}
            onClose={handleClose}
          >
            {navButtons.map((navButton, i) => {
              return (
                <MenuItem
                  component="a"
                  onClick={handleClose}
                  key={i}
                  sx={{ justifyContent: "center" }}
                  href={`#${navButton.toLowerCase().replace(/\s/g, "")}`}
                >
                  {navButton}
                </MenuItem>
              );
            })}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
