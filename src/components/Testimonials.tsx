import  { useEffect, useState } from "react";
import UnderLine from "./underLine";

interface Testimonial {
  id: number;
  image: string;
  description: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "tt.jpg",
    description:
      "The school has provided an excellent learning environment for my child. The teachers are supportive, caring, and truly dedicated to student success.",
    name: "Rohit Sharma",
    role: "Parent",
  },
  {
    id: 2,
    image: "/accademic/child.jpg",
    description:
      "I am extremely happy with the overall development of my child. The balance between academics and extracurricular activities is impressive.",
    name: "Neha Verma",
    role: "Parent",
  },
  {
    id: 3,
    image: "parentt.jpg",
    description:
      "The school's values and discipline have positively impacted my ward. Communication with parents is transparent and timely.",
    name: "Amit Patel",
    role: "Guardian",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="bg-gray-100 px-10 py-8">
      <div className="">
        
        {/* Heading */}
        <h2 className="text-3xl font-abhaya text-secondary mb-2">
          Testimonials From Parents
        </h2>

        <UnderLine/>

        {/* Slider Card */}
        <div className=" flex flex-col md:flex-row items-center md:items-start gap-8 transition-all mt-4">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-items-normal">
            <img
              src={current.image}
              alt={current.name}
              className="w-64 h-64 object-cover "
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-gray-600 text-lg leading-relaxed">
              “{current.description}”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900 text-lg">
                {current.name}
              </p>
              <p className="text-sm text-gray-500">
                {current.role}
              </p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? "bg-gray-900 scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
