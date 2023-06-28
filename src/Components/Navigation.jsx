import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../App.css";

function Navigation(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (refname) => {
    setAnchorElNav(null);
    if (refname) {
      scrollTo(refname);
    }
  };

  const scrollTo = (element) => {
    window.scrollTo({
      top: element.current.offsetTop - 0.1 * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <AppBar
        position="fixed"
        style={{ height: "10vh", backgroundColor: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu(null)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {props.pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.ref)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Typography
              variant="h5"
              noWrap
              // component="a"
              // href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                // textAlign: "center",
                // paddingRight: "130px",
              }}
            >
              MENU
            </Typography> */}
            {/* <Box sx={{ display: "flex" }}> */}

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {props.pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => scrollTo(page.ref)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{ fontSize: "1.5rem", margin: "auto" }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                key={"icon"}
                onClick={() =>
                  window.open(
                    "http://www.linkedin.com/in/millania-sameh-773129216"
                  )
                }
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
                style={{
                  fontSize: "1.5rem",
                  margin: "auto",
                  paddingTop: "2px",
                  paddingLeft: "5px",
                }}
              >
                <LinkedInIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navigation;
