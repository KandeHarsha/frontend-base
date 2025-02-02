import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frontend Base App",
  description: "A Next.js frontend base application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

