import ImageTitleSection from '@/components/ImageHeader';
import UnderLine from '@/components/underLine';
import { createFileRoute } from '@tanstack/react-router'
import {
  Trophy,
} from "lucide-react";
export const Route = createFileRoute('/beyondAcademic')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ImageTitleSection
        title="Beyond Academics"
        imageUrl="/images/facilities-banner.jpg"
      />
      <section className="px-8 md:px-10 py-8 space-y-12 text-secondary">

        {/* ===== Row 1: Title + Paragraph ===== */}
        <div className="space-y-4">
          <h2 className="text-3xl font-abhaya flex gap-2 items-center"><Trophy size={28}/> Games & Sports</h2>
          <UnderLine/>
          <p>
            Our School is affiliated to the M.P. Board of Secondary Education, Madhya Pradesh,
            and the Sr School is affiliated till the senior secondary level (+2).
          </p>
        </div>

        {/* ===== Row 2: Two Images ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/gameAndSports/22.jpeg"
            alt="Games 1"
            className="w-full h-130 object-cover rounded-lg shadow-md"
          />
          <img
            src="/gameAndSports/19.jpeg"
            alt="Games 2"
            className="w-full h-130 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ===== Row 3: Paragraph ===== */}
        <p>
          Courses of study are designed to provide students with a well-rounded education that
          fosters intellectual growth and personal development. The curriculum is structured
          to prepare students for future academic pursuits, as well as to equip them with the
          skills necessary for success in the modern world, such as problem-solving,
          communication, and teamwork.
        </p>

        {/* ===== Row 4: Four Images ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src="/gameAndSports/game&sports.jpeg"
            alt="Course 1"
            className="w-full h-100 object-cover rounded-lg shadow-md"
          />
          <img
            src="/gameAndSports/25.jpeg"
            alt="Course 2"
            className="w-full h-100 object-cover rounded-lg shadow-md"
          />
          <img
            src="/gameAndSports/26.jpeg"
            alt="Course 3"
            className="w-full h-100 object-cover rounded-lg shadow-md"
          />
          <img
            src="/gameAndSports/21.jpeg"
            alt="Course 4"
            className="w-full h-100 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ===== Row 5: Title + Paragraph ===== */}
        <div className="space-y-4">
          <h3 className="text-2xl font-abhaya">Playfields and Playing Courts</h3>
          <UnderLine/>
          <p>
            Playfields and playing courts in schools provide students with essential opportunities
            for physical activity, recreation, and team-building. These outdoor spaces, which may
            include sports fields, basketball courts, tennis courts, and running tracks, are
            integral to a student's overall development. They not only encourage physical fitness
            but also promote social interaction, teamwork, and healthy competition. Regular
            participation in sports and games helps students build discipline, resilience, and
            confidence while offering a welcome break from academic pressures.
          </p>
        </div>

        {/* ===== Row 6: Two Images ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/gameAndSports/game&sports2.jpeg"
            alt="Playfield 1"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="/gameAndSports/game&sports3.jpeg"
            alt="Playfield 2"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ===== Row 7: Paragraph ===== */}
        <p>
          Playfields and courts are crucial for fostering a balanced school experience,
          contributing to both the physical well-being and mental well-being of students.
        </p>

        {/* ===== Row 8: Title + Paragraph ===== */}
        <div className="space-y-4">
          <h3 className="text-2xl font-abhaya">Inter-House and Inter-School Games and Sports</h3>
          <UnderLine/>
          <p>
            Inter-House and Inter-School games and sports in schools play a vital role in promoting
            camaraderie, school spirit, and physical fitness among students. Inter-House competitions
            allow students to represent their respective houses, fostering a sense of teamwork, pride,
            and healthy competition within the school. These events often include a wide variety of sports,
            such as athletics, football, cricket, and volleyball, encouraging students of all skill levels
            to participate. On a larger scale, Inter-School games and sports provide an opportunity for
            students to compete with peers from other schools, helping them develop resilience, sportsmanship,
            and the ability to handle both victory and defeat with grace. These sporting events not only
            promote physical health but also help students develop leadership qualities, time management skills,
            and lasting friendships.
          </p>
        </div>

        {/* ===== Row 9: Two Images ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/gameAndSports/24.jpeg"
            alt="Inter-House 1"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/gameAndSports/23.jpeg"
            alt="Inter-House 2"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

      </section>
    </>
  )
}
