
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/dashboard/tenants" element={<Index />} />
          <Route path="/dashboard/users" element={<Index />} />
          <Route path="/dashboard/channels" element={<Index />} />
          <Route path="/dashboard/chatbot" element={<Index />} />
          <Route path="/dashboard/api-keys" element={<Index />} />
          <Route path="/dashboard/database" element={<Index />} />
          <Route path="/dashboard/integrations" element={<Index />} />
          <Route path="/dashboard/webhooks" element={<Index />} />
          <Route path="/dashboard/settings" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
