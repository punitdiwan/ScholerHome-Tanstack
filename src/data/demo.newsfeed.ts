import { createServerFn } from "@tanstack/react-start";

export const IndexData = createServerFn({
    method:'GET'
}).handler( async () => {
    const newsFeedData = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2025–26",
    date: "01 May 2025",
    description:
      "Admissions are now open for the upcoming academic year. Parents are encouraged to visit the campus or apply online.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting Scheduled",
    date: "22 April 2025",
    description:
      "The Parent-Teacher Meeting will be held to discuss student progress and strengthen parent-school collaboration.",
  },
  {
    id: 3,
    title: "Annual Cultural Fest ‘Utsav 2025’",
    date: "08 March 2025",
    description:
      "Students will participate in dance, music, drama, and art performances during the annual cultural fest.",
  },
  {
    id: 4,
    title: "School Reopens After Summer Break",
    date: "15 June 2025",
    description:
      "The school will reopen after summer vacations with a refreshed academic schedule and new learning initiatives.",
  },
];
const highlightsData = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "12 March 2025",
    description:
      "Students showcased exceptional sportsmanship and teamwork during the annual sports event.",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "28 February 2025",
    description:
      "Innovative projects and creative ideas were presented by students across all grades.",
  },
  {
    id: 3,
    title: "Cultural Fest",
    date: "15 January 2025",
    description:
      "A vibrant celebration of art, music, and culture with enthusiastic participation.",
  },
];


 const achievementsData = [
  {
    id: 1,
    title: "State Level Science Olympiad Winner",
    date: "18 April 2025",
    description:
      "Our students secured 1st position at the State Level Science Olympiad, showcasing innovation, critical thinking, and scientific excellence.",
  },
  {
    id: 2,
    title: "National Sports Championship Medal",
    date: "05 March 2025",
    description:
      "TSVS students won multiple medals at the National Sports Championship, highlighting discipline, teamwork, and athletic excellence.",
  },
  {
    id: 3,
    title: "Inter-School Debate Competition Winner",
    date: "20 February 2025",
    description:
      "Our debate team emerged victorious at the Inter-School Debate Competition with outstanding communication and reasoning skills.",
  },
  {
    id: 4,
    title: "100% Board Examination Result",
    date: "10 January 2025",
    description:
      "The school achieved a 100% pass result in board examinations with several students scoring above 90%.",
  },
];

const awardsData = [
  {
    id: 1,
    title: "Best School Award 2024",
    description: "Awarded for excellence in academic and co-curricular activities.",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Top Sports School",
    description: "Recognized for outstanding sports performance across all levels.",
    date: "June 2024",
  },
  {
    id: 3,
    title: "Creative Arts Excellence",
    description: "Awarded for innovative programs in arts and culture.",
    date: "September 2024",
  },
];

return {newsFeedData,highlightsData,achievementsData,awardsData};
})