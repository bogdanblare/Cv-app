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
        "Motivated 25 year old Junior Software Engineer with a strong foundation in web development. Completed The Odin Project and actively engaged in building a personal startup. Proficient in programming languages including HTML, CSS, JavaScript, and TypeScript. Experienced in using Visual Studio Code as a code editor and skilled in version control with Git and ESLint. Familiar with Tailwind CSS for creating responsive and visually appealing interfaces. Well-versed in Node.js and adept at utilizing frameworks such as React and Next.js. Possess knowledge of database systems, including Prisma, PostgreSQL, and MongoDB. In addition to my technical skills, I bring a competitive edge from my passion for playing beach volleyball, fostering teamwork and determination. Driven by a passion for solving complex problems and eager to contribute to innovative software solutions. Excited to leverage skills and enthusiasm to support the development of cutting-edge applications and deliver high-quality code.",
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
      company: "entrepreneur",
      position: "Junior Software Engineer",
      task: "I worked on telegram bot based solution for a scooter sharing company. I developed bot handlers that communicate with Teltonika TST100 chip to execute different commands.",
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
