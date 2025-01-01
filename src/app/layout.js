import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provieders from "./Provieders";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imdb clone",
  description: "This is movie database clone ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <Provieders>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provieders>
      </body>
    </html>
  );
}
