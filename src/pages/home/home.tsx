import { useEffect, useState } from "react"
import { getPosts, getUser, getUserLoggedIn } from "../../api/apis"
import { Divider, Grid, Typography } from "@mui/material"
import NavBarHome from "../../components/NavBarHome";

interface Post {
    id: string;
    authorId: string;
    title: string;
    content: string;
    createdAt: string;
}

const Home = () => {
    const [userEmail, setUserEmail] = useState<string>("")

    const [posts, setPosts] = useState<Post[]>([])
    const [author, setAuthor] = useState<{ [key: string]: { firstName: string; lastName: string } }>({})

    const [authorId, setAuthorId] = useState<string[]>([])

    const getUserEmail = () => {
        getUserLoggedIn()
        .then((res) => {
            setUserEmail(res.data.email)
        })
    }

    const getPostListed = () => {
        getPosts()
            .then((res) => {
                setPosts(res.data)
                setAuthorId(res.data.map((post: Post) => post.authorId))
            })
    }

    const getAuthor = () => {
        for (let author of authorId) {
            getUser(author)
                .then((res) => {
                    setAuthor((previous) => ({
                        ...previous,
                        [author]: {
                            firstName: res.data.firstName,
                            lastName: res.data.lastName,
                        }
                    }))
                })
        }
    }

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    
    useEffect(() => {
        getUserEmail()
        getPostListed()
    }, [])

    useEffect(() => {
        getAuthor()
    }, [posts])

    /* const trimAndSlice = (content: string) => {
        const trim = content.trim().split('\n')
        const slice = trim.slice(0, 2)
        const join = slice.join('\n')
        //console.log(join)
        return join
    } */

    return (
        <>
            <Grid
                sx={{
                    position: 'fixed',
                    width: '100%'
                }}
            >
                <NavBarHome userEmail={userEmail}/>
            </Grid>
            <Grid
                container
                width={"100%"}
                justifyContent={"center"}
                alignContent={"center"}
                py={6}
            >
                <Grid
                    container item
                    p={6}
                    md={6}
                    gap={4}
                    sx={{
                        borderRight: "1px solid #e1e1e1",
                        borderLeft: "1px solid #e1e1e1"
                    }}
                >
                    {posts.map((post: Post) => (
                        <Grid
                            item
                            key={post.id}
                        >
                            <div>
                                <Grid
                                    display={"flex"}
                                    flexDirection={"row"}
                                    justifyContent={"flex-start"}
                                >
                                    <Typography
                                        mr={.5}
                                        typography={"subtitle1"}
                                    >
                                        {author[post.authorId]?.firstName}

                                    </Typography>
                                    <Typography
                                        mr={1}
                                        typography={"subtitle1"}
                                    >
                                        {author[post.authorId]?.lastName}
                                    </Typography>
                                    <Typography
                                        mr={1}
                                    >
                                        |
                                    </Typography>
                                    <Typography
                                        typography={"subtitle1"}
                                        sx={{
                                            fontWeight: "light",
                                        }}
                                    >
                                        {/* 
                                    
                                    1) Convierto el atributo createdAt obtenido del objeto Post 
                                    en un objeto del tipo Date
                                    2) toLocaleDateString es un método que le da formato de String
                                    al objeto Date que cree
                                    3) Recibe 2 parámetros. El primero es locale. Al
                                    pasar un undefined usa el formato local del navegador por default.
                                    De esta forma, la fecha toma el formato e idioma local
                                    4) El segundo parámetro es options. Aquí options es un objeto
                                    que especifíca como la fecha debe formatearse:
                                     - year en números,
                                     - month por su nombre y no un número
                                     - day en números

                                    */}
                                        {new Date(post.createdAt).toLocaleDateString(undefined, options)}
                                    </Typography>
                                </Grid>
                                <Typography
                                    //lineHeight={2}
                                    py={1}
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "h6.fontSize",
                                    }}
                                >
                                    {post.title}
                                </Typography>
                                <Typography
                                    typography={"body1"}
                                >
                                    {(post.content).substring(0, 200) + "..."}
                                </Typography>
                                <Divider
                                    sx={{
                                        pt: 4
                                    }}
                                />
                            </div>
                        </Grid>

                    ))}
                </Grid>
            </Grid>
        </>
    )
}
export default Home