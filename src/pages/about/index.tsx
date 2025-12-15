import Inner from '@/components/layout/inner'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

import { motion } from 'motion/react';

const About = () => {
  return (
    <Inner >
      <div className="container mx-auto py-8">
        <motion.pre
          className="language-javascript bg-gray-800 text-white p-4 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.code
            className="font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 2,
              staggerChildren: 0.1,
            }}
          >
            {`
              // Welcome to my About page!
              const aboutMe = {
                name: 'Jamon Jordan',
                role: 'Software Developer',
                bio: 'I'm a passionate developer who loves sovling problems and drinking good coffee.',
                skills: ['Frontend Development', 'Backend Development', 'MERN Stack', 'Node.js'],
                education: ['Southern New Hamphsire University', 'Bachelor of Science in Computer Science'],
                interests: ['Classical Guitar', 'Gaming', 'Reading Good Books', 'Tech'],
              };
            `
              .split('\n')
              .map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {index} {line}
                </motion.div>
              ))}
          </motion.code>
        </motion.pre>
      </div>
    </Inner>
  );
};

export default About;