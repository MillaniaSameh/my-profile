import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../App.css";

function Navigation(props) {
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
            <Box sx={{ display: "flex" }}>
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
                {/* <NavLink to="www.linkedin.com/in/millania-sameh-773129216"> */}
                <LinkedInIcon />
                {/* </NavLink> */}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navigation;
