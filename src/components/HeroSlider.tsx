import { FC, useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  { id: 4, image:"/public/placholder/Slider_placeholder.jpg"},
  { id: 1, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b" },
  { id: 5, image:"/public/placholder/Slider_placeholder.jpg"},
  { id: 2, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" },
  { id: 6, image:"/public/placholder/Slider_placeholder.jpg"},
  { id: 3, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7" },
  { id: 7, image:"/public/placholder/Slider_placeholder.jpg"},
];

const ImageSlider: FC = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-55 sm:h-80 md:h-112.5 lg:h-125 overflow-hidden">
      
      {/* Slider Track */}
      <div
        className="flex h-full transition-transform duration-900 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-white scale-110"
                : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
