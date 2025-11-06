import { FileDown, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function PPDBSection() {
  const [form, setForm] = useState({ nama: '', ttl: '', wali: '', telp: '', alamat: '', rencana: '', setuju: false });
  const isValid = useMemo(() => {
    const telpOk = /^\+?\d{9,15}$/.test(form.telp);
    return form.nama && form.ttl && form.wali && telpOk && form.alamat && form.rencana && form.setuju;
  }, [form]);

  const waLink = useMemo(() => {
    const base = 'https://wa.me/6281234567890';
    const text = encodeURIComponent(`Halo Admin PPDB SD Karakter Nur Syahad.\nSaya ingin mendaftar.\nNama Calon Siswa: ${form.nama}\nRencana Masuk: ${form.rencana}`);
    return `${base}?text=${text}`;
  }, [form.nama, form.rencana]);

  const brochureUrl = 'https://example.com/brosur-ppdb.pdf';

  return (
    <section id="ppdb" className="py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">PPDB</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Alur pendaftaran sederhana dalam 4 langkah.</p>
            <ol className="mt-6 space-y-3">
              {['Isi Form Minified', 'Verifikasi Admin', 'Observasi & Wawancara', 'Daftar Ulang'].map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm">{i + 1}</div>
                  <span className="text-neutral-800 dark:text-neutral-200">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 font-semibold shadow">
                <MessageCircle size={18} /> WhatsApp PPDB
              </a>
              <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-5 py-3 font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <FileDown size={18} /> Unduh Brosur
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white">Syarat Pendaftaran</h3>
              <ul className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-1">
                <li>Usia minimal 6 tahun atau sesuai ketentuan Dapodik</li>
                <li>Fotokopi Akta Lahir & KK</li>
                <li>Pas foto 3x4 (2 lembar)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-white">Form PPDB Singkat</h3>
            <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <label className="grid gap-1">
                <span className="text-sm">Nama Calon Siswa</span>
                <input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} required className="h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">Tanggal Lahir</span>
                <input type="date" value={form.ttl} onChange={(e) => setForm({ ...form, ttl: e.target.value })} required className="h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">Nama Orang Tua/Wali</span>
                <input value={form.wali} onChange={(e) => setForm({ ...form, wali: e.target.value })} required className="h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">No. Telp/WA</span>
                <input value={form.telp} onChange={(e) => setForm({ ...form, telp: e.target.value })} required className="h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3" placeholder="62xxxxxxxxxx" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">Alamat</span>
                <input value={form.alamat} onChange={(e) => setForm({ ...form, alamat: e.target.value })} required className="h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">Rencana Masuk</span>
                <select value={form.rencana} onChange={(e) => setForm({ ...form, rencana: e.target.value })} required className="h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3">
                  <option value="">Pilih Tahun Ajaran</option>
                  <option>2025/2026</option>
                  <option>2026/2027</option>
                </select>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={form.setuju} onChange={(e) => setForm({ ...form, setuju: e.target.checked })} />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Saya menyetujui pemrosesan data ini.</span>
              </label>
              <button disabled={!isValid} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 disabled:bg-neutral-400 disabled:cursor-not-allowed hover:bg-emerald-500 text-white px-5 py-3 font-semibold">
                <CheckCircle2 size={18} /> Kirim Peminatan
              </button>
              <p className="text-xs text-neutral-500">Tombol akan aktif ketika seluruh isian valid.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
