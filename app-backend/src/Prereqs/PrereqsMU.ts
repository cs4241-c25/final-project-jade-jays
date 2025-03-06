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
                { id: "MU 1611", req: "recommended" },
                { id: "MU 1511", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 2100",
        reqs: [
            [
                { id: "MU 1100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 2301",
        reqs: [
            [
                { id: "MU 1100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 3201",
        reqs: [
            [
                { id: "MU 1000", req: "recommended" },
                { id: "MU 1100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 3301",
        reqs: [
            [
                { id: "MU 1100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 3302",
        reqs: [
            [
                { id: "MU 1100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 3303",
        reqs: [
            [
                { id: "MU 1100", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "MU 401X",
        reqs: [
            [
                { id: "MU 1611", req: "recommended" },
                { id: "MU 1511", req: "recommended" },
            ],
            [
                { id: "EN 1251", req: "recommended" },
                { id: "EN 2219", req: "recommended" },
                { id: "EN 3219", req: "recommended" },
            ],
            [
                { id: "CS 4100", req: "recommended" },
                { id: "CS 4341", req: "recommended" },
                { id: "CS 534", req: "recommended" },
                { id: "CS 539", req: "recommended" },
                { id: "CS 540", req: "recommended" },
            ],
        ],
    },
];