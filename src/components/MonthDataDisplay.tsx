type DataItem = {
  name: string;
  date: string; // YYYY-MM-DD
};

type MonthDataProps = {
  data: DataItem[];
  year: number; // Year to display
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const MonthDataDisplay: React.FC<MonthDataProps> = ({ data, year }) => {
  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg">
        No events found for {year}.
      </div>
    );
  }

  // Group data by month
  const monthGroups: Record<number, DataItem[]> = {};
  data.forEach((item) => {
    const date = new Date(item.date);
    const month = date.getMonth(); // 0-based
    if (!monthGroups[month]) monthGroups[month] = [];
    monthGroups[month].push(item);
  });

  return (
    <div className="flex flex-col gap-10">
      {/* Show year */}
      <h2 className="text-3xl md:text-4xl font-bold text-secondary">
        {year}
      </h2>

      {Object.keys(monthGroups)
        .sort((a, b) => Number(a) - Number(b))
        .map((m) => {
          const monthIndex = Number(m);
          const items = monthGroups[monthIndex];

          return (
            <div key={monthIndex}>
              {/* Month Title */}
              <h2 className="text-2xl md:text-3xl font-abhaya text-secondary mb-4">
                {monthNames[monthIndex]}
              </h2>

              {/* Data Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 mt-1">{new Date(item.date).toDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};
