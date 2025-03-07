export default function findreqDS(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "DS 2010",
        reqs: [
            [
                { id: "DS 1010", req: "recommended" },
            ],
            [
                { id: "MA 2611", req: "recommended" },
            ],
            [
                { id: "MA 2612", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "DS 3010",
        reqs: [
            [
                { id: "DS 1010", req: "recommended" },
            ],
            [
                { id: "DS 2010", req: "recommended" },
            ],
            [
                { id: "MA 2611", req: "recommended" },
            ],
            [
                { id: "MA 2612", req: "recommended" },
            ],
            [
                { id: "CS 2102", req: "recommended" },
                { id: "CS 2103", req: "recommended" },
                { id: "CS 2119", req: "recommended" },
            ],
            [
                { id: "CS 3431", req: "recommended" },
                { id: "MIS 3720", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "DS 502",
        reqs: [
            [
                { id: "DS 517", req: "prereq" },
                { id: "MA 517", req: "prereq" },
            ],
            [
                { id: "MA 2611", req: "prereq" },
            ],
            [
                { id: "MA 2612", req: "prereq" },
            ],
            [
                { id: "MA 2071", req: "prereq" },
            ],
        ],
    },
];