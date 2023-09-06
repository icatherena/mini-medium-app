import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <Grid container
            sx={{
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                alignContent: 'center',
                //backgroundColor: '#f0bf4c'
            }}
        >
            <Grid item container
                xs={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Grid item>
                    <Typography textAlign='justify' fontWeight={600} fontSize={'5em'} lineHeight={1.5}>Stay curious.</Typography>
                </Grid>
                <Grid item>
                    <Typography fontWeight={400} fontSize={'1.5em'} lineHeight={2} >Start reading, join Medium.</Typography>
                </Grid>
                <Grid item
                    lineHeight={3}
                >
                    <Link to={`/signup`}>
                        <Button
                            variant='outlined'
                            
                        >
                            Sign up with e-mail
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Typography fontWeight={400} fontSize={'1em'} lineHeight={3}>Already have an account?</Typography>
                </Grid>
                <Grid item
                    lineHeight={3}
                >
                    <Link to={`/signin`}>
                        <Button
                            variant='outlined'
                        >
                            Sign In
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Landing