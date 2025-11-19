import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-28 overflow-hidden">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 items-center">
        <div className="relative z-10 py-10">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200"
          >
            Available for freelance projects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            Crafting playful, modern interfaces that feel alive
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-slate-300"
          >
            I’m a front‑end engineer and designer focused on delightful experiences. I blend motion, 3D, and solid engineering to ship products users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:brightness-110 transition">
              View Selected Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              Get in touch
            </a>
          </motion.div>
        </div>

        <div className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
