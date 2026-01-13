"use client";

import ImageTitleSection from '@/components/ImageHeader';
import UnderLine from '@/components/underLine';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/co-curricular-activities')({
  component: RouteComponent,
})

const images = [
  "/sanskaar-i41.jpg",
  "/placholder/co-curricular_slider_place.jpg",
  "/sanskaar-i46.jpg",
  "/placholder/co-curricular_slider_place.jpg",
  "/sanskaar-i47.jpg",
  "/placholder/co-curricular_slider_place.jpg",
  "/sanskaar-i48.jpg"
];

function RouteComponent() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ImageTitleSection
        title="Co-Curricular Activities"
        imageUrl="/placholder/image_header_placeholder.jpg"
      />

      <div className="px-10 py-8 text-secondary">

        {/* ===== Row 1 : Text + Slider ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">

          {/* Text */}
          <div className="md:col-span-2">
            <p className="leading-relaxed my-4">
              At The Scholars Home Public School, we actively encourage lateral thinking and
              creativity through a host of co-curricular activities. The hobbies we
              cultivate as children enrich our lives as adults, shaping well-rounded
              individuals.
            </p>
            <p className="leading-relaxed mb-4">
              Students are exposed to a variety of activities such as music, drama,
              dance, fine arts, and much more. The school also encourages participation
              in graded examinations conducted by reputed bodies and prestigious
              competitions at the national level.
            </p>
            <p className="leading-relaxed">
              While sports and co-curricular activities are integrated into the
              curriculum, boarders have additional access to these facilities during
              the evenings, promoting balanced growth and lifelong learning.
            </p>
          </div>

          {/* Slider */}
          <div className="md:col-span-1 relative w-full h-72 overflow-hidden">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Co-Curricular Activities"
                className={`
                  absolute top-0 left-0 w-full h-72 object-cover
                  transition-transform duration-700
                  ${i === index
                    ? "translate-x-0 z-20"
                    : direction === 1
                      ? "translate-x-full z-10"
                      : "-translate-x-full z-10"
                  }
                `}
              />
            ))}
          </div>

        </div>

        {/* ===== Row 2 : Activity Gallery ===== */}
        <div>
          <h3 className="text-2xl font-abhaya mb-2">
            Activities
          </h3>
          <UnderLine />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[
              { title: "Art & Craft", image: "/placholder/Activity_placeholder.jpg" },
              { title: "Dance", image: "/placholder/Activity_placeholder.jpg" },
              { title: "Public Speaking & Debate", image: "/placholder/Activity_placeholder.jpg" },
              { title: "Drama & Theatre", image: "/placholder/Activity_placeholder.jpg" },
              { title: "Musical Activities", image: "/placholder/Activity_placeholder.jpg" },
              { title: "Sports", image: "/placholder/Activity_placeholder.jpg" },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
