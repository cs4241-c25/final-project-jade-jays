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

export type Requirement = {
  description: string;
  courseIDs: string[];
  met: boolean;
};
