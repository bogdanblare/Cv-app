import uniqid from "uniqid";

const autofilledState = {
  info: [
    {
      name: "firstName",
      value: "Bogdan",
      id: uniqid(),
    },
    {
      name: "lastName",
      value: "Kulshenko",
      id: uniqid(),
    },
    {
      name: "address",
      value: "Kyiv, Ukraine",
      id: uniqid(),
    },
    {
      name: "website",
      value: "blarebogdan.com",
      id: uniqid(),
    },
    {
      name: "email",
      value: "hoots05dues@icloud.com",
      id: uniqid(),
    },
    {
      name: "phone",
      value: "+38(068)-900-3003",
      id: uniqid(),
    },
    {
      name: "bio",
      value:
        "Self-taught software engineer with experience and extensive education in software design and application development. Fluent in Ukrainian and English with excellent communication and communication skills. I learn quickly, plan my time well and can multitask. Strong work ethic in a team or individually to achieve product success and process efficiency. Good problem-solving and problem-solving skills with analytical thinking. In my free time from programming, I have hobbies like beach volleyball and swimming.",
      id: uniqid(),
    },
    {
      name: "universityName",
      value: "Taras Shevchenko National University of Kyiv",
      id: uniqid(),
    },
    {
      name: "universityDegree",
      value: "Master of Economics and Law",
      id: uniqid(),
    },
    {
      name: "universityDate",
      value: "2019 - 2021",
      id: uniqid(),
    },
    {
      name: "schoolName",
      value: "State Tax University",
      id: uniqid(),
    },
    {
      name: "schoolDegree",
      value: "Bachelor of Law",
      id: uniqid(),
    },
    {
      name: "schoolDate",
      value: "2015 - 2019",
      id: uniqid(),
    },
  ],

  experience: [
    {
      isHovered: false,
      id: uniqid(),
      company: "Escooter co.",
      position: "Software Engineer",
      task: "I worked on App based solution for a scooter sharing company. I developed  handlers that communicate with GPS chip to execute different commands.",
      start: "2022",
      end: "Present",
    },
    {
      isHovered: false,
      id: uniqid(),
      company: "Public Service",
      position: "Senior operative for particularly important cases",
      task: "I processed information from automated information and reference systems, registers, banks (databases) of state authorities, bodies of local self-government.",
      start: "2019",
      end: "2021",
    },
  ],

  newExperience: {
    isHovered: false,
    id: uniqid(),
    company: "",
    position: "",
    task: "",
    start: "",
    end: "",
  },

  skills: [
    {
      isHovered: false,
      id: uniqid(),
      skill: "React",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "Node.js",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "Next.js",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "JavaScript",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "TypeScript",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "Tailwind",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "Git",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "MongoDB",
    },
    {
      isHovered: false,
      id: uniqid(),
      skill: "Prisma",
    },
  ],

  newSkill: {
    isHovered: false,
    id: uniqid(),
    skill: "PostgreSQL",
  },
};

export default autofilledState;
