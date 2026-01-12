import ImageTitleSection from '@/components/ImageHeader'
import UnderLine from '@/components/underLine'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/googleStreetView')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ImageTitleSection
        title="Google Street View"
        imageUrl="/images/facilities-banner.jpg"
      />

      <div className="px-10 py-8  text-secondary space-y-12 ">

        {/* ===== Row 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-200 pb-6 mb-4">

          {/* Left: School Map */}
          <div>
            <h2 className="text-2xl font-abhaya mb-2">School Map</h2>
            <UnderLine/>
            <div className="overflow-hidden ">
              <img
                src="/public/campus_img2.jpg"
                alt="School Map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Campus Layout Plan */}
          <div>
            <h2 className="text-2xl font-abhaya mb-2">Campus Layout Plan</h2>
            <UnderLine/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-4">

              {/* Column 1 */}
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Administrative Block</li>
                <li>Pre-Primary Block (Aadhar)</li>
                <li>Dining Hall & Kitchen (Ananda)</li>
                <li>Indoor Sports Complex (Umang)</li>
                <li>Swimming Pool</li>
                <li>Lake</li>
                <li>Boys' Dormitories (Kshitij)</li>
                <li>Staff Residence (Arpan)</li>
                <li>Principal's Residence</li>
                <li>Girls' Dormitories (Prerna)</li>
              </ol>

              {/* Column 2 */}
              <ol
                start={11}
                className="list-decimal pl-5 space-y-1  text-sm"
              >
                <li>Academic Block-III (Shikhar)</li>
                <li>Academic Block-II (Sopaan)</li>
                <li>Academic Block-I (Prangan)</li>
                <li>Labs & Library Block (Aakar & Anant)</li>
                <li>Tennis Courts</li>
                <li>Basket Ball Courts</li>
                <li>Play Ground-I</li>
                <li>Synthetic Soccer Turf</li>
                <li>Parking</li>
              </ol>

            </div>
          </div>
        </div>

        {/* ===== Row 2 ===== */}
        <div className="">
          <h2 className="text-2xl font-abhaya mb-3">Google Streetview</h2>
          <UnderLine/>
          <p className=" leading-relaxed my-4">
            Now you can see a <strong>360° view</strong> of the various facilities at the school
            on click of your mouse. Just click on the facility that you wish to view and
            navigate your way by dragging the mouse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Gallery Item */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/gallery/academic-block.jpg"
              alt="Academic Block"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Academic Block</h3>
              <p className="text-xs opacity-90">Learning & Innovation</p>
            </div>
          </div>

          {/* Gallery Item */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/gallery/sports-complex.jpg"
              alt="Indoor Sports Complex"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Indoor Sports Complex</h3>
              <p className="text-xs opacity-90">Umang</p>
            </div>
          </div>

          {/* Gallery Item */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/gallery/swimming-pool.jpg"
              alt="Swimming Pool"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Swimming Pool</h3>
              <p className="text-xs opacity-90">Fitness & Recreation</p>
            </div>
          </div>

          {/* Gallery Item */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/gallery/playground.jpg"
              alt="Playground"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Playground</h3>
              <p className="text-xs opacity-90">Outdoor Activities</p>
            </div>
          </div>

          {/* Gallery Item */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/gallery/library.jpg"
              alt="Library & Labs"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Library & Labs</h3>
              <p className="text-xs opacity-90">Aakar & Anant</p>
            </div>
          </div>

          {/* Gallery Item */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/gallery/hostel.jpg"
              alt="Hostels"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Residential Facilities</h3>
              <p className="text-xs opacity-90">Student Hostels</p>
            </div>
          </div>

        </div>

      </div>

    </>)
}
