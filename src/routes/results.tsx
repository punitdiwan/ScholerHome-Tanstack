import ImageTitleSection from '@/components/ImageHeader'
import UnderLine from '@/components/underLine';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
export const Route = createFileRoute('/results')({
  component: RouteComponent,
})
type Topper = {
  id: string;
  name: string;
  className: string;
  image: string;
};

type YearWiseToppers = {
  year: string;
  toppers: Topper[];
};

const toppersData: YearWiseToppers[] = [
  {
    year: "2023-24",
    toppers: [
      {
        id: "1",
        name: "Aarav Sharma",
        className: "Class X",
        image: "https://picsum.photos/300/300?random=1"
      },
      {
        id: "2",
        name: "Ananya Verma",
        className: "Class XII",
        image: "https://picsum.photos/300/300?random=2"
      }
    ]
  },
  {
    year: "2024-25",
    toppers: [
      {
        id: "3",
        name: "Rohit Mehta",
        className: "Class X",
        image: "https://picsum.photos/300/300?random=3"
      },
      {
        id: "4",
        name: "Sneha Kapoor",
        className: "Class XII",
        image: "https://picsum.photos/300/300?random=4"
      }
    ]
  }
];

function RouteComponent() {
  const [activeYear, setActiveYear] = useState(
    toppersData[toppersData.length - 1].year
  );


  const sortedYears = [...toppersData]
    .map((item) => item.year)
    .sort((a, b) => Number(b.slice(0, 4)) - Number(a.slice(0, 4)));

  const selectedYearData = toppersData.find(
    (item) => item.year === activeYear
  );
  return (
    <>
      <ImageTitleSection
        title="Results"
        imageUrl="/public/placholder/image_header_placeholder.jpg"
      />
      <section className="px-10 py-12 bg-gray-50">
        <h2 className="text-3xl font-abhaya text-secondary mb-2">
          Our Toppers : {activeYear}
        </h2>
        <UnderLine />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
          {/* LEFT SIDE – TOPPERS */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedYearData?.toppers.map((topper) => (
              <div
                key={topper.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{topper.name}</h3>
                  <p className="text-sm text-gray-600">{topper.className}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – YEAR FILTER */}
          <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-24">
            <h3 className="text-2xl font-abhaya text-secondary mb-2">Select Year</h3>
            <UnderLine />

            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {sortedYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-white
              ${activeYear === year ? "bg-blue-900" : "bg-primary"}
              hover:-translate-y-1 hover:shadow-[0_4px_6px_-1px_rgba(252,165,15,0.6)]
            `}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>)
}
