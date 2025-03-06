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
                { id: "DS 1010", req: "recomended" },
            ],
            [
                { id: "MA 2611", req: "recomended" },
            ],
            [
                { id: "MA 2612", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "DS 3010",
        reqs: [
            [
                { id: "DS 1010", req: "recomended" },
            ],
            [
                { id: "DS 2010", req: "recomended" },
            ],
            [
                { id: "MA 2611", req: "recomended" },
            ],
            [
                { id: "MA 2612", req: "recomended" },
            ],
            [
                { id: "CS 2102", req: "recomended" },
                { id: "CS 2103", req: "recomended" },
                { id: "CS 2119", req: "recomended" },
            ],
            [
                { id: "CS 3431", req: "recomended" },
                { id: "MIS 3720", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "DS 502",
        reqs: [
            [
                { id: "DS 517", req: "recomended" },
                { id: "MA 517", req: "recomended" },
            ],
            [
                { id: "MA 2611", req: "recomended" },
            ],
            [
                { id: "MA 2612", req: "recomended" },
            ],
            [
                { id: "MA 2071", req: "recomended" },
            ],
        ],
    },
];