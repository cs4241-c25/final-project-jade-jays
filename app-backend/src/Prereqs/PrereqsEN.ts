export default function findreqEN(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "EN 2119",
        reqs: [
            [
                { id: "EN 1219", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "EN 320X",
        reqs: [
            [
                { id: "EN 2222", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "EN 3219",
        reqs: [
            [
                { id: "EN 1219", req: "recommended" },
            ],
            [
                { id: "EN 2219", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "EN 401X",
        reqs: [
            [
                { id: "MU 1511", req: "recommended" },
                { id: "MU 1611", req: "recommended" },
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