import { createServerFn } from "@tanstack/react-start";


export const managementData = createServerFn({ method: 'GET' }).handler(
    async () => {
        const managementTeam = [
            {
                id: 1,
                name: "Ms. Ananya Sharma",
                designation: "Director",
                image: "/placholder/team_placeholder.jpg",
                description:
                    "Ms. Ananya Sharma is a visionary educationist with over 20 years of experience in building learner-centric institutions. She believes in nurturing curiosity, creativity, and character through progressive education practices."
            },
            {
                id: 2,
                name: "Mr. Rahul Mehta",
                designation: "Principal",
                image: "/placholder/team_placeholder.jpg",
                description:
                    "With more than 25 years of experience in academics and administration, Mr. Mehta focuses on creating a dynamic learning environment where students and teachers grow together through collaboration and innovation."
            },
            {
                id: 3,
                name: "Ms. Kavita Nair",
                designation: "Vice Principal",
                image: "/placholder/team_placeholder.jpg",
                description:
                    "Ms. Kavita Nair is committed to student well-being and academic excellence. Her leadership style emphasizes inclusivity, empathy, and continuous improvement in teaching and learning practices."
            },
        ];
        return managementTeam;
    }
)