export default function findreqCS(courseID: string) {
  for (let i = 0; i < Prereqs.length; i++) {
    if (courseID === Prereqs[i].courseID) {
      return Prereqs[i].reqs;
    }
  }
  return [];
}

const Prereqs = [
  {
    courseID: "CS 2011",
    reqs: [
      [
        { id: "CS 2301", req: "recommended" },
        { id: "CS 2303", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 2022",
    reqs: [],
  },
  {
    courseID: "CS 2102",
    reqs: [
      [
        { id: "CS 1101", req: "recommended" },
        { id: "CS 1102", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 2103",
    reqs: [
      [
        { id: "CS 1101", req: "recommended" },
        { id: "CS 1102", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 2119",
    reqs: [
      [
        { id: "CS 1101", req: "recommended" },
        { id: "CS 1102", req: "recommended" },
        { id: "CS 1004", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 2223",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
      ],
      [{ id: "CS 2022", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 2301",
    reqs: [
      [
        { id: "CS 1101", req: "recommended" },
        { id: "CS 1102", req: "recommended" },
        { id: "CS 1004", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 2303",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
        { id: "CS 2119", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 3013",
    reqs: [
      [
        { id: "CS 2303", req: "recommended" },
        { id: "CS 2301", req: "recommended" },
      ],
      [{ id: "CS 2011", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 3041",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
        { id: "CS 2119", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 3133",
    reqs: [
      [
        { id: "CS 2022", req: "recommended" },
        { id: "MA 2201", req: "recommended" },
      ],
      [{ id: "CS 2223", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 340X",
    reqs: [[{ id: "CS 2303", req: "recommended" }]],
  },
  {
    courseID: "CS 3431",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
        { id: "CS 2119", req: "recommended" },
      ],
      [{ id: "CS 2022", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 3516",
    reqs: [
      [
        { id: "CS 2301", req: "recommended" },
        { id: "CS 2303", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 3733",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
        { id: "CS 2119", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 4032",
    reqs: [[{ id: "MA 2071", req: "recommended" }]],
  },
  {
    courseID: "CS 4033",
    reqs: [[{ id: "MA 2051", req: "recommended" }]],
  },
  {
    courseID: "CS 4100",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
      ],
      [{ id: "CS 2223", req: "recommended" }],
      [{ id: "IMGD 3000", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 411X",
    reqs: [
      [
        { id: "CS 2301", req: "recommended" },
        { id: "CS 2303", req: "recommended" },
      ],
      [{ id: "CS 3013", req: "recommended" }],
      [{ id: "CS 3516", req: "recommended" }],
      [{ id: "IMGD 3000", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4120",
    reqs: [[{ id: "CS 2223", req: "recommended" }]],
  },
  {
    courseID: "CS 4123",
    reqs: [[{ id: "CS 3133", req: "recommended" }]],
  },
  {
    courseID: "CS 4233",
    reqs: [
      [{ id: "CS 2303", req: "recommended" }],
      [{ id: "CS 3733", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4241",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
        { id: "CS 2119", req: "recommended" },
      ],
      [{ id: "CS 3013", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4300",
    reqs: [
      [
        { id: "CS 4731", req: "recommended" },
        { id: "CS 4241", req: "recommended" },
        { id: "IMGD 4000", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 4341",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
      ],
      [{ id: "CS 2223", req: "recommended" }],
      [{ id: "CS 3133", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4342",
    reqs: [
      [
        { id: "MA 1024", req: "recommended" },
        { id: "MA 1034", req: "recommended" },
      ],
      [{ id: "MA 2071", req: "recommended" }],
      [
        { id: "MA 2621", req: "recommended" },
        { id: "MA 2631", req: "recommended" },
      ],
      [{ id: "CS 2223", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4401",
    reqs: [
      [{ id: "CS 3013", req: "recommended" }],
      [{ id: "CS 3733", req: "recommended" }],
      [{ id: "CS 4241", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4404",
    reqs: [
      [{ id: "CS 3013", req: "recommended" }],
      [{ id: "CS 3516", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4432",
    reqs: [
      [{ id: "CS 3431", req: "recommended" }],
      [{ id: "CS 3733", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4445",
    reqs: [
      [{ id: "MA 2611", req: "recommended" }],
      [{ id: "CS 2223", req: "recommended" }],
      [
        { id: "CS 3431", req: "recommended" },
        { id: "CS 3733", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 4513",
    reqs: [
      [{ id: "CS 3013", req: "recommended" }],
      [{ id: "CS 3516", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4515",
    reqs: [
      [
        { id: "CS 2011", req: "recommended" },
        { id: "ECE 2049", req: "recommended" },
      ],
      [{ id: "CS 3013", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4516",
    reqs: [
      [{ id: "CS 3013", req: "recommended" }],
      [{ id: "CS 3516", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4518",
    reqs: [[{ id: "CS 2102", req: "recommended" }]],
  },
  {
    courseID: "CS 4533",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
      ],
      [{ id: "CS 3133", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 453X",
    reqs: [
      [
        { id: "MA 1024", req: "recommended" },
        { id: "MA 1034", req: "recommended" },
      ],
      [{ id: "MA 2071", req: "recommended" }],
      [
        { id: "MA 2621", req: "recommended" },
        { id: "MA 2631", req: "recommended" },
      ],
      [{ id: "CS 2223", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4731",
    reqs: [
      [{ id: "CS 2223", req: "recommended" }],
      [{ id: "CS 2303", req: "recommended" }],
      [{ id: "MA 2071", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 4732",
    reqs: [[{ id: "CS 4731", req: "recommended" }]],
  },
  {
    courseID: "CS 4801",
    reqs: [
      [
        { id: "ECE 2049", req: "recommended" },
        { id: "CS 2301", req: "recommended" },
      ],
      [
        { id: "CS 2022", req: "recommended" },
        { id: "MA 2201", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "CS 4804",
    reqs: [
      [
        { id: "CS 2102", req: "recommended" },
        { id: "CS 2103", req: "recommended" },
      ],
      [{ id: "CS 2223", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 480X",
    reqs: [
      [{ id: "MA 2071", req: "recommended" }],
      [{ id: "MA 2621", req: "recommended" }],
      [{ id: "CS 3733", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 5003",
    reqs: [
      [
        { id: "CS 2022", req: "prereq" },
        { id: "MA 2201", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 5008",
    reqs: [[{ id: "CS 5007", req: "prereq" }]],
  },
  {
    courseID: "CS 503",
    reqs: [
      [
        { id: "CS 2022", req: "prereq" },
        { id: "MA 2201", req: "prereq" },
      ],
      [{ id: "CS 2223", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 5084",
    reqs: [
      [
        { id: "CS 2022", req: "prereq" },
        { id: "MA 2201", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 509",
    reqs: [[{ id: "CS 3733", req: "prereq" }]],
  },
  {
    courseID: "CS 513",
    reqs: [
      [
        { id: "CS 504", req: "prereq" },
        { id: "CS 5084", req: "prereq" },
        { id: "CS 584", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 522",
    reqs: [
      [{ id: "MA 2051", req: "prereq" }],
      [{ id: "MA 2071", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 526",
    reqs: [[{ id: "CS 3431", req: "prereq" }]],
  },
  {
    courseID: "CS 528",
    reqs: [
      [{ id: "CS 502", req: "prereq" }],
      [{ id: "CS 513", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 539",
    reqs: [[{ id: "CS 534", req: "prereq" }]],
  },
  {
    courseID: "CS 541",
    reqs: [
      [{ id: "CS 539", req: "prereq" }],
      [{ id: "MA 2071", req: "prereq" }],
      [{ id: "CS 2223", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 542",
    reqs: [[{ id: "CS 5084", req: "prereq" }]],
  },
  {
    courseID: "CS 545",
    reqs: [[{ id: "CS 2223", req: "prereq" }]],
  },
  {
    courseID: "CS 546",
    reqs: [[{ id: "CS 3733", req: "prereq" }]],
  },
  {
    courseID: "CS 547",
    reqs: [
      [
        { id: "DS 502", req: "prereq" },
        { id: "MA 543", req: "prereq" },
      ],
      [{ id: "CS 5007", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 549",
    reqs: [
      [
        { id: "CS 534", req: "prereq" },
        { id: "CS 543", req: "prereq" },
        { id: "CS 545", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 551",
    reqs: [
      [{ id: "CS 539", req: "prereq" }],
      [
        { id: "DS 502", req: "prereq" },
        { id: "MA 543", req: "prereq" },
      ],
      [{ id: "CS 5007", req: "prereq" }],
    ],
  },
  {
    courseID: "CS 552",
    reqs: [
      [{ id: "CS 539", req: "recommended" }],
      [{ id: "CS 541", req: "recommended" }],
    ],
  },
  {
    courseID: "CS 554",
    reqs: [[{ id: "CS 5007", req: "recommended" }]],
  },
  {
    courseID: "CS 557",
    reqs: [
      [
        { id: "CS 5003", req: "prereq" },
        { id: "CS 503", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 565",
    reqs: [
      [
        { id: "MA 2621", req: "prereq" },
        { id: "MA 2631", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 573",
    reqs: [
      [
        { id: "CS 4300", req: "prereq" },
        { id: "CS 4731", req: "prereq" },
        { id: "CS 543", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 577",
    reqs: [
      [
        { id: "CS 533", req: "prereq" },
        { id: "ECE 581", req: "prereq" },
      ],
      [
        { id: "CS 513", req: "prereq" },
        { id: "ECE 506", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "CS 585",
    reqs: [[{ id: "CS 4432", req: "prereq" }]],
  },
  {
    courseID: "CS 673",
    reqs: [
      [
        { id: "CS 578", req: "prereq" },
        { id: "ECE 578", req: "prereq" },
      ],
    ],
  },
];
