import ImageTitleSection from '@/components/ImageHeader'
import UnderLine from '@/components/underLine';
import { holidayData } from '@/data/demo.holiday';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/holidays')({
  loader: async ()=>{
      return await holidayData();
  },
  component: RouteComponent,
})

function RouteComponent() {
    const holidays = Route.useLoaderData();

  return (
    <>
      <ImageTitleSection
        title="Holidays"
        imageUrl="/public/placholder/image_header_placeholder.jpg"
      />
      <div className="px-10 py-8 text-secondary">

        <h2 className="text-3xl font-abhaya mb-2">
          List of Holidays : Academic Year 2025 – 2026
        </h2>
        <UnderLine/>

        <div className="overflow-x-auto mt-4">
          <table className="w-full bg-white border-collapse border border-primary">
            <thead className="bg-gray-100 border-b-2 border-gray-400">
              <tr>
                <th className="px-4 py-3 text-black/90 text-left text-sm font-semibold border border-gray-400">#</th>
                <th className="px-4 py-3 text-black/90 text-left text-sm font-semibold border border-gray-400">Date(s)</th>
                <th className="px-4 py-3 text-black/90 text-left text-sm font-semibold border border-gray-400">Occasion</th>
              </tr>
            </thead>

            <tbody className="divide-y border border-gray-400">
              {holidays.map((holiday, index) => (
                <tr key={holiday.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-200"
                  } hover:bg-gray-300 transition`}>
                  <td className="px-4 py-3 text-sm border border-gray-400">{index + 1}</td>
                  <td className="px-4 py-3 text-sm border border-gray-400">{holiday.date}</td>
                  <td className="px-4 py-3 text-sm border border-gray-400">{holiday.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>


    </>
  )
}
