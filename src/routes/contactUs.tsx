import SubmitButton from '@/components/SubmitBTN';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
// import { z } from "zod";
import ImageTitleSection from '@/components/ImageHeader';
// import { zodResolver } from "@hookform/resolvers/zod";

export const Route = createFileRoute('/contactUs')({
  component: RouteComponent,
});

/* ------------------ ZOD SCHEMAS ------------------ */

// const contactUsSchema = z.object({
//   fullName: z.string().min(2, "Full name is required"),
//   email: z.string().email("Invalid email address"),
//   mobile: z.string().min(10, "Mobile number is required"),
//   subject: z.string().min(2, "Subject is required"),
//   message: z.string().min(5, "Message is required"),
// });

// const technicianSchema = z.object({
//   studentName: z.string().min(2, "Student name is required"),
//   idNo: z.string().min(1, "ID number is required"),
//   parentEmail: z.string().email("Invalid email"),
//   subject: z.string().min(2, "Subject is required"),
//   message: z.string().min(5, "Message is required"),
// });

// type ContactUsForm = z.infer<typeof contactUsSchema>;
// type TechnicianForm = z.infer<typeof technicianSchema>;

// const contactForm = useForm<ContactUsForm>({
//   resolver: zodResolver(contactUsSchema),
// });

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = contactForm;
/* ------------------ PAGE ------------------ */

function RouteComponent() {
  const [showTechForm, setShowTechForm] = useState(false);
  // const onContactSubmit = (data: ContactUsForm) => {
  //   console.log("Contact Us Data:", data);
  // };
  return (
    <>
      <ImageTitleSection
        title="Contact Us"
        imageUrl="home7.png"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10">

          {/* ================= LEFT : CONTACT US (2/3) ================= */}
          <div className="md:w-2/3 bg-white rounded-xl shadow-md p-10">

            <h2 className="text-3xl font-abhaya text-secondary mb-4">
              Connect With Us
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              If you didn't find what you were looking for on our website, go ahead
              and utilize the school enquiry form underneath for any data or questions
              you have for us. We couldn't imagine anything better than to hear from you.
            </p>

            <form className="space-y-6">

              <div className='flex flex-wrap gap-4'>
                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" placeholder="Enter full name" />
                </div>

                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" placeholder="Enter email" />
                </div>
              </div>

              <div className='flex flex-wrap gap-4'>
                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" placeholder="Enter mobile number" />
                </div>

                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" placeholder="Subject" />
                </div>
              </div>
              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                  placeholder="Write your message"
                />
              </div>

              {/* Checkbox */}
              {/* <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              <span className="text-sm text-gray-600">Send a copy to me</span>
            </div> */}

              {/* Submit */}
              <SubmitButton />

            </form>
          </div>

          <div className="md:w-1/3 bg-white rounded-xl shadow-md p-8 h-fit">

            <h3 className="text-2xl font-abhaya text-secondary mb-4">
              Technical Assistance
            </h3>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Each communication made by our stakeholders holds a great value for us!
              Our technical team is always happy to assist and help you.
            </p>

            <button
              onClick={() => setShowTechForm(prev => !prev)}
              className="
              cursor-pointer
              relative overflow-hidden
              text-primary font-medium mb-6
              after:absolute after:left-1/2 after:bottom-0
              after:h-0.75 after:w-0 after:bg-primary
              after:transition-all after:duration-300
              hover:after:left-0 hover:after:w-full
            "
            >
              {showTechForm ? "Hide Form" : "View Form"}
            </button>

            {showTechForm && (
              <form className="space-y-5">

                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                    placeholder='Student Name *' />
                </div>

                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                    placeholder='Id No. *' />
                </div>

                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                    placeholder='Parent Email *' />
                </div>

                <div>
                  <input className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                    placeholder='Subject *' />
                </div>

                <div>
                  <textarea rows={3} className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                    placeholder='Please Fill Message *' />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-sm text-gray-600">Send a copy to me</span>
                </div>

                <SubmitButton />

              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default RouteComponent;
