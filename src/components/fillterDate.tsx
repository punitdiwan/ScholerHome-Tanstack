type Month = {
  label: string;
  value: number;
};

type FilterByDateProps = {
  years: number[];                  // Options for year dropdown
  months?: Month[];                 // Options for month dropdown
  selectedYear?: number;
  selectedMonth?: number | "all";
  onChange: (year: number, month: number | "all") => void; // Parent callback
};

const defaultMonths: Month[] = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

export const FilterByDate = ({
  years,
  months = defaultMonths,
  selectedYear,
  selectedMonth = "all",
  onChange,
}: FilterByDateProps) => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* Year Dropdown */}
      <select
        value={selectedYear}
        onChange={(e) => onChange(Number(e.target.value), selectedMonth)}
        className="px-4 py-2 border border-light rounded-md"
      >
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      {/* Month Dropdown */}
      <select
        value={selectedMonth}
        onChange={(e) => onChange(selectedYear!, e.target.value === "all" ? "all" : Number(e.target.value))}
        className="px-2 py-2 border border-light rounded-md"
      >
        <option value="all">All Months</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
    </div>
  );
};
