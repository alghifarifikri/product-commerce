import Image from "next/image";

const HeroSection = () => (
  <section id="hero" className="pb-20 pt-40 relative bg-cover bg-center">
    <div className="absolute inset-0">
      <picture>
        <Image
          src="/images/bg-5.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="z-0"
        />
      </picture>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative md:justify-center">
      <div className="md:w-1/2 text-center lg:text-right lg:ml-auto opacity-0 transform translate-x-10 animate-slide-in-right">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Tempatnya Cari Elektronik Lengkap Cuman Disini!
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-bold">
          Pilihan produk bermerk dan berkualitas, tentunya dengan harga murah
          dan terjangkau.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
