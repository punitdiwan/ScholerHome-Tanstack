import AddBTN from '@/components/admissionSectionButton';
import ImageTitleSection from '@/components/ImageHeader';
import ProcedureDialog from '@/components/ProcedureDialog';
import UnderLine from '@/components/underLine'
import { admissionsData } from '@/data/demo.admission';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/admission')({
    loader: async ()=>{
        return await admissionsData()
    },
    component: RouteComponent,
})

function RouteComponent() {
    const admissionsData = Route.useLoaderData();
    const [open, setOpen] = useState(false);
    const [currentProcedure, setCurrentProcedure] = useState<{ title: string, description?: string, steps: any[] } | null>(null);
    
    return (
        <>
            <ImageTitleSection
                title="Admissions"
                imageUrl="/images/facilities-banner.jpg"
            />
            <div className='px-10 py-8'>
                <section className=" py-6 px-2 text-center"
                    style={{
                        backgroundImage: "url('/shlok.jpg')",
                        backgroundPosition: "left center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>

                    <h2 className="text-2xl md:text-3xl text-[#132f57] font-semibold font-abhaya mb-2">
                        Admissions Open for the Academic Session 2026-27
                    </h2>

                    <div className="text-secondary font-light text-md md:text-lg max-w-4xl mx-auto">
                        <p>
                            <strong> Day School Seats Available:</strong> Aarambh (Nursery), Neev I (KG-I), Neev II (KG-II) and Nirmaan (Grade-I)
                        </p>
                        <p>
                            <strong>Against Vacancy:</strong> Grades II to IX
                        </p>
                        <p>
                            <strong>Cambridge Curriculum:</strong> Grades VI to XII
                        </p>
                        <p>
                            <strong>Boarding School Seats Available:</strong> Grades V to IX & XI (Boys & Girls)
                        </p>
                    </div>

                </section>

                <section className=" py-20">
                    <div className="flex flex-col md:flex-row gap-10 items-start">

                        {/* Left Side - Text */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                Admissions
                            </h2>
                            <UnderLine />
                            <p className="text-secondary leading-relaxed mt-4 mb-4">
                                Committed to our core value of nurturing excellence, we at The Scholars Home Public School
                                are ensuring that optimum learning is happening for your child in an environment that is
                                student-centric, fosters mutual respect and stimulates innovation.
                            </p>

                            <p className="text-secondary leading-relaxed mb-4">
                                With an intention to serve the student and parent communities and remain completely impartial,
                                the school follows an explicit admission process.
                            </p>


                        </div>

                        {/* Right Side - Images */}
                        <div className="md:w-1/2 flex flex-col gap-4">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-abhaya text-secondary  mb-2">Admission Procedure</h2>
                                <UnderLine />
                                <p className="mt-4 text-secondary leading-relaxed">
                                    Click on the below images to know more.
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <AdmissionImageCard
                                    src="/sanskaar-admission-1.jpg"
                                    label="Nursery to Class I"
                                    onClick={() => {
                                        setCurrentProcedure({
                                            title: "Procedure for Admission - Nursery to Class I",
                                            description: "Guidelines and steps for admission process",
                                            steps: admissionsData.steps
                                        });
                                        setOpen(true);
                                    }}
                                />

                                <AdmissionImageCard
                                    src="/sanskaar-admission-2.jpg"
                                    label="Class II - XII"
                                    onClick={() => {
                                        setCurrentProcedure({
                                            title: "Admission to classes II to XII is dependent upon availability of vacancies.",
                                            description: "Guidelines and steps for admission process",
                                            steps: admissionsData.steps1
                                        });
                                        setOpen(true);
                                    }}
                                />

                            </div>
                        </div>

                    </div>
                </section>

                <ImportantInfoSection />

                {currentProcedure && (
                    <ProcedureDialog
                        open={open}
                        onClose={() => setOpen(false)}
                        title={currentProcedure.title}
                        description={currentProcedure.description}
                        steps={currentProcedure.steps}
                    />
                )}

            </div>
        </>
    )
}


const AdmissionImageCard = ({ src, label, onClick }: any) => {
    return (
        <div className="w-full group cursor-pointer" onClick={onClick}>
            <div className="relative w-full h-60 rounded-t-lg overflow-hidden shadow-lg">
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-0 left-1/2 h-0.75 w-0 bg-yellow-400 group-hover:left-0 group-hover:w-full transition-all duration-700"></span>
            </div>
            <p className=" text-center font-semibold py-5 bg-[#132f57] text-white">{label}</p>
        </div>
    );
};


import { FaBullseye } from "react-icons/fa";

const ImportantInfoSection = () => {
    // Left side buttons
    const buttons = [
        { label: "Online Registration Form", route: "/online-registration" },
        { label: "Download Registration Form (Day School)", route: "/download-day-school" },
        { label: "Download Registration Form (Boarding School)", route: "/download-boarding-school" },
        { label: "Basic Enquiry", route: "/basic-enquiry" },
        { label: "Transport Form", route: "/transport-form" },
        { label: "Medical Form", route: "/medical-form" },
        { label: "Day School Fees", route: "/day-school-fees" },
        { label: "Boarding School Fees", route: "/boarding-school-fees" },
    ];


    // Right side list
    const guidelines = [
        "Please pay 1000/- online towards the payment of registration form.",
        "Please upload all the required documents.",
        "All the fields which are * marked are to be filled mandatorily.",
    ];

    return (
        <section className="border-t  border-gray-200 pt-10  px-6 py-10 flex flex-col md:flex-row gap-10">

            {/* Left Column */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-abhaya text-secondary mb-2">Important Information</h2>
                <UnderLine />
                <div className="flex flex-wrap gap-2 mt-4">
                    {buttons.map((data) => (
                        <AddBTN
                            label={data.label}
                        />
                    ))}
                </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-abhaya text-secondary mb-2">Guidelines for Online Registration</h2>
                <UnderLine />
                <div className=' flex flex-col gap-4 mt-4'>
                    {guidelines.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <FaBullseye className="text-yellow-400 mt-1" />
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ImportantInfoSection;


