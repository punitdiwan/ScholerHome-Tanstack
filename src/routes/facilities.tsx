import ImageTitleSection from '@/components/ImageHeader';
import UnderLine from '@/components/underLine';
import { createFileRoute } from '@tanstack/react-router'
// import {
//   BookOpen,
//   Microscope,
//   Users,
//   GraduationCap,
//   School,
// } from "lucide-react";
export const Route = createFileRoute('/facilities')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ImageTitleSection
        title="Facilities"
        imageUrl="/public/placholder/image_header_placeholder.jpg"
      />
      <section className="px-8 md:px-10 py-8 space-y-12 text-secondary">

        {/* ===== Row 1: Title + Paragraph ===== */}
        <div className="space-y-2">
          <h3 className="text-2xl font-abhaya">Affiliation:</h3>
          <UnderLine />
          <p >
            Our School is affiliated to the M.P. Board of Secondary Education, Madhya Pradesh
            and the Sr School is affiliated till the senior secondary level (+2).
          </p>
        </div>

        {/* ===== Row 2: Title + Paragraph ===== */}
        <div className="space-y-2">
          <h3 className="text-2xl font-abhaya">Courses of Study:</h3>
          <UnderLine />
          <p>
            Students can opt for following Faculties in XI and XII Std.
            <br />- Physics, Chemistry & Biology
            <br />- Physics, Chemistry & Maths
            <br />- Business Studies, Accountancy & Maths
            <br />- Commerce With Computer (IP)
            <br />- Commerce with B. Economics
            <br />- Humanities
          </p>
          <p>
            Attendance in class is compulsory, portions covered during April will not be repeated.
            Special care is taken of every child. To bring excellence among students, new methods
            have been introduced. Highly experienced, qualified, and dedicated staff in all subjects
            for all classes. SMS facility for proper communication with parents and children.
          </p>
        </div>

        {/* ===== Row 3: Title + Paragraph ===== */}
        <div className="space-y-2">
          <h3 className="text-2xl font-abhaya">Classrooms and Teacher-Student ratio:</h3>
          <UnderLine />
          <p>
            The classrooms are modern, large, and airy with proper lighting and provide the most conducive
            atmosphere for learning. All secondary classes in Scholar's Home are interactive classrooms
            with SMART BOARDS, networked computers and DLP Projectors. Many classrooms have Visualizers.
            The computers are networked on LAN with a huge repository of educational software.
          </p>
          <p>
            The classrooms are fitted with latest equipment so that children get the best teaching aids
            through computer-aided-teaching (CAT). The school maintains a class-section average strength
            of just 25 pupils in junior classes and 30 pupils in senior classes to achieve academic excellence.
          </p>
        </div>

        {/* ===== Row 4: Two Images ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/facilities/teachers (1).jpeg"
            alt="Classroom 1"
            className="w-full h-70 object-cover rounded-lg shadow-md"
          />
          <img
            src="/public/placholder/facilities_classroom_placholder.jpg"
            alt="Classroom 2"
            className="w-full h-70 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ===== Row 5: Library ===== */}
        <div className="space-y-4">
          <h3 className="text-2xl font-abhaya">Library:</h3>
          <UnderLine />
          <p>
            In addition to supporting classroom learning, the library serves as a quiet space for students
            to explore their interests, enhance creativity, and develop critical thinking. With guidance
            from librarians, students learn to find and use information effectively. The library provides
            access to a wide range of books, educational materials, and research tools, improving knowledge
            and academic skills.
          </p>
        </div>

        {/* ===== Row 6: Two empty columns for images placeholder ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <img
            src="/facilities/2.jpeg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
          <img
            src="/facilities/5.jpeg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
          <img
            src="/public/placholder/Libraray_lab_placeholder.jpg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ===== Row 7: Laboratories ===== */}
        <div className="space-y-4">
          <h3 className="text-2xl font-abhaya">Laboratories:</h3>
          <UnderLine />
          <p>
            Modern and well-equipped science laboratories are available in both schools. The labs have essential
            equipment for practicals in secondary and senior secondary stages. Students preserve a variety of
            specimens and take keen interest in science projects.
          </p>
        </div>

        {/* ===== Row 8: Four images ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src="/facilities/3.jpeg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
          <img
            src="/facilities/4.jpeg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
          <img
            src="/public/placholder/Libraray_lab_placeholder.jpg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
          <img
            src="/facilities/6.jpeg"
            alt="Classroom 2"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* ===== Row 9: Parent-Teacher Meetings Paragraph ===== */}
        <div className="space-y-4">
          <h3 className="text-2xl font-abhaya">Parent-Teacher Meetings:</h3>
          <UnderLine />
          <p>
            Over the last few years there has been a countrywide debate amongst pedagogues, parents, teachers
            and educational boards regarding a change in the evaluation system in schools. Keeping in view the
            evaluation systems of developed countries and public opinion, the M.P. Board of Secondary Education,
            Madhya Pradesh has introduced new evaluation methods.
          </p>
        </div>

      </section>

    </>)
}

