export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
}

// Dates and completion status are intentionally omitted until confirmed.
export const education: Education[] = [
  {
    id: "bs-stats",
    degree: "Bachelor of Science",
    field: "Statistics",
    institution: "University of the Punjab",
    location: "Lahore",
  },
  {
    id: "ba-business",
    degree: "Bachelor of Arts",
    field: "Business Administration",
    institution: "University of Lahore",
    location: "Lahore",
  },
];
