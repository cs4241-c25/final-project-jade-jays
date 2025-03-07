export default function findreqECON(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "ECON 210X",
        reqs: [
            [
                { id: "ECON 1120", req: "recommended" },
            ],
        ],
    },
];