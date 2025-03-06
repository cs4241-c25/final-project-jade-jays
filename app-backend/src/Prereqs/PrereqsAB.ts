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
                { id: "AB 1531", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 1533",
        reqs: [
            [
                { id: "AB 1531", req: "recomended" },
            ],
            [
                { id: "AB 1532", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 210X",
        reqs: [
            [
                { id: "AB 1533", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 220X",
        reqs: [
            [
                { id: "AB 210X", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 230X",
        reqs: [
            [
                { id: "AB 220X", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 2531",
        reqs: [
            [
                { id: "AB 1531", req: "recomended" },
            ],
            [
                { id: "AB 1532", req: "recomended" },
            ],
            [
                { id: "AB 1533", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 2532",
        reqs: [
            [
                { id: "AB 1531", req: "recomended" },
            ],
            [
                { id: "AB 1532", req: "recomended" },
            ],
            [
                { id: "AB 1533", req: "recomended" },
            ],
            [
                { id: "AB 2531", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "AB 2533",
        reqs: [
            [
                { id: "AB 1531", req: "recomended" },
            ],
            [
                { id: "AB 1532", req: "recomended" },
            ],
            [
                { id: "AB 1533", req: "recomended" },
            ],
            [
                { id: "AB 2531", req: "recomended" },
            ],
            [
                { id: "AB 2532", req: "recomended" },
            ],
        ],
    },
];