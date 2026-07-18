'use client';

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}

      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}