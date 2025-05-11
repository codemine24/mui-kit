import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AppProvider from "@/providers/app-provider";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/top-header";
import { OnThisPageProvider } from "@/contexts/on-thispage-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUI Kit - Open Source MUI Components library",
  description: "A complete set of open source components for Material UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <AppProvider>
          <CssBaseline />

          {/* Global transition styles */}
          <GlobalStyles
            styles={{
              "html, body, #__next": {
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              "*": {
                transition:
                  "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
              },
            }}
          />

          <OnThisPageProvider>
            <TopHeader />
            <Header />

            <Box>
              {children}
            </Box>

            <Footer />
          </OnThisPageProvider>
        </AppProvider>
      </body>
    </html>
  );
}
