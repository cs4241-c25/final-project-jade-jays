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
                { id: "IMGD 1000", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2001",
        reqs: [
            [
                { id: "IMGD 1000", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2030",
        reqs: [
            [
                { id: "IMGD 1000", req: "recommended" },
            ],
            [
                { id: "IMGD 1001", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 205X",
        reqs: [
            [
                { id: "AR 1101", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 220X",
        reqs: [
            [
                { id: "AR 2202", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2500",
        reqs: [
            [
                { id: "IMGD 1000", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2900",
        reqs: [
            [
                { id: "CS 2102", req: "recommended" },
                { id: "CS 2103", req: "recommended" },
                { id: "CS 1004", req: "recommended" },
            ],
            [
                { id: "IMGD 1000", req: "recommended" },
            ],
            [
                { id: "IMGD 1001", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3000",
        reqs: [
            [
                { id: "CS 2303", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3030",
        reqs: [
            [
                { id: "IMGD 2030", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2900",
        reqs: [
            [
                { id: "IMGD 1001", req: "recommended" },
            ],
            [
                { id: "CS 2301", req: "recommended" },
                { id: "CS 2303", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3500",
        reqs: [
            [
                { id: "IMGD 2101", req: "recommended" },
                { id: "AR 2101", req: "recommended" },
            ],
            [
                { id: "IMGD 3101", req: "recommended" },
                { id: "AR 3101", req: "recommended" },
            ],
            [
                { id: "IMGD 2700", req: "recommended" },
                { id: "AR 2700", req: "recommended" },
            ],
            [
                { id: "IMGD 2333", req: "recommended" },
                { id: "AR 2333", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3900",
        reqs: [
            [
                { id: "IMGD 2900", req: "recommended" },
            ],
            [
                { id: "IMGD 2905", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4000",
        reqs: [
            [
                { id: "IMGD 3000", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 2900",
        reqs: [
            [
                { id: "IMGD 2030", req: "recommended" },
            ],
            [
                { id: "IMGD 3030", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 3500",
        reqs: [
            [
                { id: "IMGD 2101", req: "recommended" },
                { id: "AR 2101", req: "recommended" },
            ],
            [
                { id: "IMGD 3201", req: "recommended" },
                { id: "AR 3201", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4200",
        reqs: [
            [
                { id: "IMGD 1000", req: "recommended" },
            ],
            [
                { id: "IMGD 2000", req: "recommended" },
                { id: "IMGD 2001", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4403",
        reqs: [
            [
                { id: "IMGD 2333", req: "recommended" },
                { id: "AR 2333", req: "recommended" },
            ],
            [
                { id: "IMGD 2048", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4500",
        reqs: [
            [
                { id: "IMGD 1002", req: "recommended" },
            ],
            [
                { id: "IMGD 3500", req: "recommended" },
            ],
            [
                { id: "MU 1611", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4600",
        reqs: [
            [
                { id: "IMGD 1001", req: "recommended" },
            ],
            [
                { id: "IMGD 2000", req: "recommended" },
                { id: "IMGD 2001", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4700",
        reqs: [
            [
                { id: "IMGD 1002", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "IMGD 4900",
        reqs: [
            [
                { id: "IMGD 3900", req: "recommended" },
            ],
        ],
    },
];