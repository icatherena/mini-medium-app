import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { signUp } from "../../api/apis"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    
    const [passwordsMatch, setPasswordsMatch] = useState(false)

    const navigate = useNavigate()
    
    useEffect(() => {
        if (password === passwordConfirmation) {
            setPasswordsMatch(true)
        }
    }, [])

    const signUpUser = () => {
        if (passwordsMatch) {
            signUp(firstName, lastName, email, password)
            .then((res) => {
                window.sessionStorage.setItem("token", res.data.token);
            }); 
        }
        navigate('/home')
    }

    const validateFirstName = (value: string) => {
        if (value.length > 0) {
            setFirstName(value)
            setFirstNameError("")
        } else {
            setFirstNameError("First name is required")
        }
    }

    const validateLastName = (value: string) => {
        if (value.length > 0) {
            setLastName(value)
            setLastNameError("")
        } else {
            setLastNameError("Last name is required")
        }
    }

    const validateEmail = (value: string) => {
        if (value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            setEmail(value)
            setEmailError("")
        } else {
            setEmailError("Email is required. Cannot be empty")
        }
    }

    const validatePassword = (value: string) => {
        if (value.match(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])([a-zA-Z0-9@#$%^&+=!]{8,})$/
        )) {
            setPassword(value)
            setPasswordError("")   
        } else {
            setPasswordError("Password must be at least 8 characters, contain at leat 1 number, 1 uppercase letter and 1 special character.")
        }
    }

    const validatePasswordConfirmation = (value: string) => {
        if (value.match(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])([a-zA-Z0-9@#$%^&+=!]{8,})$/
        )) {
            setPasswordConfirmation(value)
            setPasswordConfirmationError("")   
        } else {
            setPasswordConfirmationError("Password must be at least 8 characters, contain at leat 1 number, 1 uppercase letter and 1 special character.")
        }
    }

    return (
        <Grid 
            container
            width = {"100%"}
            height = {"100vh"}
            justifyContent = {"center"}
            alignContent = {"center"}
        >
            <Grid
                container item
                p = {5}
                md = {3}
                gap = {2}
                flexDirection = {"column"}
                borderRadius = {2}
                sx={{
                    border: "1px solid #2196f3",
                }}
            >
                <Grid item>
                    <Typography
                        sx={{
                            textAlign: "center", 
                            fontSize: "1.5em"
                        }}
                    >
                        Sign Up
                    </Typography>
                </Grid>
                <Grid item >
                    <TextField
                        error = {Boolean(firstNameError)}
                        helperText = {firstNameError}
                        label = "First Name"
                        placeholder = "Jane"
                        required = {true}
                        variant = "standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => validateFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item >
                    <TextField
                        error = {Boolean(lastNameError)}
                        helperText = {lastNameError}
                        label = "Last Name"
                        placeholder = "Doe"
                        required = {true}
                        variant = "standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => validateLastName(e.target.value)}
                    />
                </Grid>
                <Grid item >
                    <TextField
                        error = {Boolean(emailError)}
                        helperText = {emailError}
                        label = "Email adress"
                        placeholder = "janedoe@example.com"
                        type = "email"
                        required = {true}
                        variant = "standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => validateEmail(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        error = {Boolean(passwordError)}
                        helperText = {passwordError}
                        label = "Password"
                        placeholder = "example"
                        type = "password"
                        required = {true}
                        variant = "standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => validatePassword(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        error = {Boolean(passwordConfirmationError)}
                        helperText = {passwordConfirmationError}
                        label = "Password Confirmation"
                        placeholder = "example"
                        type = "password"
                        required = {true}
                        variant = "standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => validatePasswordConfirmation(e.target.value)}
                    />
                </Grid>
                <Grid item container
                    pt = {2}
                    justifyContent = {"center"}
                >
                    <Button
                        variant = "outlined"
                        onClick = {() => signUpUser()}
                        disabled = {firstName && lastName && email && password && passwordConfirmation ? false : true}
                    >
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignUp