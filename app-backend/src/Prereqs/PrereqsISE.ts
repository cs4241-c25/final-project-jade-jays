export default function findreqISE(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "ISE 1801",
        reqs: [
            [
                { id: "ISE 1800", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "ISE 2800",
        reqs: [
            [
                { id: "ISE 1801", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "ISE 281X",
        reqs: [
            [
                { id: "ISE 1803", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "ISE 2820",
        reqs: [
            [
                { id: "ISE 1801", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "ISE 282X",
        reqs: [
            [
                { id: "ISE 1801", req: "recomended" },
            ],
        ],
    },
    {
        courseID: "ISE 380X",
        reqs: [
            [
                { id: "ISE 1801", req: "recomended" },
            ],
        ],
    },
];