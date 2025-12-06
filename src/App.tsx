import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Public Pages
import Index from "./Pages/Index";
import About from "./Pages/About";
import Clubs from "./Pages/Clubs";
import Newsletter from "./Pages/Newsletter";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

// Dashboard Pages
import DashboardHome from "./Pages/dashboard/DashboardHome";
import JobAlerts from "./Pages/dashboard/JobAlerts";
import CalendarPage from "./Pages/dashboard/CalendarPage";
import Members from "./Pages/dashboard/Members";
import Messages from "./Pages/dashboard/Messages";
import AdminPanel from "./Pages/dashboard/AdminPanel";
import ClubsManage from "./Pages/dashboard/ClubsManage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/jobs" element={<JobAlerts />} />
            <Route path="/dashboard/calendar" element={<CalendarPage />} />
            <Route path="/dashboard/members" element={<Members />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/admin" element={<AdminPanel />} />
            <Route path="/dashboard/clubs-manage" element={<ClubsManage />} />

            {/* Catch All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
