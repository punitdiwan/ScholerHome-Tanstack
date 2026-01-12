import ImageTitleSection from '@/components/ImageHeader'
import UnderLine from '@/components/underLine'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/director')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ImageTitleSection
        title="Director"
        imageUrl="/images/facilities-banner.jpg"
      />
      <div className=" px-10 py-8 text-secondary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Left Content (2/3) */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-abhaya mb-2">
                Director Message
              </h2>
              <UnderLine/>

              <p className="leading-relaxed mt-4 mb-4">
                In Scholars Home Public School, Bhopal we see the beauty in variety and are proud
                to embrace methods that respect and nurture individual talents and aspirations.
                Our innovative methodology of education facilitates the natural learning process
                rather than factory-style education.
              </p>

              <p className="leading-relaxed mb-4">
                Scholars Home Public School implements child-centred pedagogy besides aiming to
                raise its bar in all spheres. In fact, it dovetails traditional and successful
                teaching practices with modern trends to inspire a generation that seeks
                variation.
              </p>

              <p className="leading-relaxed mb-4">
                A good school education must help to spot talent early on and guide students to
                make full use of it. Scholars Home Public School has benchmarked itself as an
                institution par excellence, fully geared to nurture students and enable them to
                meet the specific needs of the future.
              </p>

              <p className="leading-relaxed mb-4">
                The increasingly dynamic world has forced traditional pedagogy to adapt the
                latest technologies in teaching. While we keep pace with change, we ensure that
                our cultural roots are preserved.
              </p>

              <p className="leading-relaxed">
                At Scholars Home Public School, young minds are provided with positive
                reinforcement, guidance, and favourable conditions to face global challenges
                confidently. We look forward to an active partnership with parents in shaping
                the unique personality of every child.
              </p>
            </div>

            {/* Right Image (1/3) */}
            <div className="md:col-span-1 flex flex-col items-center text-center bg-white rounded-xl p-6">
              <img
                src="/principal.jpg"
                alt="Ms. Madhuri Seth"
                className="w-54 h-64 object-cover rounded-lg mb-4 shadow-xl border-2 border-black p-1"
              />
              <h3 className="text-lg font-bold">Ms. Madhuri Seth</h3>
              <p className="text-sm text-gray-600">Director</p>
            </div>

          </div>
        </div>
    </>
  )
}
