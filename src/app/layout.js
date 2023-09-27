import Navbar from "@/Components/NavHelper/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import AuthProvider from "@/Utils/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextBlog-Write, Read & Grow",
  description: "Best blogs ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950 px-5 md:px-14 inter lg:px-28 xl:px-44 flex flex-col justify-center ">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
