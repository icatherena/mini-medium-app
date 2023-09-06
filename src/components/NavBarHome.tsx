import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import { Avatar, Box, Button, Divider, Grid, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material"

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import IconButton from '@mui/material/IconButton'
import Logout from '@mui/icons-material/Logout'

const NavBarHome = ({userEmail}: {userEmail: string}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    
    const signOut = () => {
        window.sessionStorage.setItem('token', "")
        navigate('/signin')
    }

    return (
        <Grid container
            sx={{
                background: 'rgb(255, 255, 255)',
                borderBottom: '1px solid #e1e1e1',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                py: '1.5em',
                px: '4em',
                width: '100vw'
            }}
        >
            <Grid item
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}
            >
                <Link to={`/home`}
                    style={{
                        textDecoration: 'none',
                        alignSelf: 'center',
                        color: '#3f9de4',
                    }}
                >
                    <Box>
                        <Typography >
                            MINI-MEDIUM
                        </Typography>
                    </Box>
                </Link>
            </Grid>
            <Grid item
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}>
                <Link to={`/create/post`} style={{ textDecoration: 'none' }}>
                    <Button
                        variant="outlined"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                gap: 1,
                                p: '.2em'
                            }}
                        >
                            <CreateOutlinedIcon fontSize='small' />
                            <Typography fontSize='small'>
                                Write
                            </Typography>
                        </Box>
                    </Button>
                </Link>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', height: 35}}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 30, height: 30 }}/>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <ListItemIcon>
                            {userEmail}
                        </ListItemIcon>
                    </MenuItem>
                    <Divider/>
                    <MenuItem 
                        onClick = {signOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Sign Out
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid >
    )
}

export default NavBarHome