import { createServerFn } from "@tanstack/react-start";


export const admissionsData = createServerFn({
    method:'GET',
}).handler(async()=>{
    const steps = [
        {
            subtitle: "Get in touch with the Admission Counsellor",
            content:
                "We create lasting first impressions! Our Admission Counsellor will take you through the school's vision, academic structure, admission procedure and solve your queries, if any.",
        },
        {
            subtitle: "Completing mandatory Registration process",
            content:
                "This interaction is succeeded by filling up the Registration Form that is available with the Admission Counsellor & also available on our website. Submit the filled form with all the required documents (list attached below) within one week of procuring it. The Registration Form is available for a nominal fee of Rs. 1000/-.",
        },
        {
            subtitle: "Be geared for a tête-à-tête",
            content:
                "We will be looking forward to meeting you within one week of submitting the form. This interaction will help both the school and parents to be in sync, with respect to the vision for the child.",
        },
        {
            subtitle: "Complete admission formalities",
            content:
                "You will be informed telephonically and/or through E-mail about your child's admission & you will be required to deposit the admission fee within 5 days from the date of intimation by the School.",
        },
        {
            subtitle: "Documents required to be submitted along with the Registration Form",
            content: [
                "One photocopy of the original Birth certificate issued by concerned Government Authority",
                "Four recent Colour Passport size photograph of the child (one of which needs to be pasted in the form)",
                "Proof of Residence (photocopy of Electoral Card/Passport/Driving License/Telephone Bill)",
                "Photocopy of last report Card of the previous school (for admission in Class II and above)",
            ],
        },
    ];
    const steps1 = [
        {
            subtitle: "Admission Counsellors will be happy to assist you!",
            content:
                "Admission Counsellor stationed at the School Office will help you through the basic initiation process of filling up the Registration Form that is available round the year at the school premises and online on our website.",
        },
        {
            subtitle: "Admission formalities are conducted",
            content:
                "Considering the vacancies available, an interaction with the Principal is succeeded with mandatory admission formalities.",
        },
        {
            subtitle: "Complete the admission process",
            content:
                "Students and parents are intimated telephonically and/or through E-mail about admission. The process gets completed by depositing the admission fee within 5 days from the date of intimation by the School.",
        },
        {
            subtitle: "Complete admission formalities",
            content:
                "You will be informed telephonically and/or through E-mail about your child's admission & you will be required to deposit the admission fee within 5 days from the date of intimation by the School.",
        },
        {
            subtitle: "Documents required to be submitted along with the Registration Form :",
            content: [
                "Documents required to be submitted along with the Registration Form",
                "One photocopy of the original Birth certificate issued by concerned Government Authority",
                "Four recent Colour Passport size photograph of the child (one of which needs to be pasted in the form) Proof of Residence (photocopy of Electoral Card/Passport/Driving License/Telephone Bill)",
                "Photocopy of last report Card of the previous school (for admission in Class II and above)",
            ],
        },
    ];

    return {steps,steps1}
})