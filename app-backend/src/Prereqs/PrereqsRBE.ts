export default function findreqRBE(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "RBE 1001",
        reqs: [
            [
                { id: "CS 1004", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 2001",
        reqs: [
            [
                { id: "ECE 2049", req: "recommended" },
            ],
            [
                { id: "ES 2501", req: "recommended" },
            ],
            [
                { id: "ES 1310", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 2002",
        reqs: [
            [
                { id: "ECE 2049", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 3001",
        reqs: [
            [
                { id: "RBE 2002", req: "recommended" },
            ],
            [
                { id: "ECE 2049", req: "recommended" },
            ],
            [
                { id: "CS 2102", req: "recommended" },
            ],
            [
                { id: "MA 2051", req: "recommended" },
            ],
            [
                { id: "MA 2071", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 3002",
        reqs: [
            [
                { id: "RBE 3001", req: "recommended" },
            ],
            [
                { id: "ES 3011", req: "recommended" },
            ],
            [
                { id: "MA 2621", req: "recommended" },
                { id: "MA 2631", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 4540",
        reqs: [
            [
                { id: "RBE 3001", req: "recommended" },
            ],
            [
                { id: "RBE 3002", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 4601",
        reqs: [
            [
                { id: "RBE 1001", req: "recommended" },
            ],
            [
                { id: "RBE 3100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 4701",
        reqs: [
            [
                { id: "RBE 3002", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 4815",
        reqs: [
            [
                { id: "RBE 3001", req: "recommended" },
            ],
            [
                { id: "ES 3011", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 500",
        reqs: [
            [
                { id: "MA 2051", req: "prereq" },
            ],
            [
                { id: "MA 2071", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 501",
        reqs: [
            [
                { id: "RBE 500", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 502",
        reqs: [
            [
                { id: "MA 2051", req: "prereq" },
            ],
            [
                { id: "MA 2071", req: "prereq" },
            ],
            [
                { id: "ECE 504", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 510",
        reqs: [
            [
                { id: "MA 2071", req: "prereq" },
            ],
            [
                { id: "MA 2621", req: "prereq" },
            ],
            [
                { id: "MA 2611", req: "prereq" },
            ],
            [
                { id: "MA 1021", req: "prereq" },
            ],
            [
                { id: "MA 1022", req: "prereq" },
            ],
            [
                { id: "MA 1023", req: "prereq" },
            ],
            [
                { id: "MA 1024", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 521",
        reqs: [
            [
                { id: "RBE 3001", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 522",
        reqs: [
            [
                { id: "RBE 501", req: "prereq" },
            ],
            [
                { id: "RBE 502", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 510",
        reqs: [
            [
                { id: "MA 2051", req: "prereq" },
            ],
            [
                { id: "MA 2071", req: "prereq" },
            ],
            [
                { id: "ES 2502", req: "prereq" },
            ],
            [
                { id: "ME 3310", req: "prereq" },
            ],
            [
                { id: "ECE 2049", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 549",
        reqs: [
            [
                { id: "CS 534", req: "prereq" },
                { id: "CS 543", req: "prereq" },
                { id: "CS 545", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 550",
        reqs: [
            [
                { id: "MA 2071", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "RBE 575",
        reqs: [
            [
                { id: "RBE 500", req: "prereq" },
            ],
            [
                { id: "CS 4342", req: "recommended" },
                { id: "CS 539", req: "recommended" },
                { id: "RBE 577", req: "recommended" },
                { id: "CS 4341", req: "recommended" },
                { id: "CS 534", req: "recommended" },
                { id: "RBE 4701", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "RBE 577",
        reqs: [
            [
                { id: "RBE 501", req: "prereq" },
            ],
            [
                { id: "RBE 502", req: "prereq" },
            ],
        ],
    },
];