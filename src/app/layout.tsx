import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Simplify Frontend Exercise',
  description: 'three page ecommerce app',
  keywords: ['Airpods', 'Iphone', 'Mac']
}


const inter = Inter({ 
  weight: ["200","300","400","500","600"],
  subsets: ['latin'] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}><div className="bg-backgroundGrey min-h-screen">{children}</div></body>
      
    </html>
  )
}
