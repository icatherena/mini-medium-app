import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp/signUp';
import Home from './pages/home/home';
import SignIn from './pages/signIn/signIn';
import NewPost from './pages/newPost/newPost';
import AuthRoute from './route/AuthRoute';
import Landing from './pages/landing/landing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route element={<AuthRoute/>}>
        <Route 
          path='/home' 
          element={<Home/>} 
        />
        <Route 
          path='/create/post' 
          element={<NewPost/>} 
        />
      </Route>
    </Routes>
  );
}

export default App;
