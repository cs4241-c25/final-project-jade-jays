import { Category, Requirement, Degree } from "./DegreeLayout.ts";

// Categories
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

const SS: Category = {
    name: "Social Science",
    validSubjects: ["ECON", "ENV", "GOV", "PSY", "SD", "SOC", "SS", "STS", "DEV", "ID"],
    requiredClasses: 2,
};

const FE: Category = {
    name: "Free Electives",
    validSubjects: [ "AB",
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
        "WR"],
    requiredClasses: 3
}

// Requirements
const Systems: Requirement = {
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
    description:
        "Student has completed 3 Credits of Social Implications of Computing (CS 3043, GOV 2314/ID 2314, GOV 2315, IMGD 2000, IMGD 2001, RBE 3100).",
    courseIDs: ["CS3043", "GOV2314", "ID2314", "GOV2315", "IMGD2000", "IMGD2001", "RBE3100"],
    met: false
}

const Probability: Requirement = {
    description:
        "Student has completed 3 Credits of Probability (MA 2621 or MA 2631).\n",
    courseIDs: ["MA2621", "MA2631"],
    met: false
}


const Statistics: Requirement = {
    description:
        "Student has completed 3 Credits of Statistics (MA 2611 or MA 2612).\n",
    courseIDs: ["MA2611", "MA2612"],
    met: false
}

// Degree
export const BSCS: Degree = {
  name: "Computer Science",
  categories: [CS, HUA, MA, PE, SS, FE],
  Requirements: [Systems, TheoryAndLanguage, Design, SocialImplications, Probability, Statistics],
};
