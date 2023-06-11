import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Button, Divider, Stack } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userId } from '../../redux/slices/IdSlice';

export default function ToggleUser() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState('');
  const [newUser, setNewUser] = React.useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function getUserDetails() {
    try {
      let data = await axios.get('https://panorbit.in/api/users.json');
      const userId = parseInt(id);
      const list = data.data.users;
      let result = list.find((user) => user.id === userId);
      const userIdex = list.findIndex(obj => obj.id === userId);
      let nextUsers = list.slice(userIdex + 1, userIdex + 3);
      console.log('userIdex', userIdex);
      console.log('nextUsers', nextUsers);
      setUserDetails([result]);
      setNewUser(nextUsers);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getUserDetails();
  }, [id]);

  function handleToggleUser(id) {
    navigate(`/profiledetails/${id}`);
    dispatch(userId(id));
    handleClose();
  }

  return (
    <div>
      {userDetails ? (
        userDetails.map((user) => (
          <>
            <Stack
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              direction="row"
              spacing={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',

              }}
            >
              <Avatar sx={{ width: 24, height: 24, cursor: 'pointer' }} alt={user.name} src={user.profilepicture} />
              <Box sx={{ cursor: 'pointer' }}>{user.name}</Box>
            </Stack>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
              PaperProps={{
                style: {
                  borderRadius: '40px',
                },
              }}
            >
              <MenuItem sx={{ ':hover': { backgroundColor: 'transparent' } }}>
                <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '15vw', height: '15vh', padding: "10px" }}>

                  <Box>
                    <Avatar
                      sx={{ display: 'flex', marginLeft: '10px', width: 70, height: 70, marginTop: '10px' }}
                      alt={user.name}
                      src={user.profilepicture}
                    />
                  </Box>

                  <Box>
                    <b>{user.name}</b>
                  </Box>

                  <Box>
                    <b style={{ color: 'grey', fontSize: '10px' }}>{user.email}</b>
                  </Box>

                </Box>
              </MenuItem>

              {newUser ? (
                newUser.map((users) => (
                  <MenuItem sx={{ ':hover': { backgroundColor: 'transparent' } }}>
                    <Box sx={{ height: '30px', width: '15vw' }} onClick={() => handleToggleUser(users.id)}>
                      <Divider sx={{ margin: '8px' }} />
                      <Box sx={{ display: 'flex', height: '30px', overflow: 'scroll', alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar
                          sx={{ width: 30, height: 30 }}
                          alt={users.name}
                          src={users.profilepicture}
                        />
                        <small style={{ paddingLeft: "10px" }}>{users.name}</small>
                      </Box>
                    </Box>
                  </MenuItem>
                ))
              ) : (
                <p>Loading...</p>
              )}

              <MenuItem sx={{ display: "flex", justifyContent: 'center', ':hover': { backgroundColor: 'transparent' } }}>
                <div style={{ marginTop: '20px' }}>
                  <Button variant="contained" sx={{ backgroundColor: 'red', borderRadius: "20px" }} onClick={() => navigate('/')}>
                    Sign Out
                  </Button>

                </div>
              </MenuItem>
            </Menu>
          </>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
