export default function findreqWR(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "WR 2010",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
                { id: "WR 1011", req: "recommended" },
                { id: "WR 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 2500",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
                { id: "WR 1011", req: "recommended" },
                { id: "WR 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 250X",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
                { id: "WR 1011", req: "recommended" },
                { id: "WR 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 3011",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 3112",
        reqs: [
            [
                { id: "WR 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 3210",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 3214",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 4111",
        reqs: [
            [
                { id: "WR 1010", req: "recommended" },
            ],
            [
                { id: "WR 3112", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "WR 421X",
        reqs: [
            [
                { id: "WR 1011", req: "recommended" },
                { id: "WR 3210", req: "recommended" },
                { id: "WR 3214", req: "recommended" },
                { id: "WR 2310", req: "recommended" },
            ],
        ],
    },
];