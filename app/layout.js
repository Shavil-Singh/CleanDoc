import { Inter } from "next/font/google";
import "./globals.css";

import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CleanDoc",
  description: "Upload your pdf file.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
               {children}
           </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
