export default function findreqBB(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "BB 2003",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
            ],
            [
                { id: "CH 1010", req: "recommended" },
                { id: "CH 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 2030",
        reqs: [
            [
                { id: "BB 1102", req: "recommended" },
                { id: "BB 1002", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 2040",
        reqs: [
            [
                { id: "BB 1102", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 2101",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 2550",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 2917",
        reqs: [
            [
                { id: "BB 1035", req: "recommended" },
                { id: "BB 2003", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 2920",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
            ],
            [
                { id: "BB 1102", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3003",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
            ],
            [
                { id: "BB 2003", req: "recommended" },
            ],
            [
                { id: "BB 3950", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3050",
        reqs: [
            [
                { id: "BB 2920", req: "recommended" },
            ],
            [
                { id: "BB 2950", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3060",
        reqs: [
            [
                { id: "BB 2040", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3080",
        reqs: [
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 2920", req: "recommended" },
                { id: "BB 3950", req: "recommended" },
            ],
            [
                { id: "BB 2102", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3101",
        reqs: [
            [
                { id: "BB 2101", req: "recommended" },
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "CH 1010", req: "recommended" },
                { id: "CH 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3102",
        reqs: [
            [
                { id: "BB 2101", req: "recommended" },
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "CH 1010", req: "recommended" },
                { id: "CH 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3120",
        reqs: [
            [
                { id: "BB 1102", req: "recommended" },
            ],
            [
                { id: "BB 2030", req: "recommended" },
            ],
            [
                { id: "BB 2101", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3140",
        reqs: [
            [
                { id: "BB 2040", req: "recommended" },
            ],
            [
                { id: "BB 2920", req: "recommended" },
                { id: "BB 3950", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3512",
        reqs: [
            [
                { id: "BB 2901", req: "recommended" },
            ],
            [
                { id: "BB 2950", req: "recommended" },
            ],
            [
                { id: "BB 2002", req: "recommended" },
            ],
            [
                { id: "BB 2920", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3517",
        reqs: [
            [
                { id: "BB 2901", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3519",
        reqs: [
            [
                { id: "BB 2902", req: "recommended" },
            ],
            [
                { id: "CH 4110", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3526",
        reqs: [
            [
                { id: "BB 2920", req: "recommended" },
                { id: "BB 2950", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 357X",
        reqs: [
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 2950", req: "recommended" },
                { id: "BB 2920", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3620",
        reqs: [
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 2920", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3813",
        reqs: [
            [
                { id: "BB 1801", req: "recommended" },
                { id: "BB 2815", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3815",
        reqs: [
            [
                { id: "BB 2803", req: "recommended" },
                { id: "BB 3101", req: "recommended" },
                { id: "BB 3102", req: "recommended" },
            ],
            [
                { id: "BB 1801", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3821",
        reqs: [
            [
                { id: "BB 1801", req: "recommended" },
                { id: "BB 2815", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3825",
        reqs: [
            [
                { id: "BB 1102", req: "recommended" },
                { id: "BB 2803", req: "recommended" },
            ],
            [
                { id: "BB 3120", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "BB 3827",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
                { id: "BB 2920", req: "recommended" },
                { id: "BB 3950", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 1801", req: "recommended" },
                { id: "BB 2815", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3830",
        reqs: [
            [
                { id: "BB 2802", req: "recommended" },
                { id: "BB 1801", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "CH 4110", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3840",
        reqs: [
            [
                { id: "BB 1101", req: "recommended" },
                { id: "BB 2920", req: "recommended" },
                { id: "BB 3950", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 1801", req: "recommended" },
                { id: "BB 3827", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3870",
        reqs: [
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 1801", req: "recommended" },
                { id: "BB 3813", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3920",
        reqs: [
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 2920", req: "recommended" },
            ],
            [
                { id: "CH 4110", req: "recommended" },
            ],
            [
                { id: "CH 4120", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 3950",
        reqs: [
            [
                { id: "BB 2920", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "CH 2310", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 4050",
        reqs: [
            [
                { id: "BB 2920", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 3950", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "BB 4260",
        reqs: [
            [
                { id: "BB 2550", req: "recommended" },
            ],
            [
                { id: "BB 2920", req: "recommended" },
            ],
            [
                { id: "BB 2950", req: "recommended" },
            ],
        ],
    },
];