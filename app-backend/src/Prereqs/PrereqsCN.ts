export default function findreqCN(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "CN 1542",
        reqs: [
            [
                { id: "CN 1541", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 1543",
        reqs: [
            [
                { id: "CN 1542", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 2541",
        reqs: [
            [
                { id: "CN 1543", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 2542",
        reqs: [
            [
                { id: "CN 2541", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 2543",
        reqs: [
            [
                { id: "CN 2542", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 2544",
        reqs: [
            [
                { id: "CN 2543", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 3541",
        reqs: [
            [
                { id: "CN 2544", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 3542",
        reqs: [
            [
                { id: "CN 3541", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 3543",
        reqs: [
            [
                { id: "CN 3542", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 3561",
        reqs: [
            [
                { id: "CN 3543", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 356X",
        reqs: [
            [
                { id: "CN 355X", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CN 3571",
        reqs: [
            [
                { id: "CN 3543", req: "recomended" },
            ],
        ],
    },
];