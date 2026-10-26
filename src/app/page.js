
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Menengah" },
  { nama: "Desain poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Dasar" },
];

const dataJadwal = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.00",
    kegiatan: "Membaca ulang modul",
  },
  {
    hari: "Minggu",
    waktu: "10.00 - 15.00",
    kegiatan: "Mengerjakan tugas praktik",
  },
  {
    hari: "Minggu",
    waktu: "18.30 - 21.00",
    kegiatan: "Merekam video dan menulis laporan",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaf5ed] p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        <Hero
          nama="Fathir Azzikri Putra Wibowo"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG"
        />

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Tentang Saya
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Saya senang belajar melalui hal-hal yang saya sukai,
            mulai dari teknologi hingga dunia kreatif. Bagi saya,
            setiap proyek adalah kesempatan untuk mencoba,
            berkembang, dan menciptakan sesuatu yang baru.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Hobi
            </h2>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Bermain game</li>
              <li>Menonton anime</li>
              <li>Bermain gitar</li>
              <li>Mendengarkan musik</li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Cita-cita
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">Menjadi YouTuber atau Vtuber, langkah yang saya rencanakan:</p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Menuntaskan pendidikan SMK</li>
              <li>Konsisten upload video 1 hari 1 kali ke Youtube</li>
              <li>Mencoba membranding diri sebagai pribadi yang menarik</li>
            </ol>
          </section>
        </div>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Keahlian
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Jadwal Belajar
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white font-semibold">
                  <th className="p-4">Hari</th>
                  <th className="p-4">Waktu</th>
                  <th className="p-4">Kegiatan</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-gray-600">
                {dataJadwal.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-medium text-gray-700">
                      {item.hari}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {item.waktu}
                    </td>
                    <td className="p-4">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
