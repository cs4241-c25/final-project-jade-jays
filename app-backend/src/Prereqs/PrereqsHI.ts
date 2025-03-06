export default function findreqHI(courseID: string) {
    for (let i = 0; i < Prereqs.length; i++) {
        if (courseID === Prereqs[i].courseID) {
            return Prereqs[i].reqs;
        }
    }
    return [];
}

const Prereqs = [
    {
        courseID: "HI 3317",
        reqs: [
            [
                { id: "HI 2400", req: "recommended" },
            ],
        ],
    },
];