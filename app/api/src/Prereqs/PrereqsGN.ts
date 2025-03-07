export default function findreqGN(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "GN 1512",
        reqs: [
            [
                { id: "GN 1511", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 2511",
        reqs: [
            [
                { id: "GN 1512", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 2512",
        reqs: [
            [
                { id: "GN 1511", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 3511",
        reqs: [
            [
                { id: "GN 2512", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 3512",
        reqs: [
            [
                { id: "GN 3511", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 3513",
        reqs: [
            [
                { id: "GN 3511", req: "recommended" },
                { id: "GN 3512", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 3514",
        reqs: [
            [
                { id: "GN 3511", req: "recommended" },
                { id: "GN 3512", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "GN 3516",
        reqs: [
            [
                { id: "GN 3512", req: "recommended" },
            ],
        ],
    },
];