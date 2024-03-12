import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

import HomeLandingPage from './pages/@landing-page/Home/index.tsx';
import FormLeads from './pages/@landing-page/FormLeads/index.tsx';
import Home from './pages/@app/Home/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import { FeedbackDetails } from './pages/@app/FeedbackDetails/index.tsx';
import Feedback from './pages/@app/Feedback/index.tsx';
import Calendar from "./pages/@app/Calendar/index.tsx";
import ProfileEdit from "./pages/@app/ProfileEdit/index.tsx";
import Warnings from "./pages/@app/Warnings/index.tsx";
import Reports from "./pages/@app/Reports/index.tsx";
import ServicesProvided from "./pages/@app/ServicesProvided/index.tsx";
import { ZapScheduling } from "./pages/@app/ZapScheduling/index.tsx";
import ZapCampaign from "./pages/@app/ZapCampaign/index.tsx";
import Patient from "./pages/@app/Patient/index.tsx";
import { Login } from "./pages/@auth/Login/index.tsx";
import { LoginAdmin } from "./pages/@auth/LoginAdmin/index.tsx";
import { Register } from "./pages/@auth/Register/index.tsx";
import { ForgotPassword } from "./pages/@auth/ForgetPassword/index.tsx";
import { Employee } from "./pages/@app/Employee/index.tsx";
import Dashboard from "./pages/@app/Dashboard/index.tsx";
import Financial from "./pages/@app/Financial/index.tsx";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomeLandingPage />} errorElement={<ErrorPage />} />
            <Route path="/form" element={<FormLeads />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/admin" element={<DefaultLayout />}>
                <Route path="/admin/" element={<Home />} />
                <Route path="/admin/feedback" element={<Feedback />} />
                <Route path="/admin/feedback/:id" element={<FeedbackDetails />} />
                <Route path="/admin/calendar" element={<Calendar />} />
                <Route path="/admin/employee" element={<Employee />} />
                <Route path="/admin/patients" element={<Patient />} />
                <Route path="/admin/profile" element={<ProfileEdit />} />
                <Route path="/admin/warnings" element={<Warnings />} />
                <Route path="/admin/reports" element={<Reports />} />
                <Route path="/admin/servicesprovided" element={<ServicesProvided />} />
                <Route path="/admin/zapscheduling" element={<ZapScheduling />} />
                <Route path="/admin/zapcampaign" element={<ZapCampaign />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path='/admin/oldadmin' element={<Navigate to="/admin" />} />
                <Route path="/admin/financial" element={<Financial />} />
            </Route>
        </Routes>
    )
}
