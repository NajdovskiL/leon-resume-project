let CVdata =
{
    employee1: {

        employeProfile: {
            id: 1,
            fullname: "Leon Najdovski",
            desc: "Business Owner / Website Development",
            profile: " Experienced digital media and technology professional with 4 years of experience in sales, operations, and digital strategy. Proven track record in leading web development projects, managing cross-functional teams, and delivering high-quality results in a fast-paced environment. Skilled in content management, project management, and technical communication with a strong understanding of user needs and regulatory requirements",
            img: "https://media.licdn.com/dms/image/C5603AQGHBCE6n6QgIg/profile-displayphoto-shrink_200_200/0/1649347497755?e=2147483647&v=beta&t=M503-xckU57vZVFDe3m08QLipjkgJ0BGIi5fWXsTvQ4",
            email: "najdovskileon23@gmail.com",
            phone: +38978834318,
            location: "Vienna",
            birthday: "17.10.1994",
        },

        jobs: [
            {
                workID: 1,
                jobtitle: "Bussines Developer",
                company: "FoodGuru MK",
                city: "Skopje",
                datefrom: "12/14/2002",
                datetill: "22/12/2032",
                acomplishments: [
                    " Technical and Operational Management: Supervised the daily   operations of the food delivery service, optimizing processes to ensure efficiency and quality. Implemented technology-drivensolutions to enhance service delivery.",
                    " Team Leadership: Recruited, trained, and managed a team of operational staff, ensuring alignment with the company’s goals and maintaining high performance levels.",
                    " Process Optimization: Developed strategies to streamline operations, including route optimization and performance monitoring, leading to significant cost savings and improved service delivery.",
                    " Stakeholder Collaboration: Worked closely with partners to ensure smooth collaboration and compliance with all operational agreements.",
                    "Budget and Financial Oversight: Assisted in budget planning, focusing on operational cost control and financial target achievement."]

            },

            {

                workID: 2,
                jobtitle: "Co-Founder & CEO | FitGuru MK",
                company: "FitGuru MK",
                city: "Skopje",
                datefrom: "12/14/2002",
                datetill: "22/12/2032",
                acomplishments: [
                    " Strategic Leadership: Defined and communicated the strategic vision for the company, aligning operations with short-term and long-term goals for growth and market leadership.",
                    "Business Development: Identified and pursued new business opportunities and partnerships, expanding the company's market reach and enhancing custome engagement",
                    " Financial Management: Oversaw the financial aspects of the business, including budgeting and financial planning, ensuring alignment with revenue and profitability goals.",
                    " Technology Integration: Led the adoption of innovative technology solutions to improve platform usability, efficiency, and security, driving customer satisfaction.",
                    " Branding and Marketing: Worked closely with the marketing team to develop and implement effective branding strategies, boosting the company's visibility and market presence.",
                ]

            },

            {

                workID: 3,
                jobtitle: " Freelance Web Developer & SEO Specialist",
                company: "Freelance",
                city: "Skopje",
                datefrom: "08/11/2023",
                datetill: "11/12/2024",
                acomplishments: [
                    "Content Management Systems (CMS): Extensive experience with WordPress and Wix, specializing in custom theme development, plugin customization, and overall website management",
                    " Technical Development: Implemented responsive design practices, ensuring websites deliver a seamless experience across all devices. Tailored solutions to meet client needs, enhancing website functionality and performance.",
                    "SEO and Security: Integrated on-page SEO best practices and implemented robust security measures to enhance website visibility and ensure a secure online environment.",
                    "Client Collaboration and Project Management: Managed projects from inception to completion, maintaining strong communication with clients and delivering high-quality results within deadlines."
                ]

            },
        ],


        education: [
            {
                title: "Digital Marketing Academy",
                city: "Skopje",
                school: "Brainster",
                date: 2022,
                educationID: 1
            },
            {
                title: "Front-End Developer Academy",
                city: "Skopje",
                school: "Brainster",
                date: 2024,
                educationID: 2
            },
        ],

        skills: ["WordPress", "Wix", "SEO", "Google Analytics", "HTML", "JavaScript", "React", "Bootstrap", "CSS"],

        languages:
            [
                { language: "English", proficiency: "B1", languageID: 1 },
                { language: "German", proficiency: "A2", languageID: 2 },
                { language: "Macedonian", proficiency: "C1", languageID: 3 }
            ]

    },

}

export default CVdata;