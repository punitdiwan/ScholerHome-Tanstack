import { FilterByDate } from '@/components/fillterDate';
import ImageTitleSection from '@/components/ImageHeader';
import { MonthDataDisplay } from '@/components/MonthDataDisplay';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from "react";

export const Route = createFileRoute('/achievements')({
  component: RouteComponent,
});

type AchievementItem = {
  title: string;
  date: string; // YYYY-MM-DD
  description?: string; // optional description for achievement
};

function RouteComponent() {
  // Example achievements data
  const allAchievements: AchievementItem[] = [
    { title: "Science Fair Winner", date: "2026-01-15", description: "Won 1st prize in school science fair" },
    { title: "Debate Competition", date: "2026-02-20" },
    { title: "Sports Day Champion", date: "2025-01-10", description: "Gold medal in athletics" },
    { title: "Art Competition Winner", date: "2026-01-25" },
    { title: "Coding Hackathon", date: "2026-03-05" },
  ];

  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState<number | "all">(1); // Default January

  const years = Array.from(new Set(allAchievements.map((d) => new Date(d.date).getFullYear())));

  // Filter data here in parent
  const filteredData = allAchievements.filter((item) => {
    const d = new Date(item.date);
    const matchYear = d.getFullYear() === selectedYear;
    const matchMonth = selectedMonth === "all" ? true : d.getMonth() + 1 === selectedMonth;
    return matchYear && matchMonth;
  });

  return (
    <>
      <ImageTitleSection
        title="Achievements"
        imageUrl="/placholder/image_header_placeholder.jpg"
      />

      <div className="p-6">
        {/* Filter */}
        <div className='w-full flex justify-end mb-6'>
          <FilterByDate
            years={years}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            onChange={(year, month) => {
              setSelectedYear(year);
              setSelectedMonth(month);
            }}
          />
        </div>

        {/* Month-wise Achievements */}
        <div className="mt-6">
          <MonthDataDisplay
            data={filteredData.map(item => ({ name: item.title, date: item.date }))}
            year={selectedYear}
          />
        </div>
      </div>
    </>
  );
}

export default RouteComponent;
