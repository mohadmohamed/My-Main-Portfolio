import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Mohamed Abdelrahman | Portfolio',
  description: 'Full Stack Web Developer Portfolio',
  icons: {
    icon: '/head.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased relative min-h-screen`}>
        {/* Main background gradient orbs */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Header background */}
          <div className="absolute top-0 left-0 w-full h-32 bg-black z-[1]" />

          {/* Hero orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#BF5AF2] to-transparent opacity-30 blur-3xl" />
          <div className="absolute top-[10%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#0A84FF] to-transparent opacity-20 blur-3xl" />
          
          {/* Middle section orbs */}
          <div className="absolute top-[40%] left-[-15%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#BF5AF2] to-transparent opacity-20 blur-3xl" />
          <div className="absolute top-[60%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#0A84FF] to-transparent opacity-25 blur-3xl" />
          
          {/* Bottom section orbs */}
          <div className="absolute bottom-[-20%] left-[-20%] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#BF5AF2] to-transparent opacity-20 blur-3xl" />
          <div className="absolute bottom-[-30%] right-[-15%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#0A84FF] to-transparent opacity-30 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 -mt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 