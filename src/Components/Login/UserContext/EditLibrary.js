let editData =
{
    employee1: {
        employeProfile: {
            id: 1,
            fullname: "Full Name",
            desc: "Professional title",
            profile: "About me",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMUsbnXWNEDGd67xMnRZy5OtH7TnZroiclA&s",
            email: "Email",
            phone: "Phone number",
            location: "City, Country",
            birthday: "Date of birth",
        },

        jobs: [
            {
                workID: 1,
                jobtitle: "Position Title",
                company: "Company/Workplace",
                city: "Location",
                datefrom: "00/00/00",
                datetill: "00/00/00",
                acomplishments: [
                    "Acomplishment", "Acomplishment"]
            }
        ],


        education: [
            {
                title: "Study Program",
                city: "Location",
                school: "Institution/School",
                date: "Date",
                educationID: 1,
            },
        ],

        skills: ["Skill 1,", "Skill 2", "Skill 3"],

        languages: [
            { language: "Language", proficiency: "Elementary Proficiency", languageID: 1 },
        ]
    },

}

export default editData;