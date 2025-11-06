import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white dark:to-neutral-900" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Award size={14} className="text-yellow-300" />
            <span>Akreditasi A • Kurikulum Merdeka</span>
          </div>
          <h1 id="hero-heading" className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Sekolah Dasar yang Menumbuhkan Karakter dan Prestasi
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Belajar menyenangkan, berkarakter kuat, sesuai Kurikulum Merdeka.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ppdb" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 font-semibold shadow-lg shadow-emerald-500/30 transition">
              <Rocket size={18} /> Daftar PPDB Sekarang
            </a>
            <a href="#kontak" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold transition">
              <PlayCircle size={18} /> Jadwalkan Kunjungan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
