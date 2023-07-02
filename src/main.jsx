import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './shared/error/ErrorPage.jsx';
import Provider from './private/provider/Provider.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx'
import Moderator from './moderator/Moderator.jsx';
import Classes from './moderator/moderetor/Classes.jsx';
import Addclasses from './moderator/moderetor/Addclasses.jsx';
import ApppliedStudents from './moderator/moderetor/ApppliedStudents.jsx';
import ModeHome from './moderator/moderetor/ModeHome.jsx';
import Admin from './Admin/Admin.jsx';
import Adminhome from './Admin/adminpage/Adminhome.jsx';
import Admincourses from './Admin/adminpage/Admincourses.jsx';
import Users from './Admin/adminpage/Users.jsx';
import Home from './pages/home/Home.jsx';
import Instractors from './pages/instractors/Instractors.jsx';
import AllClasses from './pages/classes/AllClasses.jsx';
import MyClasses from './user/MyClasses.jsx';
import Privateuser from './private/Private/Privateuser.jsx';
import PrivateIns from './private/Private/PrivateIns.jsx';
import Private_Admin from './private/Private/Private_Admin.jsx';
import Loading from './shared/loading/Loading.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: 'allclasses',
        element: <AllClasses></AllClasses>
      }, {
        path: 'myclasses',
        element: <Privateuser><MyClasses></MyClasses></Privateuser>
      }, {
        path: 'istractors',
        element: <Instractors></Instractors>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      }, {
        path: 'loader',
        element:<Loading></Loading>
      }
    ],
  }, {
    path: 'moderator',
    element: <PrivateIns><Moderator></Moderator></PrivateIns>,
    children: [
      {
        path: 'modhome',
        element: <ModeHome></ModeHome>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }, {
        path: 'addClasses',
        element: <Addclasses></Addclasses>
      }, {
        path: 'appliedStudemts',
        element: <ApppliedStudents></ApppliedStudents>
      }
    ]
  }, {
    path: 'admin',
    element: <Private_Admin><Admin></Admin></Private_Admin>,
    children: [
      {
        path: 'home',
        element: <Adminhome></Adminhome>
      }, {
        path: 'courses',
        element: <Admincourses></Admincourses>
      }, {
        path: 'users',
        element: <Users></Users>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
