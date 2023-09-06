import { Box, Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NavBarNewPost = () => {
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
                        color: '#3f9de4'                        
                    }}
                >
                    <Box>
                        <Typography>
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
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    textAlign={'center'}
                    gap={1}

                >
                    <Button
                        variant = "outlined"
                        //onClick = {() = createNewPost()}
                        //disabled={!createPost}
                    >
                        Publish
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default NavBarNewPost