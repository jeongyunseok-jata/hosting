import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First Hosting | 2023',
  description: '업타임 99% 한국리전 디도스 방어 IDC를 제공합니다.',
  icons: {
    icon: '../public/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          title={['강력한 방어 인프라를 제공하는', '보안존 IDC를 제공합니다.']}
        />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
