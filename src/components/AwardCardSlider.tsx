import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import KnowMoreBTN from "./KnowMoreBTN";

interface AwardItem {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface OneCardSliderProps {
  awards: AwardItem[];
  logoImage: string; // Left fixed image
}

export const OneCardSlider: React.FC<OneCardSliderProps> = ({
  awards,
  logoImage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = awards.length - 1;

  const next = () => setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  const current = awards[currentIndex];

  return (
    <section className="px-6  bg-white ">
      <div className="max-w-6xl mx-auto">

        {/* Slider Area */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-2  ">
          
          {/* Left: Fixed Logo */}
          <div className="flex-shrink-0 w-20 h-24 md:w-22 md:h-32 flex items-center justify-center">
            <img src={logoImage} alt="Award Logo" className="relative -top-6 w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>

          {/* Right: Slider Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
                <p className="text-gray-500 text-sm">{current.date}</p>
                <h3 className="text-2xl font-abhaya font-semibold text-gray-900">{current.title}</h3>
                <p className="text-gray-600 text-sm">{current.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <KnowMoreBTN/>

                <div className="flex gap-3">
                    <button
                    onClick={prev}
                    className="w-10 h-10 cursor-pointer flex items-center justify-center border rounded-full hover:bg-secondary text-secondary hover:text-black transition"
                    >
                    <HiChevronLeft size={22} />
                    </button>
                    <button
                    onClick={next}
                    className="w-10 h-10 flex cursor-pointer items-center justify-center border rounded-full hover:bg-secondary text-secondary hover:text-black transition"
                    >
                    <HiChevronRight size={22} />
                    </button>
                </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        

      </div>
    </section>
  );
};
