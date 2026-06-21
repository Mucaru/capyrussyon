export type Project = {
  slug: string;
  title: string;
  year: string;
  category: "Development" | "Design" | "Product";
  summary: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rumahcatat",
    title: "RumahCatat",
    year: "2025",
    category: "Development",
    summary:
      "Aplikasi pencatatan keuangan rumah tangga dengan sinkronisasi real-time, dibangun untuk keluarga yang ingin budgeting tanpa ribet.",
    tags: ["Next.js", "Supabase", "PWA"],
    href: "#",
    featured: true,
  },
  {
    slug: "kanvas-identitas",
    title: "Kanvas Identitas",
    year: "2025",
    category: "Design",
    summary:
      "Sistem identitas visual untuk studio kopi independen — dari logotype, palet, sampai signage interior.",
    tags: ["Brand Identity", "Figma", "Print"],
    href: "#",
    featured: true,
  },
  {
    slug: "sigap",
    title: "Sigap",
    year: "2024",
    category: "Product",
    summary:
      "Dashboard mitigasi bencana untuk relawan lapangan — peta sebaran, status logistik, dan koordinasi tim dalam satu layar.",
    tags: ["React", "Mapbox", "Design System"],
    href: "#",
    featured: true,
  },
  {
    slug: "lentera-cms",
    title: "Lentera CMS",
    year: "2024",
    category: "Development",
    summary:
      "Headless CMS ringan untuk penulis independen yang ingin publish ke web tanpa setup rumit.",
    tags: ["Node.js", "PostgreSQL", "API Design"],
    href: "#",
  },
  {
    slug: "ruang-baca",
    title: "Ruang Baca",
    year: "2023",
    category: "Design",
    summary:
      "Redesign pengalaman baca digital untuk perpustakaan komunitas — tipografi dan layout jadi fokus utama.",
    tags: ["UI/UX", "Typography", "Accessibility"],
    href: "#",
  },
  {
    slug: "obrolan-warga",
    title: "Obrolan Warga",
    year: "2023",
    category: "Development",
    summary:
      "Platform forum diskusi RT/RW skala kecil dengan fokus pada kemudahan penggunaan untuk semua umur.",
    tags: ["Next.js", "tRPC", "Prisma"],
    href: "#",
  },
];
