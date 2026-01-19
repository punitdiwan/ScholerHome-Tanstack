import AddBTN from '@/components/admissionSectionButton';
import ImageTitleSection from '@/components/ImageHeader';
import ProcedureDialog from '@/components/ProcedureDialog';
import UnderLine from '@/components/underLine'
import { admissionsData } from '@/data/demo.admission';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/admission')({
    loader: async () => {
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
                imageUrl="home7.png"
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
                                The Rules and Regulations of Scholars Home Public School have been framed to make the parents aware of what is expected of them and their children. It is imperative that all parents abide by a certain code of conduct in the best interest of their children and to facilitate the smooth functioning of the school.
                            </p>

                            <p className="text-secondary leading-relaxed mb-4">
                                The School Management reserves the rights of admission.
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
                <section className=" py-20">
                    <div className="flex flex-col  gap-10 items-start">
                        <div >
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                DISCIPLINE
                            </h2>
                            <UnderLine />
                            <ul className="text-secondary leading-relaxed mt-4 mb-4 list-decimal pl-6 space-y-2">
                                <li>
                                    Any child leaving the school campus without permission from the School Office will be doing so at his/her own parents’ risk and responsibility.
                                </li>
                                <li>
                                    There is a continuous effort to instil high moral qualities in the children but should any child indulge in any anti-social/immoral act, he/she will be liable to serious disciplinary action even to the extent of expulsion without any warning or as deemed fit by the Head of School or the management.
                                </li>
                                <li>
                                    Children are not permitted to possess any of the following: sordid reading/viewing material, cash, mobiles, SIM cards, electronic equipment, intoxicating substances, weapons or any other such banned items.
                                </li>
                                <li>
                                    Intoxication of any kind is not permitted. Any child indulging in drinking/smoking/substance abuse shall be immediately expelled without any notice/warning.
                                </li>
                                <li>
                                    The school is a smoke/drink free zone. Parents/guardians/visitors are not permitted to smoke/drink on the school campus.
                                </li>
                                <li>
                                    No student is permitted to buy, sell or exchange goods or lend or borrow money or tuck on campus. Nor are they allowed to do so when they go on outings organized by the school.
                                </li>
                                <li>
                                    Parents are strictly prohibited from giving any kind of tips, money or gifts to any servant or member of the staff. Breach of this will be viewed very seriously.
                                </li>
                                <li>
                                    Parents/guardians are permitted to visit their children only during visiting weekends mentioned in the School Calendar and not on any other day or holiday, as it disturbs the school routine.
                                </li>
                                <li>
                                    All school games, activities and PT are mandatory. Children may be required to attend sport/activity camps during vacations as well. Complete co-operation in this regard is to be extended by the parents/guardians.
                                </li>
                                <li>
                                    Destruction of school property of any kind or misuse of resources provided including books, computers, internet services, smart boards, musical instruments or any such items will invite strict disciplinary action.
                                </li>
                                <li>
                                    Distasteful or unacceptable behaviour among students or staff members such as bullying, groupism, excessive argumentative or aggressive behaviour, use of unparliamentary language or unhealthy relationships shall be liable for strict disciplinary action.
                                </li>
                                <li>
                                    Children must come back to school with a proper haircut and be smartly dressed in school uniform after vacations.
                                </li>
                            </ul>

                        </div>
                        <div >
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                LEAVE
                            </h2>
                            <UnderLine />
                            <ul className="text-secondary leading-relaxed mt-4 mb-4 list-decimal pl-6 space-y-2">
                                <li>
                                    Leave is not a matter of right and shall be authorized or declined by the school office, keeping in view the specific requirements.
                                </li>
                                <li>
                                    Parents/Guardians are requested not to disrupt the school routine by coming early to pick up their children. They must ensure that children return to school on the specified date and time after vacations or visiting weekends. Reservation of tickets and other arrangements must be made well in time, keeping in view the school calendar.
                                </li>
                                <li>
                                    Leave is at the discretion of the Head of School and shall be binding. Special leave of absence of two days plus journey time may be granted in the case of marriage of the child's or the parent's real brother or sister. One day plus journey time for visiting home in case of the death of any immediate relation may also be granted. Medical leave shall be granted as per the advice of the School Doctor, who should certify the duration of such leave.
                                </li>
                                <li>
                                    No child is allowed to go on leave alone or with friends. If the parents so desire, an authority letter should be sent by the parent to the school well in advance. Telephonic messages will not be accepted.
                                </li>
                                <li>
                                    To maintain discipline and to inculcate the habit of punctuality, overstay of leave shall be liable to a fine. The amount of fine to be levied will be determined by the school authorities.
                                </li>
                            </ul>

                        </div>
                    </div>
                </section>

                <section className=" py-20">
                    <div className="flex flex-col gap-10 items-start">
                        <div >
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                MEDICAL
                            </h2>
                            <UnderLine />

                            <ul

                                className="text-secondary leading-relaxed mt-4 mb-4 list-decimal pl-6 space-y-2"
                            >
                                <li>
                                    Please note that, as the school is a residential school in a hilly terrain, only medically fit children shall be admitted. Medically unfit children are advised not to seek admission.
                                </li>
                                <li>
                                    If in due course it is observed that the child is medically unfit in any manner whatsoever for continuing in the boarding school, she/he shall be asked to withdraw immediately and the decision of the School in the matter will be final and binding.
                                </li>
                                <li>
                                    The school will not be liable for any damages or charges, or in any other way, for any injuries, fatal or otherwise, caused during the child's stay in the school, whether within or outside the school campus, while on camps or while taking part in sports, games or any other school activity.
                                </li>
                                <li>
                                    All expenses that may be incurred for the treatment of such injuries or sickness will be borne by the parent or guardian of the child.
                                </li>
                                <li>
                                    Children who wet their beds or sleepwalk are liable to be asked to withdraw.
                                </li>
                                <li>
                                    The School Office must be informed immediately whenever extension of leave is sought on medical grounds. Parents must not wait to inform until the child recovers. A Doctor’s “Medical Certificate of Fitness” along with justification for the days of absence due to illness must be submitted to the School Office on the day the child returns to school.
                                </li>
                                <li>
                                    By signing these Rules and Regulations, we give explicit and full permission to the school authorities to get our child treated by any doctor of their choice and authorize such doctor to take whatever action is deemed necessary while treating the child.
                                </li>
                                <li>
                                    I/We, the undersigned, give the school authorities complete permission to authorize minor or major surgeries and shall not hold the school or the doctor responsible for any such action done in good faith in the best interest of the child.
                                </li>
                                <li>
                                    No child with lice, lice eggs, or skin problems shall be permitted to join the school, keeping the hygiene of all children in mind.
                                </li>
                            </ul>

                        </div>
                        <div >
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                FEE
                            </h2>
                            <UnderLine />

                            <ul

                                className="text-secondary leading-relaxed mt-4 mb-4 list-decimal pl-6 space-y-2"
                            >
                                <li>
                                    Fee-related rules may please be noted from the school website.
                                </li>
                                <li>
                                    School fees are to be paid by the due dates; otherwise, a fine or penalty as per school rules will be charged. If the arrears are not cleared within two months of the due date of payment, the parent may be asked to withdraw the child.
                                </li>
                                <li>
                                    A “Schedule of Fees” is published in the month of December, giving details of the fee structure for the ensuing academic session.
                                </li>
                                <li>
                                    The school management reserves the right to revise the school fee as and when the need arises.
                                </li>
                                <li>
                                    Depositing an advance fee for reservation of a seat for the next academic session is mandatory. If the child’s seat is not reserved by depositing the advance fee (first instalment) for the ensuing academic session in the preceding month of December, the school is not obliged to offer a seat or admit the child in the following year.
                                </li>
                            </ul>

                        </div>

                    </div>
                </section>

                <section className=" py-20">
                    <div className="flex flex-col  gap-10 items-start">
                        <div>
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                WITHDRAWAL AND FEE REFUND
                            </h2>
                            <UnderLine />
                            <p className="text-secondary leading-relaxed mt-4 mb-4">
                                <ul
                                    className="text-secondary leading-relaxed mt-4 mb-4 list-decimal pl-6 space-y-2"
                                >
                                    <li>
                                        Ordinarily, no withdrawal should be made during the academic session, as a child needs time to settle into the new environment of hostel life. Parents should therefore make their decision very firmly before accepting admission.
                                    </li>
                                    <li>
                                        No fees will be refunded if the child is withdrawn in the first academic year or in Class XII once admission is accepted.
                                    </li>
                                    <li>
                                        In the second or subsequent academic session, if withdrawal becomes necessary, a clear three-month notice must be given in writing, failing which fees in lieu of notice will be charged.
                                    </li>
                                    <li>
                                        Notice of withdrawal must be sent by Registered AD post and should reach the School Office no later than 31st December, intimating that the child will not be returning in the next academic year. If such notice is not received on time, the child’s security deposit will stand forfeited.
                                    </li>
                                    <li>
                                        Transfer Certificates will be issued only after all school dues have been cleared and a No Objection Certificate (NOC) from all relevant departments has been obtained. A minimum of ten working days is required for the issue of a Transfer Certificate.
                                    </li>
                                    <li>
                                        In cases where the security deposit is to be refunded, all claims must be made within one year of the date of withdrawal along with the original receipt, failing which no claim will be entertained thereafter.
                                    </li>
                                    <li>
                                        There will be no refund of fees in cases where the child has been expelled or where withdrawal has been requested on disciplinary grounds.
                                    </li>
                                    <li>
                                        School scholarships, bursaries, or fee concessions, if allowed, are at the sole discretion of the management and may be withdrawn at any time without assigning any reason.
                                    </li>
                                    <li>
                                        Any child absent from school for more than seven days without prior intimation shall be considered withdrawn.
                                    </li>
                                </ul>


                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-abhaya text-secondary md:text-4xl  mb-2">
                                GENERAL
                            </h2>
                            <UnderLine />
                            <ul
                                className="text-secondary leading-relaxed mt-4 mb-4 list-decimal pl-6 space-y-2"
                            >
                                <li>
                                    Parents are requested to refrain from giving any valuables to their children. The school will not be responsible for any loss or damage of such items.
                                </li>
                                <li>
                                    Children are not allowed to receive phone calls except on their birthdays or if special circumstances warrant.
                                </li>
                                <li>
                                    The school reserves the right to exercise mild censorship over children’s letters, as this is purely in their interest.
                                </li>
                                <li>
                                    All correspondence from parents, whether by letter or email, regarding the welfare or progress of the child, suggestions, fees, feedback, etc., must be addressed to the Headmaster, clearly mentioning the child’s name, class, and boarding number.
                                </li>
                                <li>
                                    No verbal assurances alleged to have been given by any member of the staff shall be binding on the school. Similarly, verbal statements made by parents will not be accepted. All communication must be in writing.
                                </li>
                                <li>
                                    Applications for any certificates, endorsements, verifications, or similar requirements from the school should be submitted in writing at least one week in advance.
                                </li>
                                <li>
                                    Parents should refrain from giving excessive tuck to their children. Cooked food, perishable items, and consumable liquids are not permitted. No food parcels will be accepted or delivered to the children.
                                </li>
                                <li>
                                    Visitors and parents are not permitted to bring pets to the school.
                                </li>
                                <li>
                                    Parents and visitors are not allowed to enter dormitories without permission from the School Office. Male parents or visitors are strictly prohibited from entering the Girls’ Dormitory under any circumstances.
                                </li>
                                <li>
                                    Parents of new students will not be permitted to meet their children for six weeks following admission, allowing sufficient time for the child to settle and adjust to the new environment.
                                </li>
                                <li>
                                    Parents and guardians are advised to personally collect their children at the start of vacations to enhance interaction with staff members.
                                </li>
                                <li>
                                    Whenever parents or guardians visit the school, they must report to the School Office.
                                </li>
                                <li>
                                    Any change of address or telephone numbers must be informed in writing to the School Office at the earliest, keeping emergencies and other important matters in mind.
                                </li>
                                <li>
                                    Photographs and videos of students taken inside the school or during school trips, camps, excursions, or tournaments are the copyright of the school. The school reserves the right to use them for promotion or other purposes. Parents are advised not to post or share such content on social media. The school will not be responsible for any technological misuse of such content.
                                </li>
                                <li>
                                    In case of any dispute, the jurisdiction shall be the District or Sessions Court of Solan District only.
                                </li>
                                <li>
                                    The school management reserves the right to change, amend, add, or delete any of the above-mentioned rules and regulations at any time without prior notice.
                                </li>
                                <li>
                                    Parents are requested not to communicate directly with teachers or matrons via telephone, email, social media, or any other means. All communication should be addressed only to the School Office, the Head of School, or the respective Head.
                                </li>
                            </ul>





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


