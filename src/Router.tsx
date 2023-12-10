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
import ProfileEdit from "./pages/ProfileEdit/index.tsx";
import PatientList from "./pages/PatientList/index.tsx";
import Warnings from "./pages/Warnings/index.tsx";
import Reports from "./pages/Reports/index.tsx";
import ServicesProvided from "./pages/ServicesProvided/index.tsx";
import FinancialManagement from "./pages/FinancialManagement/index.tsx";
import ZapScheduling from "./pages/ZapScheduling/index.tsx";
import ZapCampaign from "./pages/ZapCampaign/index.tsx";


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
                <Route path="/admin/feedback/:id" element={<FeedbackDetails/>} />
                <Route path="/admin/calendar" element={<Calendar/>} />
                <Route path="/admin/employee" element={<Employee/>} />
                <Route path="/admin/patients" element={<PatientList/>} />
                <Route path="/admin/profile" element={<ProfileEdit/>} />
                <Route path="/admin/warnings" element={<Warnings/>} />
                <Route path="/admin/reports" element={<Reports/>} />
                <Route path="/admin/servicesprovided" element={<ServicesProvided/>} />
                <Route path="/admin/financialmanagement" element={<FinancialManagement/>} />
                <Route path="/admin/zapscheduling" element={<ZapScheduling/>} />
                <Route path="/admin/zapcampaign" element={<ZapCampaign/>} />
                <Route path='/admin/oldadmin' element={<Navigate to="/admin"/>} />
            </Route>
        </Routes>
    )
}
