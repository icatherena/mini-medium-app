import { useState } from "react"

import { createPost } from "../../api/apis"

import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import NavBarNewPost from "../../components/NavBarNewPost"
import { Link, useNavigate } from "react-router-dom"

const NewPost = () => {
    //const [authorId, setAuthorId] = useState("")

    const navigate = useNavigate()

    const [titleError, setTitleError] = useState("")
    const [contentError, setContentError] = useState("")

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const createNewPost = () => {
        createPost(title, content)
            .then((res) => {
                setTitle(res.data.title)
                setContent(res.data.content)
                navigate('/home')
            })
    }

    const validateTitle = (value: string) => {
        if (value.length <= 100) {
            setTitle(value)
            setTitleError("")
        } else {
            setTitleError("Title is too long")
        }
    }

    const validateContent = (value: string) => {
        if (value.length <= 1600) {
            setContent(value)
            setContentError("")
        } else {
            setContentError("Content is too long")
        }
    }

    return (
        <>
            <Grid
                sx={{
                    position: 'fixed',
                    width: '100%'
                }}
            >
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
                        onClick = {() => createNewPost()}
                        disabled = {title && content ? false : true}
                    >
                        Publish
                    </Button>
                </Box>
            </Grid>
        </Grid>
            </Grid>
            <Grid container
                width={"100%"}
                justifyContent={"center"}
                alignContent={"center"}
                py={10}
            >
                <Grid item container
                    p={6}
                    md={6}
                    gap={4}
                    sx={{
                        borderRight: "1px solid #e1e1e1",
                        borderLeft: "1px solid #e1e1e1",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Grid item>
                        <TextField
                            error = {Boolean(titleError)}
                            helperText = {titleError}
                            variant="standard"
                            fullWidth
                            placeholder="Title"
                            onChange={(e) => validateTitle(e.target.value)}
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            error = {Boolean(contentError)}
                            helperText = {contentError}
                            variant="standard"
                            multiline
                            fullWidth
                            size="small"
                            placeholder="Tell your story..."
                            onChange={(e) => validateContent(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default NewPost