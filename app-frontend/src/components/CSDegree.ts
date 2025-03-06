import { Category, Requirement, Degree } from "./DegreeLayout.ts";

// Categories
const CS: Category = {
  name: "Computer Science",
  validSubjects: ["CS"],
  requiredClasses: 15,
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
    "GN",
    "SP",
    "WR",
    "RH",
    "HI",
    "HU",
    "INTL",
    "PY",
    "RE",
  ],
  requiredClasses: 5,
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

const SS: Category = {
  name: "Social Science",
  validSubjects: [
    "ECON",
    "ENV",
    "GOV",
    "PSY",
    "SD",
    "SOC",
    "SS",
    "STS",
    "DEV",
    "ID",
  ],
  requiredClasses: 2,
};

const BS: Category = {
  name: "Basic Science/Engineering Science",
  validSubjects: [
    "BB", "BME", "CE", "CH", "CHE", "ECE", "ES", "GE", "ME", "PH", "RBE"
  ],
  requiredClasses: 5,
};

const FE: Category = {
  name: "Free Electives",
  validSubjects: [
    "AB",
    "ACC",
    "AE",
    "AR",
    "ARCH",
    "AREN",
    "AS",
    "BB",
    "BCB",
    "BME",
    "BUS",
    "CE",
    "CH",
    "CHE",
    "CN",
    "CP",
    "CS",
    "DEV",
    "DS",
    "ECE",
    "ECON",
    "EDU",
    "EN",
    "ENV",
    "ES",
    "ESL",
    "ETR",
    "FIN",
    "FP",
    "FY",
    "GE",
    "GN",
    "GOV",
    "HI",
    "HU",
    "ID",
    "IDG",
    "IGS",
    "IMGD",
    "INTL",
    "ISE",
    "JP",
    "MA",
    "ME",
    "MFE",
    "MIS",
    "MKT",
    "ML",
    "MME",
    "MPE",
    "MTE",
    "MU",
    "NEU",
    "NSE",
    "OBC",
    "OIE",
    "PH",
    "PSY",
    "PY",
    "RBE",
    "RE",
    "SD",
    "SEME",
    "SOC",
    "SP",
    "SS",
    "STS",
    "SYS",
    "TH",
    "WPE",
    "WR",
  ],
  requiredClasses: 3,
};

// Requirements
const Systems: Requirement = {
  type:"choose1",
  description:
    "Student has completed 3 Credits of Systems Courses (CS 3013, CS 4513, CS 4515, CS 4516, CS 502, CS 533, or CS 535.",
  courseIDs: [
    "CS3013",
    "CS4513",
    "CS4515",
    "CS4516",
    "CS502",
    "CS533",
    "CS535",
  ],
  met: false,
};

const TheoryAndLanguage: Requirement = {
  type:"choose1",
  description:
    "Student has completed 3 Credits of Theory and Language (CS 3133, CS 4120, CS 4123, CS 4533, CS 4536, CS 5003, CS 503, CS 5084, CS 536, CS 544 or CS 584).",
  courseIDs: [
    "CS3133",
    "CS4120",
    "CS4123",
    "CS4533",
    "CS4536",
    "CS5003",
    "CS503",
    "CS5084",
    "CS536",
    "CS544",
    "CS584",
  ],
  met: false,
};


const Design: Requirement = {
  type:"choose1",
  description:
    "Student has completed 3 Credits of Design (from CS 3041, CS 3431, CS 3733, CS 4233, CS 509, CS 542, CS 546, CS 561, or CS 562).",
  courseIDs: [
    "CS3041",
    "CS3431",
    "CS3733",
    "CS4233",
    "CS509",
    "CS542",
    "CS546",
    "CS561",
    "CS562",
  ],
  met: false,
};

const SocialImplications: Requirement = {
  type:"choose1",
  description:
    "Student has completed 3 Credits of Social Implications of Computing (CS 3043, GOV 2314/ID 2314, GOV 2315, IMGD 2000, IMGD 2001, RBE 3100).",
  courseIDs: [
    "CS3043",
    "GOV2314",
    "ID2314",
    "GOV2315",
    "IMGD2000",
    "IMGD2001",
    "RBE3100",
  ],
  met: false,
};

const Probability: Requirement = {
  type:"choose1",
  description:
    "Student has completed 3 Credits of Probability (MA 2621 or MA 2631).\n",
  courseIDs: ["MA2621", "MA2631"],
  met: false,
};

const Statistics: Requirement = {
  type:"choose1",
  description:
    "Student has completed 3 Credits of Statistics (MA 2611 or MA 2612).\n",
  courseIDs: ["MA2611", "MA2612"],
  met: false,
};


