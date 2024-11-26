import Image from "next/image";

const AboutSection = () => (
  <section
    id="about"
    className="bg-gray-100 py-16 opacity-0 transform translate-y-10 animate-fade-in px-5"
  >
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-4 text-[#013787]">Tentang Kami</h2>
      <p className="text-lg text-gray-700">
        ElectroStore adalah perusahaan yang bergerak di bidang penjualan produk
        elektronik berkualitas tinggi. Berdiri sejak tahun 2010, kami
        berkomitmen untuk memberikan inovasi dan keandalan kepada setiap
        pelanggan. Dengan pengalaman lebih dari satu dekade, kami telah menjadi
        mitra terpercaya bagi banyak individu dan bisnis di seluruh Indonesia.
        Produk kami mencakup berbagai kebutuhan elektronik seperti perangkat
        rumah tangga, gadget, dan aksesoris teknologi terkini.
      </p>
    </div>
    <div className="justify-self-center mt-4">
      <Image
        src="/images/elec.webp"
        alt="Electronics illustration"
        width={600}
        height={400}
        className="rounded-lg"
        priority
      />
    </div>
  </section>
);

export default AboutSection;
