import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { href: '#profil', label: 'Profil' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#ppdb', label: 'PPDB' },
  { href: '#biaya', label: 'Biaya' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#prestasi', label: 'Prestasi' },
  { href: '#kegiatan', label: 'Kegiatan' },
  { href: '#berita', label: 'Berita' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 to-yellow-400 shadow-md" />
          <div className="leading-tight">
            <p className="font-semibold text-neutral-900 dark:text-white">SD Karakter Nur Syahad</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Semarang</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.slice(0, 7).map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow transition">
            {dark ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-emerald-600" />}
          </button>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95">
          <div className="px-4 py-3 grid grid-cols-2 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
