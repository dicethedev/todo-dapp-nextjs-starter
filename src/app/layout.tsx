import './globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import { Providers } from '@/components/Providers'
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart contract Intraction Nextjs starter',
  description: 'A starter kit for interacting with smart contract building a Ethereum TODO dApps with Next.js"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer />
      <Providers>
          <Header />
        {children}
        </Providers>
      </body>
    </html>
  )
}
