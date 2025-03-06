export default function findreqMU(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "MU 230X",
        reqs: [
            [
                { id: "MU 1611", req: "recomended" },
                { id: "MU 1511", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 2100",
        reqs: [
            [
                { id: "MU 1100", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 2301",
        reqs: [
            [
                { id: "MU 1100", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 3201",
        reqs: [
            [
                { id: "MU 1000", req: "recomended" },
                { id: "MU 1100", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 3301",
        reqs: [
            [
                { id: "MU 1100", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 3302",
        reqs: [
            [
                { id: "MU 1100", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 3303",
        reqs: [
            [
                { id: "MU 1100", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "MU 401X",
        reqs: [
            [
                { id: "MU 1611", req: "recomended" },
                { id: "MU 1511", req: "recomended" },
            ],
            [
                { id: "EN 1251", req: "recomended" },
                { id: "EN 2219", req: "recomended" },
                { id: "EN 3219", req: "recomended" },
            ],
            [
                { id: "CS 4100", req: "recomended" },
                { id: "CS 4341", req: "recomended" },
                { id: "CS 534", req: "recomended" },
                { id: "CS 539", req: "recomended" },
                { id: "CS 540", req: "recomended" },
            ],
        ],
    },
];