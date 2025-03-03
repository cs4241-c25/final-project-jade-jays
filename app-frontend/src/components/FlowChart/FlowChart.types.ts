export type classes = {
  title: string;
  subject: string;
  code: string;
  taken: string; //"uncompleted" | "completed" | "unconfirmed" | "confirmed"
  prereq: {
    id: string;
    req: string;
  }[][];
};
