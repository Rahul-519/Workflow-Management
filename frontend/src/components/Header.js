import React from 'react';
import { AppBar, Typography, Toolbar, Box ,Button} from "@mui/material";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <AppBar 
    position="stticky"
    sx={{ background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);" }}
    >
      <Toolbar>
        <Typography variant="h4">Operation Workflow Management</Typography>

        <Box display="flex" marginLeft="auto">
          <Button LinkComponent={Link} to="/auth"
          variant ='contained' sx={{margin:1, borderRadius:10}} color="warning">Login</Button>
          <Button LinkComponent={Link} to="/auth"
          variant ='contained'  sx={{margin:1, borderRadius:10}} color="warning">Signup</Button>
          <Button LinkComponent={Link} to="/auth"
          variant ='contained'  sx={{margin:1, borderRadius:10}} color="warning">LogOut</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;