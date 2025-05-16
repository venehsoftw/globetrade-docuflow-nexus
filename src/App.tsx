
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import Dashboard from "./pages/Dashboard";
import NewCommercialActivity from "./pages/NewCommercialActivity";
import NewPassword from "./pages/NewPassword";
import Redirect from "./pages/Redirect";
import NotFound from "./pages/NotFound";
import Reports from "./pages/Reports";
import Search from "./pages/Search";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-commercial-activity" element={<NewCommercialActivity />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/search" element={<Search />} />
          <Route 
            path="/redirect-dashboard" 
            element={
              <Redirect 
                target="/dashboard" 
                message="We are redirecting you to initial dashboard. Please wait" 
              />
            } 
          />
          <Route 
            path="/redirect-login" 
            element={
              <Redirect 
                target="/login" 
                message="We are redirecting you to Login page. Please wait a few moments..." 
              />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
