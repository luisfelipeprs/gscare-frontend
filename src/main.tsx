import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/index.tsx';
import FormLeads from './pages/FormLeads/index.tsx';
import App from './App.tsx';
import AdminHome from './pages/AdminHome/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import FeedbackDetails from './pages/FeedbackDetails/index.tsx';
import Feedback from './pages/Feedback/index.tsx';
import Patients from './pages/Patients/index.tsx';
import Calendar from './pages/Calendar/index.tsx';
import EmployeeList from './components/EmployeeList/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/form",
    element: <FormLeads />
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <AdminHome/>
      },
      {
        path: "/admin/feedback",
        element: <Feedback/>
      },
      {
        path: "/admin/employee",
        element: <EmployeeList/>
      },
      {
        path: "/admin/patients",
        element: <Patients/>
      },
      {
        path: "/admin/calendar",
        element: <Calendar/>
      },
      {
        path: "/admin/feedback/:id",
        element: <FeedbackDetails/>
      },
      {
        path: '/admin/oldadmin',
        // ? redirecionamento
        element: <Navigate to="/admin"/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
