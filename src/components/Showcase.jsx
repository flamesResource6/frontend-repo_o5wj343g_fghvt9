import { motion } from 'framer-motion'
import { Code2, Palette, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'Clean, responsive, and animated with delightful micro-interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    color: 'from-blue-500/20 to-cyan-400/10'
  },
  {
    title: '3D Landing Page',
    desc: 'Spline-powered hero with smooth parallax and buttery scroll.',
    tags: ['Spline', 'UX', 'WebGL'],
    color: 'from-violet-500/20 to-fuchsia-400/10'
  },
  {
    title: 'Design System',
    desc: 'Accessible components, tokens, and theming at scale.',
    tags: ['Design', 'Accessibility', 'Docs'],
    color: 'from-emerald-500/20 to-teal-400/10'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected Work</h2>
            <p className="mt-2 text-slate-300">A few things that show how I think, design, and build.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-300">
            <Code2 className="h-5 w-5" />
            <Palette className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <span className="text-xs text-slate-300/80">Case study</span>
                </div>
                <p className="mt-2 text-slate-200/90">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-black/30 border border-white/10 px-2 py-1 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-14 right-0 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bottom-0 group-hover:blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
