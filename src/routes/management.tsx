import UnderLine from '@/components/underLine';
import { managementData } from '@/data/demo.management';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/management')({
  loader: async ()=>{
      return await managementData()
  },
  component: RouteComponent,
})

function RouteComponent() {
  const managementTeam =  Route.useLoaderData();

  return (
    <>
      <div className='px-10 py-8  text-secondary'>
        <div className=" border-b border-gray-200 pb-6 mb-4">
          <h1 className="text-xl font-abhaya mb-2">Management</h1>
          <UnderLine />
          <p className=" leading-relaxed mt-2">
            The management of Scholars Home Public School is guided by a team of experienced and
            passionate education leaders who are deeply committed to the holistic
            development of students and staff. Their collective vision, leadership, and
            dedication have played a significant role in shaping the school into a
            progressive learning institution focused on excellence, innovation, and
            values-based education.
          </p>

          <p className=" leading-relaxed mt-4">
            The Senior Management Team believes in leading by example—knowing the way,
            going the way, and showing the way—while fostering a collaborative,
            inclusive, and growth-oriented school culture.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-abhaya mb-2">Management Team</h2>
          <UnderLine />
          <div className="space-y-8 mt-6 p-6">
            {managementTeam.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row gap-8 bg-white border-b border-gray-200  mb-10"
              >
                {/* Image */}
                <div className="md:w-1/4 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/4">
                  <h3 className="font-abhaya text-xl mb-1">{member.name}:{member.designation}</h3>
                  <UnderLine/>

                  <p className=" leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>)
}
