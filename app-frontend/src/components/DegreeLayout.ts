export type Degree = {
  name: string;
  categories: Category[];
  Requirements: Requirement[];
};

export type Category = {
  name: string;
  validSubjects: string[];
  requiredClasses: number;
};

export type Requirement =
    |{
  type: 'choose1';
  description: string;
  courseIDs: string[];
  met: boolean;
} | {
  type: 'studyArea';
  description: string;
  levels: string[];
  requiredClasses: number;
  overlap: boolean;
  met: boolean;
} | {
  type: 'parentRequirement';
  description: string;
  childRequirements: Requirement[];
  met: boolean;
} | {
  type: 'uniqueClasses';
  description: string;
  levels: string[];
  met: boolean;
} | {
  type: 'maxCourses';
  description: string;
  subject: string;
  levelPrefix: string;
  maxAllowed: number;
  met: boolean;
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
