type Degree = {
  name: string;
  categories: Category[];
  Requirements: Requirement[];
};

type Category = {
  name: string;
  validSubjects: string[];
  requiredClasses: number;
};

type Requirement = {
  description: string;
  courseIDs: string[];
  met: boolean;
};

const CS: Category = {
  name: "Computer Science",
  validSubjects: ["CS"],
  requiredClasses: 18,
};
const HUA: Category = {
  name: "Humanities and Arts",
  validSubjects: [
    "AR",
    "EN",
    "TH",
    "MU",
    "AB",
    "CN",
    "EN",
    "GN",
    "SP",
    "EN",
    "WR",
    "RH",
    "HI",
    "HU",
    "INTL",
    "PY",
    "RE",
  ],
  requiredClasses: 6,
};
const MA: Category = {
  name: "Mathematics",
  validSubjects: ["MA"],
  requiredClasses: 7,
};
const PE: Category = {
  name: "Physical Education",
  validSubjects: ["PE", "WPE"],
  requiredClasses: 4,
};

const Systems: Requirement = {
  description:
    "Student has completed 3 Credits of Systems Courses (CS 3013, CS 4513, CS 4515, CS 4516, CS 502, CS 533, or CS 535.",
  courseIDs: [],
  met: false,
};

export const BSCS: Degree = {
  name: "Computer Science",
  categories: [CS, HUA, MA, PE],
  Requirements: [Systems],
};
