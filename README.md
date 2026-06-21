# Aiko Pradana — Portfolio

Portfolio personal bergaya editorial/majalah digital, dibangun dengan Next.js App Router, Tailwind CSS v4, dan Framer Motion.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — token desain didefinisikan langsung di `src/app/globals.css`
- **Framer Motion** — animasi load sequence di hero, scroll reveal, hover interactions
- **Resend** — pengiriman email dari form kontak
- **lucide-react** — icon set

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env.local   # lalu isi RESEND_API_KEY dan CONTACT_TO_EMAIL
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur project

```
src/
├── app/
│   ├── api/contact/route.ts   # API route — kirim email via Resend
│   ├── globals.css            # design tokens (warna, font, dark mode)
│   ├── layout.tsx             # font loader, metadata, no-flash theme script
│   └── page.tsx                # merakit semua section
├── components/
│   ├── Masthead.tsx            # header ala majalah
│   ├── Hero.tsx                 # signature animation: word reveal + drawing underline
│   ├── About.tsx
│   ├── ProjectGrid.tsx          # daftar karya dengan hover-reveal detail
│   ├── Contact.tsx              # form kontak
│   ├── Footer.tsx
│   └── ThemeToggle.tsx          # dark/light mode toggle
└── data/
    └── projects.ts              # data project — edit di sini untuk ganti konten
```

## Mengganti konten

- **Nama, deskripsi diri, headline hero** → `src/components/Hero.tsx`, `src/components/Masthead.tsx`
- **Daftar project** → `src/data/projects.ts`
- **Info kontak (email, sosial media)** → `src/components/Contact.tsx`
- **Warna & font** → `src/app/globals.css` (cari bagian `Editorial design tokens`)

## Setup email (Resend)

1. Daftar gratis di [resend.com](https://resend.com).
2. Ambil API key dari dashboard → masukkan ke `.env.local` sebagai `RESEND_API_KEY`.
3. Isi `CONTACT_TO_EMAIL` dengan alamat email tujuan.
4. Untuk testing, sender bawaan `onboarding@resend.dev` sudah cukup. Untuk produksi, verifikasi domain sendiri di Resend lalu update alamat `from` di `src/app/api/contact/route.ts`.

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Import project di [vercel.com/new](https://vercel.com/new).
3. Tambahkan environment variables `RESEND_API_KEY` dan `CONTACT_TO_EMAIL` di Vercel project settings.
4. Deploy.

## Build untuk produksi

```bash
npm run build
npm start
```
