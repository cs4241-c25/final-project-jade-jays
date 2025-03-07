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
                { id: "CH 1010", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 1030",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 1040",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 2320",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 2330",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 2640",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
            [
                { id: "CH 1040", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 2650",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1040", req: "recommended" },
            ],
            [
                { id: "CH 3510", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 2660",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
            [
                { id: "CH 1040", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 2670",
        reqs: [
            [
                { id: "CH 3410", req: "recommended" },
            ],
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
            [
                { id: "CH 2660", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 3310",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 3410",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 3510",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
            [
                { id: "CH 1040", req: "recommended" },
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
        ],
    },
    {
        courseID: "CH 3520",
        reqs: [
            [
                { id: "CH 3510", req: "recommended" },
            ],
            [
                { id: "MA 1021", req: "recommended" },
            ],
            [
                { id: "MA 1024", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 352X",
        reqs: [
            [
                { id: "CH 3510", req: "recommended" },
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
        ],
    },
    {
        courseID: "CH 3510",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
            [
                { id: "CH 1040", req: "recommended" },
            ],
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 4110",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
            [
                { id: "BB 2550", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 4120",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
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
        courseID: "CH 4130",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
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
        courseID: "CH 4140",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
            [
                { id: "BB 2330", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 4150",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
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
        courseID: "CH 415X",
        reqs: [
            [
                { id: "CH 2360", req: "recommended" },
                { id: "CH 2660", req: "recommended" },
            ],
            [
                { id: "CH 2640", req: "recommended" },
            ],
            [
                { id: "CH 4110", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 4160",
        reqs: [
            [
                { id: "CH 4110", req: "recommended" },
                { id: "CH 4120", req: "recommended" },
            ],
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
        courseID: "CH 4330",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 4420",
        reqs: [
            [
                { id: "CH 1010", req: "recommended" },
            ],
            [
                { id: "CH 1020", req: "recommended" },
            ],
            [
                { id: "CH 1030", req: "recommended" },
            ],
            [
                { id: "CH 1040", req: "recommended" },
            ],
            [
                { id: "CH 2640", req: "recommended" },
            ],
            [
                { id: "CH 2650", req: "recommended" },
            ],
            [
                { id: "CH 2660", req: "recommended" },
            ],
            [
                { id: "CH 2670", req: "recommended" },
            ],
            [
                { id: "CH 3410", req: "recommended" },
            ],
            [
                { id: "CH 3530", req: "recommended" },
            ],
            [
                { id: "CH 3550", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 4520",
        reqs: [
            [
                { id: "CH 3510", req: "recommended" },
            ],
            [
                { id: "CH 3530", req: "recommended" },
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
        courseID: "CH 538",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 542",
        reqs: [
            [
                { id: "CH 4110", req: "recommended" },
            ],
            [
                { id: "CH 4120", req: "recommended" },
            ],
            [
                { id: "CH 4130", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 543",
        reqs: [
            [
                { id: "CH 2310", req: "recommended" },
            ],
            [
                { id: "CH 2320", req: "recommended" },
            ],
            [
                { id: "CH 2330", req: "recommended" },
            ],
            [
                { id: "CH 3410", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 544",
        reqs: [
            [
                { id: "CH 4110", req: "recommended" },
            ],
            [
                { id: "CH 4120", req: "recommended" },
            ],
            [
                { id: "CH 4130", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "CH 545",
        reqs: [
            [
                { id: "CH 4110", req: "recommended" },
            ],
            [
                { id: "CH 4120", req: "recommended" },
            ],
            [
                { id: "CH 4130", req: "recommended" },
            ],
        ],
    },
];