import { FilterByDate } from '@/components/fillterDate';
import ImageTitleSection from '@/components/ImageHeader';
import { MonthDataDisplay } from '@/components/MonthDataDisplay';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from "react";

export const Route = createFileRoute('/newsFeed')({
  component: RouteComponent,
});

type NewsItem = {
  title: string;
  date: string; // YYYY-MM-DD
  description?: string; // optional summary of news
};

function RouteComponent() {
  // Example News data
  const allNews: NewsItem[] = [
    { title: "New Campus Inauguration", date: "2026-01-10", description: "The new sports complex was inaugurated by the Principal." },
    { title: "Annual Day Celebration", date: "2026-02-15" },
    { title: "Science Exhibition", date: "2025-03-20", description: "Students presented innovative projects." },
    { title: "Inter-school Debate", date: "2026-01-25" },
    { title: "Tech Workshop", date: "2026-03-05", description: "AI & Robotics workshop for students." },
  ];

  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState<number | "all">(1); // Default January

  const years = Array.from(new Set(allNews.map((d) => new Date(d.date).getFullYear())));

  // Filter news by year and month
  const filteredData = allNews.filter((item) => {
    const d = new Date(item.date);
    const matchYear = d.getFullYear() === selectedYear;
    const matchMonth = selectedMonth === "all" ? true : d.getMonth() + 1 === selectedMonth;
    return matchYear && matchMonth;
  });

  return (
    <>
      <ImageTitleSection
        title="News Feed"
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

        {/* Month-wise News Feed */}
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
