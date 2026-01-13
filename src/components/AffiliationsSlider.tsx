import { FC, useEffect, useState } from "react";
import UnderLine from "./underLine";

interface Logo {
  id: number;
  image: string;
  alt: string;
}

const logos: Logo[] = [
  { id: 4, image: "/public/placholder/aflliaction_placeholder.jpg", alt: "Logo 4" },
  { id: 1, image: "/Affiliations/chevrolet.jpg", alt: "Logo 1" },
  { id: 5, image: "/public/placholder/aflliaction_placeholder.jpg", alt: "Logo 5" },
  { id: 2, image: "/Affiliations/ford-mustang.jpg", alt: "Logo 2" },
  { id: 6, image: "/public/placholder/aflliaction_placeholder.jpg", alt: "Logo 6" },
  { id: 3, image: "/Affiliations/porsche.jpg", alt: "Logo 3" },
];

const VISIBLE_COUNT = 8; 
const AffiliationsSlider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000); // auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-10 py-8 bg-gray-50">
      <div className=" mb-4">
        <h2 className="text-xl md:text-2xl mb-2 font-abhaya font-semibold text-secondary tracking-wide">
          Our Affiliations
        </h2>
        <UnderLine/>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-6000 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / VISIBLE_COUNT}%)`,
            width: `${(logos.length / VISIBLE_COUNT) * 100}%`,
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`shrink-0 w-1/${VISIBLE_COUNT} p-2`}
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {logos.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gray-800 scale-110"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AffiliationsSlider;