const TotalCredits: Requirement = {
  type:"studyArea",
  description: "Student has completed sufficient credits in each subject",
  levels: [
  "AB",
  "ACC",
  "AE",
  "AR",
  "ARCH",
  "AREN",
  "AS",
  "BB",
  "BCB",
  "BME",
  "BUS",
  "CE",
  "CH",
  "CHE",
  "CN",
  "CP",
  "CS",
  "DEV",
  "DS",
  "ECE",
  "ECON",
  "EDU",
  "EN",
  "ENV",
  "ES",
  "ESL",
  "ETR",
  "FIN",
  "FP",
  "FY",
  "GE",
  "GN",
  "GOV",
  "HI",
  "HU",
  "ID",
  "IDG",
  "IGS",
  "IMGD",
  "INTL",
  "ISE",
  "JP",
  "MA",
  "ME",
  "MFE",
  "MIS",
  "MKT",
  "ML",
  "MME",
  "MPE",
  "MTE",
  "MU",
  "NEU",
  "NSE",
  "OBC",
  "OIE",
  "PH",
  "PSY",
  "PY",
  "RBE",
  "RE",
  "SD",
  "SEME",
  "SOC",
  "SP",
  "SS",
  "STS",
  "SYS",
  "TH",
  "WPE",
  "WR",
],
  requiredClasses: 41,
  overlap: true,
  met: false
}

const AdvancedLevel: Requirement = {
  type:"studyArea",
  description: "Student has completed 15 Credits of 4000-level or Graduate Computer Science courses.",
  levels: ["CS4","CS5"],
  requiredClasses: 5,
  overlap: true,
  met: false
}


const BasicScienceDiscipline: Requirement = {
  type:"studyArea",
  description: "Student has completed 6 Credits in one discipline of BB, CH, GE, or PH.",
  levels: ["BB", "CH", "GE", 'PH'],
  requiredClasses: 2,
  overlap: false,
  met: false
}

const BasicScience: Requirement = {
  type:"studyArea",
  description: "Student has completed 15 Credits (Including the discipline) of Basic and/or Engineering Science (From All BB, BME, CH, CHE, CE, ECE, ES, GE, ME, PH, or RBE).",
  levels: ["BB", "BME", "CH", "CHE", "CE", "ECE", "ES", "GE", "ME", "PH", "RBE"],
  requiredClasses: 5,
  overlap: true,
  met: false
}


const Art: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["AR", "EN", "TH", "MU"],
  requiredClasses: 3,
  overlap: true,
  met: false
}

const Languages: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["AB", "CN", "EN", "GN", "SP"],
  requiredClasses: 3,
  overlap: true,
  met: false
}

const Arabic: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["AB"],
  requiredClasses: 5,
  overlap: false,
  met: false
}
const Chinese: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["CN"],
  requiredClasses: 5,
  overlap: false,
  met: false
}
const English: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["EN"],
  requiredClasses: 5,
  overlap: false,
  met: false
}
const German: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["GN"],
  requiredClasses: 5,
  overlap: false,
  met: false
}
const Spanish: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["SP"],
  requiredClasses: 5,
  overlap: false,
  met: false
}

const Literature: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["EN", "WR", "RH"],
  requiredClasses: 3,
  overlap: true,
  met: false
}

const History: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["HI", "HU", "INTL"],
  requiredClasses: 3,
  overlap: true,
  met: false
}


const Philosophy: Requirement = {
  type:"studyArea",
  description: "",
  levels: ["PY", "RE"],
  requiredClasses: 3,
  overlap: true,
  met: false
}


const Depth: Requirement = {
  type: 'parentRequirement',
  description: "Students must complete at least three thematically-related courses in one of the following categories: \n " +
      "i. art/art history, drama/theatre, and music (AR, EN/TH, MU);\n" +
      "ii. foreign languages (AB, CN, EN, GN, SP);\n" +
      "iii. literature and writing rhetoric (EN, WR, RH);\n" +
      "iv. history and international studies (HI, HU, INTL);\n" +
      "v. philosophy and religion (PY, RE).\n",
  childRequirements: [Art, Languages, Literature, History, Philosophy, English, Spanish, German, Chinese, Arabic],
  met: false
}

const UniqueClassesRequirement: Requirement = {
  type: 'uniqueClasses',
  description: "No more than one class can be taken from any subject (Except PE)",
  levels: ["CS", "HUA", "MA", "SS", "FE", "BS"],
  met: false,
};

const MaxMACoursesRequirement: Requirement = {
  type: 'maxCourses',
  description: "No more than 4 1000 level MA courses can be taken for credit.",
  subject: "MA",
  levelPrefix: "1",
  maxAllowed: 4,
  met: false,
};

const MaxCSCoursesRequirement: Requirement = {
  type: 'maxCourses',
  description: "No more than 1 1000 level CS courses can be taken for credit.",
  subject: "CS",
  levelPrefix: "1",
  maxAllowed: 1,
  met: false,
};

// Degree
export const BSCS: Degree = {
  name: "Computer Science",
  categories: [CS, HUA, MA, PE, SS, FE, BS],
  Requirements: [
    Systems,
    TheoryAndLanguage,
    Design,
    SocialImplications,
    Probability,
    Statistics,
    AdvancedLevel,
    BasicScienceDiscipline,
    BasicScience,
    Depth,
    TotalCredits,
    UniqueClassesRequirement,
    MaxMACoursesRequirement,
    MaxCSCoursesRequirement
  ],
};

