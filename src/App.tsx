import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";
import Policy from "./pages/Policy";
import Programs from "./pages/Programs";
import Volunteer from "./pages/Volunteer";
import ScrollToTop from "./components/ScrollToTop";
import Events from './pages/Events';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
