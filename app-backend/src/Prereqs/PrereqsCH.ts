export default function findreqCH(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "CH 1020",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 1030",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 1040",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 2320",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 2330",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 2640",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
            [
                { id: "CH 1040", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 2650",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1040", req: "recomended" },
            ],
            [
                { id: "CH 3510", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 2660",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
            [
                { id: "CH 1040", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 2670",
        reqs: [
            [
                { id: "CH 3410", req: "recomended" },
            ],
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
            [
                { id: "CH 2660", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 3310",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 3410",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 3510",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
            [
                { id: "CH 1040", req: "recomended" },
            ],
            [
                { id: "MA 1021", req: "recomended" },
            ],
            [
                { id: "MA 1022", req: "recomended" },
            ],
            [
                { id: "MA 1023", req: "recomended" },
            ],
            [
                { id: "MA 1024", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 3520",
        reqs: [
            [
                { id: "CH 3510", req: "recomended" },
            ],
            [
                { id: "MA 1021", req: "recomended" },
            ],
            [
                { id: "MA 1024", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 352X",
        reqs: [
            [
                { id: "CH 3510", req: "recomended" },
            ],
            [
                { id: "MA 1021", req: "recomended" },
            ],
            [
                { id: "MA 1022", req: "recomended" },
            ],
            [
                { id: "MA 1023", req: "recomended" },
            ],
            [
                { id: "MA 1024", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 3530",
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
                { id: "MA 1021", req: "recomended" },
            ],
            [
                { id: "MA 1022", req: "recomended" },
            ],
            [
                { id: "MA 1023", req: "recomended" },
            ],
            [
                { id: "MA 1024", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 3510",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
            [
                { id: "CH 1040", req: "recomended" },
            ],
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4110",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
            [
                { id: "BB 2550", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4120",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "BB 2550", req: "recomended" },
            ],
            [
                { id: "CH 4110", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4130",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
            [
                { id: "BB 2550", req: "recomended" },
            ],
            [
                { id: "CH 4110", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4140",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
            [
                { id: "BB 2330", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4150",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "BB 2550", req: "recomended" },
            ],
            [
                { id: "CH 4110", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 415X",
        reqs: [
            [
                { id: "CH 2360", req: "recomended" },
                { id: "CH 2660", req: "recomended" },
            ],
            [
                { id: "CH 2640", req: "recomended" },
            ],
            [
                { id: "CH 4110", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4160",
        reqs: [
            [
                { id: "CH 4110", req: "recomended" },
                { id: "CH 4120", req: "recomended" },
            ],
            [
                { id: "PH 1110", req: "recomended" },
                { id: "PH 1111", req: "recomended" },
            ],
            [
                { id: "PH 1120", req: "recomended" },
                { id: "PH 1121", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4330",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4420",
        reqs: [
            [
                { id: "CH 1010", req: "recomended" },
            ],
            [
                { id: "CH 1020", req: "recomended" },
            ],
            [
                { id: "CH 1030", req: "recomended" },
            ],
            [
                { id: "CH 1040", req: "recomended" },
            ],
            [
                { id: "CH 2640", req: "recomended" },
            ],
            [
                { id: "CH 2650", req: "recomended" },
            ],
            [
                { id: "CH 2660", req: "recomended" },
            ],
            [
                { id: "CH 2670", req: "recomended" },
            ],
            [
                { id: "CH 3410", req: "recomended" },
            ],
            [
                { id: "CH 3530", req: "recomended" },
            ],
            [
                { id: "CH 3550", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 4520",
        reqs: [
            [
                { id: "CH 3510", req: "recomended" },
            ],
            [
                { id: "CH 3530", req: "recomended" },
            ],
            [
                { id: "MA 1021", req: "recomended" },
            ],
            [
                { id: "MA 1022", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 538",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 542",
        reqs: [
            [
                { id: "CH 4110", req: "recomended" },
            ],
            [
                { id: "CH 4120", req: "recomended" },
            ],
            [
                { id: "CH 4130", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 543",
        reqs: [
            [
                { id: "CH 2310", req: "recomended" },
            ],
            [
                { id: "CH 2320", req: "recomended" },
            ],
            [
                { id: "CH 2330", req: "recomended" },
            ],
            [
                { id: "CH 3410", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 544",
        reqs: [
            [
                { id: "CH 4110", req: "recomended" },
            ],
            [
                { id: "CH 4120", req: "recomended" },
            ],
            [
                { id: "CH 4130", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "CH 545",
        reqs: [
            [
                { id: "CH 4110", req: "recomended" },
            ],
            [
                { id: "CH 4120", req: "recomended" },
            ],
            [
                { id: "CH 4130", req: "recomended" },
            ],
        ],
    },
];