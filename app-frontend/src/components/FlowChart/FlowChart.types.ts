export type classes = {
    name: string;
    id: string;
    taken: string; //"uncompleted" | "completed" | "unconfirmed" | "confirmed"
    prereq: {
        id: string;
        req: string;
    }[][];
};