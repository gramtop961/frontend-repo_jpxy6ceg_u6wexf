import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import PPDBSection from './components/PPDBSection';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} SD Karakter Nur Syahad. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-emerald-600 dark:hover:text-emerald-400" href="#profil">Profil</a>
          <a className="hover:text-emerald-600 dark:hover:text-emerald-400" href="#ppdb">PPDB</a>
          <a className="hover:text-emerald-600 dark:hover:text-emerald-400" href="#kontak">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <PPDBSection />
      </main>
      <Footer />
    </div>
  );
}
