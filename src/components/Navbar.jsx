import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 shadow-lg shadow-blue-500/30" />
              <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition">Your Name</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <a href="#work" className="hover:text-white transition">Work</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" className="p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-white/5 text-slate-300">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
