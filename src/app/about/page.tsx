'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About K72</h1>
        <p className="text-xl mb-4">
          K72 is a creative agency driven by curiosity and innovation. We craft unique digital experiences that captivate and inspire.
        </p>
        <p className="text-xl">
          Our team of passionate designers and developers work together to bring your vision to life.
        </p>
      </div>
    </main>
  )
}