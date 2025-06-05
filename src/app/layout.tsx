import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TopHeader } from "@/components/top-header";
import { OnThisPageProvider } from "@/contexts/on-thispage-context";
import AppProvider from "@/providers/app-provider";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"], // adjust weights as needed
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_PRODUCTION_URL || "https://www.muikit.com"
  ),
  title: {
    default: "MUI Kit - Open Source Material UI Components library",
    template: "%s | MUI Kit",
  },
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
      className={`${roboto.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GTM Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-FK9FFDPDJG');
            `,
          }}
        />
      </head>
      <body>
        {/* GTM NoScript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-FK9FFDPDJG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <AppProvider>
          <CssBaseline />
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
            <Box>{children}</Box>
            <Footer />
          </OnThisPageProvider>
        </AppProvider>
      </body>
    </html>
  );
}
