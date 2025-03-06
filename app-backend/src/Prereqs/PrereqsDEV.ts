export default function findreqDEV(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "DEV 550",
        reqs: [
            [
                { id: "DEV 540", req: "recommended" },
            ],
        ],
    },
];