import React from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';


// importing all components from the component folder.. 
import Password from './components/Password';
import Username from './components/Username';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';
import Reset from './components/Reset';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Username></Username>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/password',
    element : <Password></Password>
  },
  {
    path : '/profile',
    element : <Profile></Profile>
  },
  {
    path : '/recovery',
    element : <Recovery></Recovery>
  },
  {
    path : '/*',
    element : <PageNotFound></PageNotFound>
  },
  {
    path : '/reset',
    element : <Reset></Reset>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
