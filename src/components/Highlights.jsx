import { ShieldCheck, BookOpen, Users, Sparkles, GraduationCap, Heart } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'Pembinaan Karakter', desc: 'Pembiasaan harian, literasi moral, dan budaya positif.' },
  { icon: BookOpen, title: 'Kurikulum Merdeka', desc: 'Pembelajaran berdiferensiasi dan projek P5 yang bermakna.' },
  { icon: Users, title: 'Guru Bersertifikat', desc: 'Pendidik kompeten, ramah anak, berpengalaman.' },
  { icon: Sparkles, title: 'Lingkungan Aman', desc: 'Zona aman, ramah inklusi, dan pengawasan menyeluruh.' },
  { icon: GraduationCap, title: 'Ekstra Beragam', desc: 'Pramuka, Tahfidz, English Club, Futsal, Tari, dan lainnya.' },
  { icon: Heart, title: 'Pendampingan Literasi & Numerasi', desc: 'Program peningkatan bertahap sesuai kebutuhan siswa.' },
];

export default function Highlights() {
  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/40 dark:from-neutral-900 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Keunggulan Inti</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Ringkas tentang nilai lebih yang orang tua butuhkan.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
