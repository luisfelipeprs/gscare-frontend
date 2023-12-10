import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

import Home from './pages/Home/index.tsx';
import FormLeads from './pages/FormLeads/index.tsx';
import AdminHome from './pages/AdminHome/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import FeedbackDetails from './pages/FeedbackDetails/index.tsx';
import Feedback from './pages/Feedback/index.tsx';
import Login from './pages/Login/index.tsx';
import Register from './pages/Register/index.tsx';
import Calendar from "./pages/Calendar/index.tsx";
import Employee from "./pages/Employee/index.tsx";
// import Patients from "./pages/Patients/index.tsx";
import ProfileEdit from "./components/ProfileEdit/index.tsx";
import PatientList from "./components/PatientList/index.tsx";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} errorElement={<ErrorPage/>} />
            <Route path="/form" element={<FormLeads/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route path="/admin" element={<DefaultLayout />}>
                <Route path="/admin/" element={<AdminHome/>} />
                <Route path="/admin/feedback" element={<Feedback/>} />
                <Route path="/admin/calendar" element={<Calendar/>} />
                <Route path="/admin/employee" element={<Employee/>} />
                <Route path="/admin/profile" element={<ProfileEdit/>} />
                <Route path="/admin/patients" element={<PatientList/>} />
                <Route path="/admin/feedback/:id" element={<FeedbackDetails/>} />
                <Route path='/admin/oldadmin' element={<Navigate to="/admin"/>} />
            </Route>
        </Routes>
    )
}
