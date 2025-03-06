export default function findreqMA(courseID: string) {
  for (let i = 0; i < Prereqs.length; i++) {
    if (courseID === Prereqs[i].courseID) {
      return Prereqs[i].reqs;
    }
  }
  return [];
}

const Prereqs = [
  {
    courseID: "MA 1022",
    reqs: [
      [
        { id: "MA 1020", req: "recommended" },
        { id: "MA 1021", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 1023",
    reqs: [[{ id: "MA 1022", req: "recommended" }]],
  },
  {
    courseID: "MA 1024",
    reqs: [[{ id: "MA 1023", req: "recommended" }]],
  },
  {
    courseID: "MA 1033",
    reqs: [
      [{ id: "MA 1021", req: "recommended" }],
      [{ id: "MA 1022", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 1034",
    reqs: [[{ id: "MA 1033", req: "recommended" }]],
  },
  {
    courseID: "MA 1120",
    reqs: [
      [
        { id: "MA 1020", req: "recommended" },
        { id: "MA 1021", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 2051",
    reqs: [[{ id: "MA 1024", req: "recommended" }]],
  },
  {
    courseID: "MA 2073",
    reqs: [
      [
        { id: "MA 2071", req: "recommended" },
        { id: "MA 2072", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 2210",
    reqs: [[{ id: "MA 1024", req: "recommended" }]],
  },
  {
    courseID: "MA 2211",
    reqs: [
      [
        { id: "MA 1021", req: "recommended" },
        { id: "MA 1022", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 2212",
    reqs: [[{ id: "MA 2211", req: "recommended" }]],
  },
  {
    courseID: "MA 2251",
    reqs: [[{ id: "MA 1024", req: "recommended" }]],
  },
  {
    courseID: "MA 2271",
    reqs: [[{ id: "MA 2071", req: "recommended" }]],
  },
  {
    courseID: "MA 2273",
    reqs: [[{ id: "MA 2071", req: "recommended" }]],
  },
  {
    courseID: "MA 2431",
    reqs: [
      [{ id: "MA 1024", req: "recommended" }],
      [{ id: "MA 2051", req: "recommended" }],
      [{ id: "MA 2071", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 2610",
    reqs: [[{ id: "MA 1022", req: "recommended" }]],
  },
  {
    courseID: "MA 2611",
    reqs: [[{ id: "MA 1022", req: "recommended" }]],
  },
  {
    courseID: "MA 2612",
    reqs: [[{ id: "MA 2611", req: "recommended" }]],
  },
  {
    courseID: "MA 2621",
    reqs: [[{ id: "MA 1024", req: "recommended" }]],
  },
  {
    courseID: "MA 2631",
    reqs: [[{ id: "MA 1024", req: "recommended" }]],
  },
  {
    courseID: "MA 3212",
    reqs: [
      [{ id: "MA 2211", req: "recommended" }],
      [
        { id: "MA 2621", req: "recommended" },
        { id: "MA 2631", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 3213",
    reqs: [[{ id: "MA 3212", req: "recommended" }]],
  },
  {
    courseID: "MA 3231",
    reqs: [[{ id: "MA 2071", req: "recommended" }]],
  },
  {
    courseID: "MA 3233",
    reqs: [
      [
        { id: "MA 2271", req: "recommended" },
        { id: "MA 2273", req: "recommended" },
        { id: "MA 3231", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 3471",
    reqs: [
      [{ id: "MA 2431", req: "recommended" }],
      [{ id: "MA 3832", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 3475",
    reqs: [[{ id: "MA 2051", req: "recommended" }]],
  },
  {
    courseID: "MA 3627",
    reqs: [
      [
        { id: "MA 2611", req: "recommended" },
        { id: "MA 2612", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 3631",
    reqs: [[{ id: "MA 2631", req: "recommended" }]],
  },
  {
    courseID: "MA 3823",
    reqs: [[{ id: "MA 2073", req: "recommended" }]],
  },
  {
    courseID: "MA 3825",
    reqs: [[{ id: "MA 2073", req: "recommended" }]],
  },
  {
    courseID: "MA 3831",
    reqs: [
      [
        { id: "MA 1971", req: "recommended" },
        { id: "MA 1033", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 3832",
    reqs: [[{ id: "MA 3831", req: "recommended" }]],
  },
  {
    courseID: "MA 4213",
    reqs: [[{ id: "MA 2631", req: "recommended" }]],
  },
  {
    courseID: "MA 4214",
    reqs: [[{ id: "MA 3631", req: "recommended" }]],
  },
  {
    courseID: "MA 4222",
    reqs: [
      [
        { id: "MA 2071", req: "recommended" },
        { id: "MA 2072", req: "recommended" },
      ],
      [
        { id: "MA 3257", req: "recommended" },
        { id: "MA 3457", req: "recommended" },
      ],
      [
        { id: "MA 2621", req: "recommended" },
        { id: "MA 2631", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 4235",
    reqs: [[{ id: "MA 2251", req: "recommended" }]],
  },
  {
    courseID: "MA 4237",
    reqs: [
      [
        { id: "MA 2621", req: "recommended" },
        { id: "MA 2631", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 4291",
    reqs: [
      [{ id: "MA 1024", req: "recommended" }],
      [{ id: "MA 2051", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 4411",
    reqs: [
      [{ id: "MA 2071", req: "recommended" }],
      [
        { id: "MA 3457", req: "recommended" },
        { id: "CS 4033", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 4451",
    reqs: [
      [{ id: "MA 1024", req: "recommended" }],
      [{ id: "MA 2051", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 4473",
    reqs: [
      [{ id: "MA 2251", req: "recommended" }],
      [{ id: "MA 3832", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 4631",
    reqs: [
      [
        { id: "MA 2631", req: "recommended" },
        { id: "MA 3613", req: "recommended" },
      ],
      [{ id: "MA 3831", req: "recommended" }],
      [{ id: "MA 3832", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 4632",
    reqs: [
      [
        { id: "MA 3631", req: "recommended" },
        { id: "MA 4631", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 4644",
    reqs: [
      [
        { id: "MA 2612", req: "recommended" },
        { id: "MA 2621", req: "recommended" },
        { id: "MA 2631", req: "recommended" },
        { id: "MA 3631", req: "recommended" },
      ],
    ],
  },
  {
    courseID: "MA 4892",
    reqs: [
      [{ id: "MA 2211", req: "recommended" }],
      [{ id: "MA 3212", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 4895",
    reqs: [
      [{ id: "MA 2073", req: "recommended" }],
      [{ id: "MA 3831", req: "recommended" }],
    ],
  },
  {
    courseID: "MA 504",
    reqs: [[{ id: "MA 503", req: "prereq" }]],
  },
  {
    courseID: "MA 508",
    reqs: [[{ id: "MA 501", req: "prereq" }]],
  },
  {
    courseID: "MA 521",
    reqs: [[{ id: "MA 503", req: "prereq" }]],
  },
  {
    courseID: "MA 529",
    reqs: [
      [
        { id: "MA 528", req: "concurrent" },
        { id: "MA 540", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "MA 540",
    reqs: [
      [{ id: "MA 2631", req: "prereq" }],
      [
        { id: "MA 3831", req: "prereq" },
        { id: "MA 3832", req: "prereq" },
      ],
    ],
  },
  {
    courseID: "MA 541",
    reqs: [[{ id: "MA 540", req: "prereq" }]],
  },
  {
    courseID: "MA 542",
    reqs: [[{ id: "MA 511", req: "prereq" }]],
  },
  {
    courseID: "MA 546",
    reqs: [[{ id: "MA 511", req: "prereq" }]],
  },
  {
    courseID: "MA 547",
    reqs: [[{ id: "MA 511", req: "prereq" }]],
  },
  {
    courseID: "MA 549",
    reqs: [[{ id: "MA 511", req: "prereq" }]],
  },
  {
    courseID: "MA 546",
    reqs: [[{ id: "MA 511", req: "recommended" }]],
  },
  {
    courseID: "MA 556",
    reqs: [[{ id: "MA 541", req: "prereq" }]],
  },
  {
    courseID: "MA 575",
    reqs: [[{ id: "MA 540", req: "prereq" }]],
  },
];
