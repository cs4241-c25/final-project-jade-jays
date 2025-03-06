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
                { id: "EN 1219", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "EN 320X",
        reqs: [
            [
                { id: "EN 2222", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "EN 3219",
        reqs: [
            [
                { id: "EN 1219", req: "recomended" },
            ],
            [
                { id: "EN 2219", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "EN 401X",
        reqs: [
            [
                { id: "MU 1511", req: "recomended" },
                { id: "MU 1611", req: "recomended" },
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