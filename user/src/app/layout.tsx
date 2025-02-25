// "use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="winter" lang="en">
    <head>
        <title>GlassesVT</title>
        <meta name='description' content='Description' />
        <link rel="apple-touch-icon.png" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
    </head>
    <body className={`${inter.className} selection:bg-base-content selection:text-base-100`} style={{ background: "rgba(128, 128, 128, 0.1)" }}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                {/* <Header /> */}
                <div className="body">
                    {children}
                </div>
                {/* <Footer /> */}
    </body>
</html>
  )
}
