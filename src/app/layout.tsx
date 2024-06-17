import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import Providers from '@/app/components/Providers';
import {Metadata} from 'next';


const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free AI Article Writer | Best AI Tools for Free Content Writing',
  description: 'Generate high-quality content with AIdea Writer. Fast, SEO-friendly articles and posts for free. Boost your content strategy effortlessly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
