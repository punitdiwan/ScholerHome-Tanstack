import { FC } from "react";
import UnderLine from "./underLine";
import { useNavigate } from "@tanstack/react-router";

interface AcademicCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const academicCards: AcademicCard[] = [
  {
    id: 1,
    title: "Aadhar",
    subtitle: "Pre-Primary",
    image: "/public/placholder/Academic_st_place.jpg",
  },
  {
    id: 2,
    title: "Prangan",
    subtitle: "Junior School",
    image: "/accademic/child.jpg",
  },
  {
    id: 3,
    title: "Sopaan",
    subtitle: "Middle School",
    image: "/public/placholder/Academic_st_place.jpg",
  },
  {
    id: 4,
    title: "Shikhar",
    subtitle: "Senior School",
    image: "/accademic/school-times.jpg",
  },
];

const AcademicSection: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-blue-100 px-10 py-8" >
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-abhaya mb-2 text-title tracking-wide">
          Academic Structure
        </h2>
        <UnderLine/>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {academicCards.map((card) => (
          <div
            key={card.id}
            className="bg-white overflow-hidden shadow-lg group cursor-pointer"
            onClick={()=>navigate({to : "/contactUs"})}
          >
            {/* Image */}
            <div className="overflow-hidden h-48">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="p-4 ">
              <h3 className="text-2xl font-abhaya font-light text-secondary">{card.title}</h3>
              <p className="text-sm text-primary">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicSection;
