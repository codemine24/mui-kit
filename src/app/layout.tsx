import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AppProvider from "@/providers/app-provider";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "A complete set of open source components for Material UI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AppProvider>
          <Header />

          <Box
            sx={{
              width: "100%",
              px: 0,
              overflow: "auto",
              minHeight: "calc(100vh - 240px)",
            }}
          >
            {children}
          </Box>

          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
