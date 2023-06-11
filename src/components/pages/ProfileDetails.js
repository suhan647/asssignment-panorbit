import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/SideBar'
import '../../App.css'
import { Avatar, Divider, Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import ToggleUser from './ToggleUser'
import { useSelector } from 'react-redux'
import ChatBox from './chat/ChatBox'

function ProfileDetails() {
  const [userDetails, setUserDetails] = useState('')
  const id = useSelector((state) => state.id.idofuser)

  async function getUserDetails() {
    try {
      let data = await axios.get('https://panorbit.in/api/users.json')
      let result = data.data.users.find((user) => user.id === parseInt(id))
      setUserDetails([result]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [id])

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={2.5} lg={2.5}>
          <Sidebar />
        </Grid>

        {userDetails ? (
          userDetails.map((user) => (
            <React.Fragment key={user.id}>
              <Grid className='divider_container' item xs={12} md={4} lg={4}>
                <div style={{ marginBottom: '20px' }}>
                  <b className='heading'>Profile</b>
                </div>
                <Divider />

                {/* personnel Details Section */}
                <div>
                  <Box className='userdetails' sx={{ marginTop: '10px' }}>
                    <Avatar
                      alt={user.name}
                      src={user.profilepicture}
                      sx={{ width: 100, height: 100 }}
                    />
                  </Box>

                  <Box className='userdetails'>
                    <b>{user.name}</b>
                  </Box>

                  <Box className='userdetails1'>
                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Username:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>{user.username}</b>
                        </small>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Email:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>{user.email}</b>
                        </small>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Phone:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>{user.phone}</b>
                        </small>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Website:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>www.example.com</b>
                        </small>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box sx={{ marginTop: '20px' }}>
                    <Divider />
                  </Box>

                  {/* company Details Section */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <b style={{ color: 'grey' }}>Company</b>
                  </Box>
                  <Box className='userdetails1'>
                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Name:</span>
                      </Grid>
                      <Grid item xs={4}>
                        <small>
                          <b className='userSingleDetail'>
                            {user.company.name}
                          </b>
                        </small>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Catchphrase:</span>
                      </Grid>
                      <Grid item xs={5}>
                        <small>
                          <b className='userSingleDetail'>
                            {user.company.catchPhrase}
                          </b>
                        </small>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>bs:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>{user.company.bs}</b>
                        </small>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </Grid>

              <Grid className='divider_container2' item xs={12} md={5} lg={5}>
                <Box className='map_section'>
                  <ToggleUser />
                </Box>
                <Divider />

                {/* Address Section */}
                <div style={{ marginLeft: '20px' }}>
                  <Box>
                    <b style={{ color: 'grey' }}>Address</b>
                  </Box>

                  <Box sx={{ marginLeft: '40px' }}>
                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Street:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>
                            {user.address.street}
                          </b>
                        </small>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>Suite:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>
                            {user.address.suite}
                          </b>
                        </small>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>City:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>
                            {user.address.city}
                          </b>
                        </small>
                      </Grid>
                    </Grid>

                    <Grid container sx={{ mt: '2px' }} spacing={1}>
                      <Grid item xs={4}>
                        <span className='detailsTag'>ZipCode:</span>
                      </Grid>
                      <Grid item xs={8}>
                        <small>
                          <b className='userSingleDetail'>
                            {user.address.zipcode}
                          </b>
                        </small>
                      </Grid>
                    </Grid>

                    <div style={{ border: '10px solid white', borderRadius: '10px' }}>
                      <img
                        style={{ borderRadius: '10px' }}
                        src='https://www.google.com/maps/d/thumbnail?mid=1qJTcq5CaMdI4s4mNWp9Mi7QpJHQ&hl=en'
                        alt={user.name}
                        height='250px'
                        width='450px'
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '30px' }}>
                          <b style={{ color: '#D3D3D3' }}>Lat:</b>
                          {user.address.geo.lat}
                        </div>
                        <div>
                          <b style={{ color: '#D3D3D3' }}>Long:</b>
                          {user.address.geo.lng}
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>

                <ChatBox />
              </Grid>
            </React.Fragment>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>
    </>
  )
}

export default ProfileDetails;
