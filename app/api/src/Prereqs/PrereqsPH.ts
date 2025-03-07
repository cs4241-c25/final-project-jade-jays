export default function findreqPH(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "PH 1110",
        reqs: [
            [
                { id: "MA 1021", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 1111",
        reqs: [
            [
                { id: "MA 1023", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 111X",
        reqs: [
            [
                { id: "MA 1021", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 1120",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "MA 1022", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 1121",
        reqs: [
            [
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "MA 1024", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 112X",
        reqs: [
            [
                { id: "MA 1021", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 1130",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "recommended" },
            ],
            [
                { id: "MA 1022", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 1140",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "recommended" },
            ],
            [
                { id: "MA 1022", req: "recommended" },
            ],
            [
                { id: "MA 1023", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 1150",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "concurrent" },
            ],
            [
                { id: "MA 1022", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 115X",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "concurrent" },
            ],
            [
                { id: "MA 1022", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 2101",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "MA 1024", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2201",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 1140", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "recommended" },
            ],
            [
                { id: "MA 1022", req: "recommended" },
            ],
            [
                { id: "MA 1023", req: "recommended" },
            ],
            [
                { id: "MA 1024", req: "recommended" },
            ],
            [
                { id: "MA 2051", req: "concurrent" },
            ],
        ],
    },
    {
        courseID: "PH 2202",
        reqs: [
            [
                { id: "PH 2201", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2301",
        reqs: [
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "MA 1023", req: "recommended" },
            ],
            [
                { id: "MA 2251", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2501",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 1140", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2502",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 1140", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2510",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2520",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "prereq" },
            ],
        ],
    },
    {
        courseID: "PH 2540",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "recommended" },
            ],
            [
                { id: "MA 1022", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2601",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 1140", req: "recommended" },
            ],
            [
                { id: "PH 2501", req: "recommended" },
                { id: "PH 2502", req: "recommended" },
                { id: "PH 3504", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 2651",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 1140", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3206",
        reqs: [
            [
                { id: "PH 3401", req: "recommended" },
            ],
            [
                { id: "ES 3001", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3301",
        reqs: [
            [
                { id: "PH 2301", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3401",
        reqs: [
            [
                { id: "MA 4451", req: "recommended" },
            ],
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 1140", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3402",
        reqs: [
            [
                { id: "PH 3401", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3501",
        reqs: [
            [
                { id: "PH 1110", req: "recommended" },
                { id: "PH 1111", req: "recommended" },
            ],
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3502",
        reqs: [
            [
                { id: "PH 3401", req: "recommended" },
            ],
            [
                { id: "PH 3402", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3503",
        reqs: [
            [
                { id: "PH 1130", req: "recommended" },
            ],
            [
                { id: "PH 3401", req: "recommended" },
            ],
            [
                { id: "PH 3402", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 3501",
        reqs: [
            [
                { id: "PH 1120", req: "recommended" },
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "MA 2051", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 350X",
        reqs: [
            [
                { id: "PH 1121", req: "recommended" },
            ],
            [
                { id: "PH 1130", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 4201",
        reqs: [
            [
                { id: "PH 2201", req: "recommended" },
            ],
            [
                { id: "PH 2202", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 443X",
        reqs: [
            [
                { id: "MA 2051", req: "recommended" },
            ],
            [
                { id: "MA 2251", req: "recommended" },
            ],
            [
                { id: "PH 3401", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PH 511",
        reqs: [
            [
                { id: "PH 2201", req: "recommended" },
            ],
            [
                { id: "PH 2202", req: "recommended" },
            ],
        ],
    },
];