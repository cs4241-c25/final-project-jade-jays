export default function findreqSP(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "SP 1524",
        reqs: [
            [
                { id: "SP 1523", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 2521",
        reqs: [
            [
                { id: "SP 1524", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 2522",
        reqs: [
            [
                { id: "SP 2521", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 3521",
        reqs: [
            [
                { id: "SP 2522", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 3522",
        reqs: [
            [
                { id: "SP 3521", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 3523",
        reqs: [
            [
                { id: "SP 3521", req: "recomended" },
                { id: "SP 3522", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 3524",
        reqs: [
            [
                { id: "SP 3521", req: "recomended" },
                { id: "SP 3522", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 3528",
        reqs: [
            [
                { id: "SP 3521", req: "recomended" },
                { id: "SP 3522", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "SP 3532",
        reqs: [
            [
                { id: "SP 3528", req: "recomended" },
                { id: "SP 3522", req: "recomended" },
            ],
        ],
    },
];