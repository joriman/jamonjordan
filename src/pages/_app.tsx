import '@/styles/globals.css'
import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import { AnimatePresence } from 'motion/react'

const App: AppType = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} /> 
    </AnimatePresence>
  )
}

export default trpc.withTRPC(App)