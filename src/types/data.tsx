export interface WorkExperience {
  id: number;
  from: string;
  till: string;
  companyName: string;
  position: string;
  describtion: string;
  more: string;
}

export interface Education {
  id: number;
  year: string;
  institution: string;
  degree: string;
  speciality: string;
}

export interface Courses {
  id: number;
  date: string;
  hours: string | null;
  organizer: string;
  title: string;
  describtion: string;
  certificate: boolean;
}
