import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "BuildCraft",
  description: "Building Your Dreams Into Reality",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Google Font (Inter) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Wrap children in Suspense to show loading.tsx on initial load */}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
