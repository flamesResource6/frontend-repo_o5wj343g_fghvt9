import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Subtle radial texture */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_800px_at_80%_-200px,rgba(56,189,248,0.10),transparent_60%),radial-gradient(1000px_600px_at_0%_-100px,rgba(59,130,246,0.12),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
