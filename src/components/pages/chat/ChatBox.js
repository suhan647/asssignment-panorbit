import React, { useEffect, useState } from 'react';
import { Avatar, Box, IconButton, Popover, TextField, Typography } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const ChatBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const open = Boolean(anchorEl);

  const [messages, setMessages] = useState([]);

  const handleClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
    setMessage('');
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log(`Sending message '${message}' to ${selectedUser.name}`);
    const newMessage = {
      sender: selectedUser,
      content: message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await axios.get('https://panorbit.in/api/users.json');
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Box
        onClick={(event) => handleClick(event, null)}
        style={{
          display: 'flex',
          position: 'fixed',
          bottom: '0px',
          right: '20px',
          backgroundColor: '#2c65c8',
          color: 'white',
          padding: '10px',
          width: '150px',
          borderRadius: '10px 10px 0 0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '30px',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <ModeCommentIcon sx={{ marginLeft: '10px' }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: '5px' }}>
            Chat
          </Box>
        </Box>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ position: 'absolute', bottom: '70px' }}
      >
        <Box
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          {users.length > 0 ? (
            users.map((user) => (
              <div
                key={user.id}
                onClick={(event) => handleClick(event, user)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '5px',
                  padding: '8px',
                  cursor: 'pointer',
                }}
              >
                <Avatar alt={user.name} src={user.profilepicture} sx={{ width: 24, height: 24 }} />
                <small style={{ marginLeft: '10px' }}>{user.name}</small>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: '5px',
                  marginLeft: 'auto'
                }}>
                  <span style={{
                    height: "10px",
                    width: '10px',
                    backgroundColor: "green",
                    borderRadius: '50%',

                  }}></span>
                </Box>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Box>
      </Popover>

      {selectedUser && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          style={{ position: 'absolute', bottom: '70px', left: '-210px' }}
        >
          <Box
            style={{
              padding: '10px',
              width: '280px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              style={{
                backgroundColor: '#2c65c8',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                marginBottom: '10px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
            >
              <Avatar
                alt={selectedUser.name}
                src={selectedUser.profilepicture}
                sx={{ width: 24, height: 24, marginRight: '10px' }}
              />
              <Typography variant="subtitle1">{selectedUser.name}</Typography>

              <Box sx={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
              </Box>
            </Box>

            <Box
              style={{
                flex: 1,
                maxHeight: '180px',
                overflowY: 'auto',
                marginBottom: '10px',
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <Avatar
                    alt={msg.sender.name}
                    src={msg.sender.profilepicture}
                    sx={{ width: 24, height: 24 }}
                  />
                  <div
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#f1f1f1',
                      padding: '5px',
                      borderRadius: '10px',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </Box>
            <div style={{ display: 'flex' }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={message}
                onChange={handleInputChange}
                style={{ marginRight: '10px' }}
              />
              <IconButton onClick={handleSendMessage} color="primary">
                <SendIcon />
              </IconButton>
            </div>
          </Box>
        </Popover>
      )}
    </>
  );
};

export default ChatBox;
