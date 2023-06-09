import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Insta Search',
  description: 'A tool that allows you to scrape and download Instagram accounts that matches anything you search.',
}

// const AppContext = useContext();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
