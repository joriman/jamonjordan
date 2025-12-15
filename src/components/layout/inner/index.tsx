import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sora } from 'next/font/google'
import { motion, type Variants } from 'motion/react';
import { slide, opacity, perspective } from './transition';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const anim = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  }
}

export default function Inner({ children }: { children: React.ReactNode }) {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <div className='bg-white dark:bg-royal-navy'>
        <motion.div className='z-10 h-[100vh] w-full fixed left-0 top-0 bg-white dark:bg-royal-navy' {...anim(slide)}/>
        <motion.div className='bg-white dark:bg-royal-navy' {...anim(perspective)}>
          <motion.div {...anim(opacity)}>
            <div className='header'>
              <Navbar />
            </div>
            {
                children
            }
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}