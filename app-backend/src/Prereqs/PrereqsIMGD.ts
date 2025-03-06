export default function findreqIMGD(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "IMGD 2000",
        reqs: [
            [
                { id: "IMGD 1000", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2001",
        reqs: [
            [
                { id: "IMGD 1000", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2030",
        reqs: [
            [
                { id: "IMGD 1000", req: "recomended" },
            ],
            [
                { id: "IMGD 1001", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 205X",
        reqs: [
            [
                { id: "AR 1101", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 220X",
        reqs: [
            [
                { id: "AR 2202", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2500",
        reqs: [
            [
                { id: "IMGD 1000", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2900",
        reqs: [
            [
                { id: "CS 2102", req: "recomended" },
                { id: "CS 2103", req: "recomended" },
                { id: "CS 1004", req: "recomended" },
            ],
            [
                { id: "IMGD 1000", req: "recomended" },
            ],
            [
                { id: "IMGD 1001", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3000",
        reqs: [
            [
                { id: "CS 2303", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3030",
        reqs: [
            [
                { id: "IMGD 2030", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2900",
        reqs: [
            [
                { id: "IMGD 1001", req: "recomended" },
            ],
            [
                { id: "CS 2301", req: "recomended" },
                { id: "CS 2303", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3500",
        reqs: [
            [
                { id: "IMGD 2101", req: "recomended" },
                { id: "AR 2101", req: "recomended" },
            ],
            [
                { id: "IMGD 3101", req: "recomended" },
                { id: "AR 3101", req: "recomended" },
            ],
            [
                { id: "IMGD 2700", req: "recomended" },
                { id: "AR 2700", req: "recomended" },
            ],
            [
                { id: "IMGD 2333", req: "recomended" },
                { id: "AR 2333", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3900",
        reqs: [
            [
                { id: "IMGD 2900", req: "recomended" },
            ],
            [
                { id: "IMGD 2905", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4000",
        reqs: [
            [
                { id: "IMGD 3000", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2900",
        reqs: [
            [
                { id: "IMGD 2030", req: "recomended" },
            ],
            [
                { id: "IMGD 3030", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3500",
        reqs: [
            [
                { id: "IMGD 2101", req: "recomended" },
                { id: "AR 2101", req: "recomended" },
            ],
            [
                { id: "IMGD 3201", req: "recomended" },
                { id: "AR 3201", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4200",
        reqs: [
            [
                { id: "IMGD 1000", req: "recomended" },
            ],
            [
                { id: "IMGD 2000", req: "recomended" },
                { id: "IMGD 2001", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4403",
        reqs: [
            [
                { id: "IMGD 2333", req: "recomended" },
                { id: "AR 2333", req: "recomended" },
            ],
            [
                { id: "IMGD 2048", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4500",
        reqs: [
            [
                { id: "IMGD 1002", req: "recomended" },
            ],
            [
                { id: "IMGD 3500", req: "recomended" },
            ],
            [
                { id: "MU 1611", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4600",
        reqs: [
            [
                { id: "IMGD 1001", req: "recomended" },
            ],
            [
                { id: "IMGD 2000", req: "recomended" },
                { id: "IMGD 2001", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4700",
        reqs: [
            [
                { id: "IMGD 1002", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4900",
        reqs: [
            [
                { id: "IMGD 3900", req: "recomended" },
            ],
        ],
    },
];