export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-slate-300">Designed and built with care • © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
