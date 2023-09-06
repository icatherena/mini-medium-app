import BASEURL from "./baseUrl";

const signUp = (firstName: string, lastName: string, email: string, password: string) => BASEURL.post(`auth/signup`, {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "password": password,
})

const signIn = (email: string, password: string) => BASEURL.post(`/auth/signin/`, {
    "email": email,
    "password": password,
})

const getUserLoggedIn = () => BASEURL.get(`/user/me`)

const getUser = (authorId: string) => BASEURL.get(`/user/${authorId}`)

const getPosts = () => BASEURL.get(`/post/`)

const createPost = (title: string, content: string) => BASEURL.post(`/post/`, {
    "title": title,
    "content": content,
})

export {
    signUp,
    signIn,
    getUserLoggedIn,
    getUser,
    getPosts,
    createPost
} 