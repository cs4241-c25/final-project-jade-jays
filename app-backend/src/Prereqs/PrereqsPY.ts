export default function findreqPY(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "PY 2719",
        reqs: [
            [
                { id: "PY 1731", req: "recommended" },
                { id: "RE 1731", req: "recommended" },
                { id: "PY 2731", req: "recommended" },
                { id: "RE 2731", req: "recommended" },
            ],
        ],
    },
    {
        courseID: "PY 2734",
        reqs: [
            [
                { id: "PY 1731", req: "recommended" },
                { id: "RE 1731", req: "recommended" },
            ],
        ],
    },
];