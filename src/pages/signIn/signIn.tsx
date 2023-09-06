import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import { Button, Grid, TextField, Typography } from "@mui/material";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { signIn } from "../../api/apis";

const SignIn = () => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const navigate = useNavigate()

    const signInUser = () => {
        signIn(userEmail, userPassword)
        .then((res) => {
            window.sessionStorage.setItem("token", res.data.token);
            navigate('/home')
        })
        .catch((error) => {
            toast.error("User not found")
        })
    };

    const [userEmailError, setUserEmailError] = useState("")

    const validateEmail = (value: string) => {
        if (value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            setUserEmail(value)
            setUserEmailError("")
        } else {
            setUserEmailError("Email is required. Cannot be empty")
        }
    }
    
    const [userPasswordError, setUserPasswordError] = useState("")

    const validatePassword = (value: string) => {
        if (value.match(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])([a-zA-Z0-9@#$%^&+=!]{8,})$/
        )) {
            setUserPassword(value)
            setUserPasswordError("")   
        } else {
            setUserPasswordError("Password must be at least 8 characters")
        }
    }

    /* const notify = () => {
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
  
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
  
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
  
        toast("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
    };   */

    return (
        <Grid container
            width = {"100%"}
            height = {"100vh"}
            justifyContent = {"center"}
            alignContent = {"center"}
        >
            <Grid
                p = {5}
                md = {3}
                gap = {2}
                container item
                flexDirection = {"column"}
                borderRadius = {2}
                sx={{
                    //backgroundColor: "#f5f5f5"
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
                        Sign In
                    </Typography>
                </Grid>
                <Grid item >
                    <TextField
                        error = {Boolean(userEmailError)}
                        helperText = {userEmailError}
                        label = "Email adress"
                        placeholder = "username@example.com"
                        type = "email"
                        required = {true}
                        variant="standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => {
                            //setUserEmail(e.target.value)
                            validateEmail(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        error = {Boolean(userPasswordError)}
                        helperText = {userPasswordError}
                        label = "Password"
                        placeholder = "example"
                        type = "password"
                        required = {true}
                        variant = "standard"
                        sx = {{
                            width: "100%"
                        }}
                        onChange = {(e) => {
                            //setUserPassword(e.target.value);
                            validatePassword(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item container
                    pt = {2}
                    justifyContent = {"center"}
                >
                    <Button
                        variant = "outlined"
                        onClick = {() => signInUser()}
                        disabled = {userPassword && userEmail ? false : true}
                    >
                        Sign in
                    </Button>

                    <ToastContainer />
                    
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignIn;
