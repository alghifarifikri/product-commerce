import Image from "next/image";
import { useState } from "react";
import { CarouselProps } from "@/utils/interface";

export default function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative w-full h-64 overflow-hidden rounded-lgp-4 shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill"
          loading="lazy"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        Prev
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
}
