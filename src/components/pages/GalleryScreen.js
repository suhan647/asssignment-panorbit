import { Box, Divider, Grid } from '@mui/material'
import React from 'react'
import SideBar from '../sidebar/SideBar'
import ChatBox from './chat/ChatBox'
import ToggleUser from './ToggleUser'

function GalleryScreen() {
  return (
    <>
      <Grid container>

        <Grid item xs={2.5} md={2.5} lg={2.5}>
          <SideBar />
        </Grid>


        <Grid className='divider_container' item xs={4} md={4} lg={4}>
          <div style={{ marginBottom: '20px' }}>
            <b className='heading' >Gallery</b>
          </div>
          <Divider />
        </Grid>

        <Grid className='divider_container2' item xs={5} md={5} lg={5}>
          <Box className='map_section'>
            <ToggleUser />
          </Box>
          <Divider />

          <Box sx={{ display: "flex", alignItems: 'center', width: "100%", height: '100%', justifyContent: 'center', position: 'relative', fontSize: "30px" }}>
            <h1 style={{ position: 'fixed', top: '40%', left: "40%", color: "#eeeeee" }}>Coming Soon</h1>
          </Box>

        </Grid>

        <ChatBox />
      </Grid>

    </>
  )
}

export default GalleryScreen