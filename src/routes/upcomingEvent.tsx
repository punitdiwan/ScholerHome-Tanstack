import { FilterByDate } from '@/components/fillterDate';
import ImageTitleSection from '@/components/ImageHeader';
import { MonthDataDisplay } from '@/components/MonthDataDisplay';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";

export const Route = createFileRoute('/upcomingEvent')({
  component: RouteComponent,
})

type DataItem = {
  name: string;
  date: string; // YYYY-MM-DD
};

function RouteComponent() {
  const allData: DataItem[] = [
    { name: "Event A", date: "2026-01-15" },
    { name: "Event B", date: "2026-02-20" },
    { name: "Event C", date: "2025-01-10" },
  ];

  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState<number | "all">(1); // 1 = January

  // Filter data here in parent
  const filteredData = allData.filter((item) => {
    const d = new Date(item.date);
    const matchYear = d.getFullYear() === selectedYear;
    const matchMonth = selectedMonth === "all" ? true : d.getMonth() + 1 === selectedMonth;
    return matchYear && matchMonth;
  });

  const years = Array.from(new Set(allData.map((d) => new Date(d.date).getFullYear())));

  return (
    <>
      <ImageTitleSection
        title="Upcoming Event"
        imageUrl="/images/facilities-banner.jpg"
      />

      <div className="p-6">
        <div className='w-full flex justify-end'>
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

        <div className="mt-10">
          <MonthDataDisplay data={filteredData} year={selectedYear} />
        </div>
      </div>
    </>
  );
}

export default RouteComponent;
