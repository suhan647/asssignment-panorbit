import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Stack } from '@mui/system';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NaviStyeComp = () => {
  return <div style={{ backgroundColor: "white", color: '#bfc7d5', borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%', width: "30px", height: '30px', display: "flex", justifyContent: "flex-end", alignItems: "center", marginLeft: "-30px" }}><KeyboardArrowRightIcon fontSize='small'
  /></div>
}


function SideBar() {
  const id = useSelector((state) => state.id.idofuser);
  const location = useLocation().pathname.split('/')[1];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#4053c8',
        color: '#c0c0c0',
        justifyContent: 'center',
        borderRadius: "30px",
        margin: "3px"
      }}
    >
      <div sx={{ backgroundColor: '#4053c8', }}>
        <Box sx={{ paddingLeft: '16px' }}>
          <Stack spacing={2} sx={{ marginLeft: "30px" }}>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography sx={{ marginBottom: '8px' }}>
                <NavLink
                  to={`/profiledetails/${id}`}
                  style={{ textDecoration: 'none', fontSize: '15px', color: "#9595de" }}
                >
                  Profile
                </NavLink>
              </Typography>
              {location === 'profiledetails' && <NaviStyeComp />}
            </div>
            <Divider color="#9595de" variant="inset" sx={{ width: "180px" }} />
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography sx={{ marginBottom: '8px' }}>
                <NavLink
                  to={`/postdetails/${id}`}
                  style={{ textDecoration: 'none', fontSize: '15px', color: "#8a8edc" }}
                >
                  Posts
                </NavLink>
              </Typography>
              {location === 'postdetails' && <NaviStyeComp />}
            </div>
            <Divider sx={{ width: "180px" }} color="#9595de" variant="inset" />
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography sx={{ marginBottom: '8px' }}>
                <NavLink
                  to={`/gallery/${id}`}
                  style={{ textDecoration: 'none', fontSize: '15px', color: "#9595de" }}
                >
                  Gallery
                </NavLink>
              </Typography>
              {location === 'gallery' && <NaviStyeComp />}
            </div>
            <Divider sx={{ width: "180px" }} color="#9595de" variant="inset" />
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography sx={{ marginBottom: '8px' }}>
                <NavLink
                  to={`/todo/${id}`}
                  style={{ textDecoration: 'none', fontSize: '15px', color: "#9595de" }}
                >
                  ToDo
                </NavLink>
              </Typography>
              {location === 'todo' && <NaviStyeComp />}
            </div>
            <Divider sx={{ width: "180px" }} color="#9595de" variant="inset" />
          </Stack>
        </Box>

      </div>
    </Box>
  );
}

export default SideBar;
