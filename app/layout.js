"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import {Providers} from "@/app/GlobalRedux/provider";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import {ToastContainer} from "react-toastify";
import InitialComponent from "@/app/components/InitialComponent";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <title>News Aggregator</title>
          <meta charSet="utf-8" />
      </Head>
      <body className={inter.className}>
        <Providers>
            <InitialComponent>
                <Navbar />
                <ToastContainer position="top-right" theme="colored" />
                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
                <Footer/>
            </InitialComponent>
        </Providers>
      </body>
    </html>
  )
}
