import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <article>
        <div id="logo">
          <Link to="/">Students CRUD</Link>
        </div>
        <div id="menu">
          <a href="">Menu</a>
        </div>
      </article>
    </section>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuOpenOutlined></MenuOpenOutlined>
    //         <Typography>
    //           <Link to="/">Students CRUD</Link>
    //         </Typography>
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default Navbar;
