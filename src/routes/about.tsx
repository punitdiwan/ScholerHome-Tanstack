import ImageTitleSection from '@/components/ImageHeader'
import UnderLine from '@/components/underLine'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ImageTitleSection
        title="Core values"
        imageUrl="/public/placholder/image_header_placeholder.jpg"
      />
      <div className='px-10 py-8'>
        <div className="flex flex-col md:flex-row items-center border-b border-gray-200 pb-6 mb-4">

          {/* Left Text Section */}
          <div className="md:w-1/1 text-left p-4 ">
            <h2 className="text-3xl font-abhaya text-title  mb-4">Welcome</h2>
            <UnderLine />
            <p className="text-gray-700 font-light pr-4 mb-4">
              The Scholars Home Public School is a co-educational, day boarding-cum-residential school.
              Established under the aegis of the Sharda Devi Charitable Trust – it is a non-profit
              institution, and a tribute to the memory of our respected matriarch.
            </p>

            <p className="text-gray-700 font-light pr-4">
              A deep sense of commitment to provide innovative education is the foundation
              for such an educational endeavour.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/3 ">
            <img
              src="/public/placholder/about_place.jpg"
              alt="scholar homes School"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>

        </div>

        <section
          className="relative bg-auto bg-no-repeat "
          style={{ backgroundImage: "url(/sanskaar-valley-a5.png)" }}
        >
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#007744]/90"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-10 text-white">

            {/* Title */}
            <h2 className="text-2xl font-abhaya md:text-3xl  mb-2">
              Our Belief
            </h2>
            <UnderLine />

            {/* Description */}
            <div className="mt-4 space-y-4 text-white/90 leading-relaxed">
              <p>
                We believe that education must engage with and enlarge experience for the
                overall growth of the individual. The school encourages this by integrating
                sports, hobby activities, special day celebrations, community service,
                eco-friendly initiatives and excursions within the curriculum and adopts
                a holistic and down-to-earth approach.
              </p>

              <p>
                The knowledge and manifestations of a future dominated by technology and
                globalization have engulfed every sphere in life today and our students
                are being groomed to operate efficiently across the world in a multi-cultural
                environment.
              </p>

              <p>
                Alongside education, we place renewed emphasis on the moral and cultural
                dimensions within the wealth of Indian traditions and values. We want to
                see our efforts culminate into an upbringing which every parent dreams
                of for his child.
              </p>
            </div>

          </div>
        </section>

        <section className="p-6 border-t  border-gray-200  mt-4">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Left Content (2/3) */}
            <div className="md:w-1/1">
              <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                Core Values
              </h2>
              <UnderLine />

              <p className="mt-4 font-abhaya text-gray-700 text-xl leading-relaxed ">
                To nurture individuals towards excellence in a happy, value-based
                and progressive learning community.
              </p>
            </div>

            {/* Right Image (1/3) */}
            <div className="md:w-1/3 w-full">
              <img
                src="/sanskaar-i36.jpg"
                alt="Core Values"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

          </div>
        </section>

        <section className="p-6 border-t  border-gray-200 pt-10 mt-6">

          <div className="flex gap-8">

            {/* Child Centric */}
            <div className=''>
              <h3 className="text-2xl font-abhaya text-secondary  mb-2">
                Child Centric
              </h3>
              <UnderLine />

              <p className="mt-4 text-secondary leading-relaxed">
                We strongly believe in a child-centric approach to allow the child
                to make their own choices and establish their own ideas towards
                promoting competent communication and learning. Helping them evolve
                mentally and physically, encouraging them to lead healthy lives.
              </p>
            </div>

            {/* Innovation */}
            <div>
              <h3 className="text-2xl font-abhaya text-secondary  mb-2">
                Innovation
              </h3>
              <UnderLine />

              <p className="mt-4 text-secondary leading-relaxed">
                Innovation is everywhere in our rapidly-changing world. It's one of
                those terms used often, but rarely defined. If creativity is the
                ability to generate new ideas, innovation can be thought of as the
                processes of bringing those new ideas to realization.
              </p>
            </div>

            {/* Mutual Respect */}
            <div>
              <h3 className="text-2xl font-abhaya text-secondary mb-2">
                Mutual Respect
              </h3>
              <UnderLine />

              <p className="mt-4 text-secondary leading-relaxed">
                An environment of mutual trust and respect is necessary if the
                institution is to promote integrity. Mutual trust and respect are
                prerequisites for open communication and honest dialogue about
                values, goals and expectations.
              </p>
            </div>

          </div>
        </section>

        <section className="p-6 border-t  border-gray-200 pt-10 mt-6">

          {/* Title */}
          <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
            Commitment to Excellence
          </h2>
          <UnderLine />
          <p className="mt-4 text-secondary leading-relaxed">
            "Excellence is an art won by training and habituation. We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly. We are what we repeatedly do. Excellence, then, is not an act but a habit." - Aristotle

            The quality of our work is directly proportional to the commitment we practice.
          </p>
        </section>
      </div>
    </>
  )
}
