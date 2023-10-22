"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import ToasterContext from "../context/ToastContext";

/**
 * Renders the root layout for the application.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children components to render.
 * @return {JSX.Element} The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="dark"
        >

            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
        </ThemeProvider>

          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/42816889.js"></script>
       
      </body>
    </html>
  );
}
