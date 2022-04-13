export type Item = number | string | boolean | null;

export interface IList {
  title: string;
  items: Record<string, Item>[];
  labels: Record<string, string>;
}

type IData = Record<string, IList>;

export const data: IData = {
  workExperience: {
    labels: {
      from: "From",
      till: "Till",
      position: "Position",
      description: "Description",
      more: "What I bring",
    },
    title: "My work experience",
    items: [
      {
        id: 1,
        from: "2015-11",
        till: "2021-03",
        label: "Financial Crime Investigation Service",
        position: "Chief Specialist",
        description:
          "My responsibility was to research economic and financial activities according to the accounting documents of companies and present a conclusion. Maternity leave since 2017-05",
        more: "Proven ability to learn fast as I started working with no experience in accounting. Strong ownership, because I needed to defend my conclusions of research as expert in the court.",
      },
      {
        id: 2,
        from: "2010-10",
        till: "2015-11",
        label: "State Tax Inspectorate",
        position: "Tax advisor, Tax advisors team lead",
        description:
          "As a tax advisor I was consulting taxpayers  in a call center by answering inbound calls or written inquiries. As a team lead, I was responsible for the quality of the team inbound calls, training of new employees, assessment of the quality of the consultations, collection of new and relevant legal information, analysis of legal acts, and provision of comments.",
        more: "Proven ability to learn fast, communicate with customers and team, share my knowledge with team, as I have started as junior tax advisor, after a few years I was put in charge of a group of 10 people. Ability to master new technologies because I needed to learn new features like EDS, Mano VMI and advise taxpayers and team members how to use them and many others internal systems to evaluate sensitive information about paid taxes and debts.",
      },
    ],
  },
  education: {
    labels: {
      year: "Year",
      degree: "Degree",
      speciality: "Speciality",
    },
    title: "My courses, seminares",
    items: [
      {
        id: 1,
        year: "2010",
        label: "Kaunas University of Technology",
        degree: "bachelor",
        speciality: "public administration",
      },
      {
        id: 2,
        year: "2012",
        label: "Mykolas Romeris University",
        degree: "master",
        speciality: "finance",
      },
    ],
  },
  courses: {
    labels: {
      date: "Date",
      hours: "Duration (in hours)",
      organizer: "Organizer",
      description: "Description",
      certificate: "Certificate",
    },
    title: "Education",
    items: [
      {
        id: 1,
        date: "2021-06",
        hours: "52",
        organizer: "Udemy",
        label: "Modern React with Redux",
        description: "React.js, Redux, React Router",
        certificate: true,
      },
      {
        id: 2,
        date: "2021-02",
        hours: "63",
        organizer: "Udemy",
        label: "The Web Developer Bootcamp 2021",
        description: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDb",
        certificate: true,
      },
      {
        id: 3,
        date: "2020-12",
        hours: null,
        organizer: "Women Go Tech",
        label: "Atrask Technologijas",
        description: "3 months online Discover Tech program for women",
        certificate: true,
      },
      {
        id: 4,
        date: "2020-10",
        hours: "21",
        organizer: "Udemy",
        label: " Modern HTML & CSS From The Beginning",
        description: "HTML, SCC, SCSS",
        certificate: true,
      },
    ],
  },
};
