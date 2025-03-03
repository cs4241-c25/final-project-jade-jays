const Prereqs = [
  {
    courseID: "CS 2223",
    reqs: [
      [
        { id: "CS 2102", req: "prereq" },
        { id: "CS 2103", req: "concurrent" },
      ],
      [{ id: "CS 2022", req: "recomended" }],
    ],
  },
  {
    courseID: "CS 2119",
    reqs: [],
  },
  {
    courseID: "CS 3013",
    reqs: [],
  },
  {
    courseID: "CS 4241",
    reqs: [
      [
        { id: "CS 2102", req: "prereq" },
        { id: "CS 2103", req: "prereq" },
        { id: "CS 2119", req: "prereq" },
      ],
      [{ id: "CS 3013", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 3133",
    reqs: [
      [{ id: "CS 2022", req: "prereq" }],
      [{ id: "CS 2223", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 4341",
    reqs: [
      [
        { id: "CS 2102", req: "prereq" },
        { id: "CS 2103", req: "prereq" },
      ],
      [{ id: "CS 2223", req: "prereq" }],
      [{ id: "CS 3133", req: "prereq" }],
    ],
  },
];

export default function findreq(courseID: string) {
  for (let i = 0; i < Prereqs.length; i++) {
    if (courseID === Prereqs[i].courseID) {
      return Prereqs[i].reqs;
    }
  }
  return [];
}
