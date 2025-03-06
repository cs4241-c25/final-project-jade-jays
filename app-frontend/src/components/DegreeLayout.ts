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
