import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Providers } from '@/providers/Providers'

const roboto = Roboto({ 
  subsets: ['latin'],
  variable: '--font-roboto'
})

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'My Finances',
  description: 'Gerenciador de finanças pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-700 font-sans text-gray-100`}>
          <Providers>
            <main>
              <Header />
              <div className='mt-[-7rem]'>{children}</div>
            </main>
          </Providers>
      </body>
    </html>
  )
}
