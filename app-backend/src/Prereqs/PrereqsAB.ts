export default function findreqAB(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "AB 1532",
        reqs: [
            [
                { id: "AB 1531", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 1533",
        reqs: [
            [
                { id: "AB 1531", req: "recommended" },
            ],
            [
                { id: "AB 1532", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 210X",
        reqs: [
            [
                { id: "AB 1533", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 220X",
        reqs: [
            [
                { id: "AB 210X", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 230X",
        reqs: [
            [
                { id: "AB 220X", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 2531",
        reqs: [
            [
                { id: "AB 1531", req: "recommended" },
            ],
            [
                { id: "AB 1532", req: "recommended" },
            ],
            [
                { id: "AB 1533", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 2532",
        reqs: [
            [
                { id: "AB 1531", req: "recommended" },
            ],
            [
                { id: "AB 1532", req: "recommended" },
            ],
            [
                { id: "AB 1533", req: "recommended" },
            ],
            [
                { id: "AB 2531", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "AB 2533",
        reqs: [
            [
                { id: "AB 1531", req: "recommended" },
            ],
            [
                { id: "AB 1532", req: "recommended" },
            ],
            [
                { id: "AB 1533", req: "recommended" },
            ],
            [
                { id: "AB 2531", req: "recommended" },
            ],
            [
                { id: "AB 2532", req: "recommended" },
            ],
        ],
    },
];