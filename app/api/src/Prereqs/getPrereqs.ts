import findreqCS from "@/Prereqs/PrereqsCS";
import findreqMA from "@/Prereqs/PrereqsMA";
import findreqAB from "@/Prereqs/PrereqsAB";
import findreqAR from "@/Prereqs/PrereqsAR";
import findreqCN from "@/Prereqs/PrereqsCN";
import findreqEN from "@/Prereqs/PrereqsEN";
import findreqGN from "@/Prereqs/PrereqsGN";
import findreqHI from "@/Prereqs/PrereqsHI";
import findreqISE from "@/Prereqs/PrereqsISE";
import findreqMU from "@/Prereqs/PrereqsMU";
import findreqPY from "@/Prereqs/PrereqsPY";
import findreqSP from "@/Prereqs/PrereqsSP";
import findreqWR from "@/Prereqs/PrereqsWR";
import findreqECON from "@/Prereqs/PrereqsECON";
import findreqDEV from "@/Prereqs/PrereqsDEV";
import findreqBB from "@/Prereqs/PrereqsBB";
import findreqPH from "@/Prereqs/PrereqsPH";
import findreqCH from "@/Prereqs/PrereqsCH";
import findreqDS from "@/Prereqs/PrereqsDS";
import findreqRBE from "@/Prereqs/PrereqsRBE";
import findreqIMGD from "@/Prereqs/PrereqsIMGD";

export default function getPrereqs(code_abbrev: string, code_number: string) {
    const courseID = code_abbrev + " " + code_number;
    switch (code_abbrev) {
        case "CS":
            return findreqCS(courseID);
        case "MA":
            return findreqMA(courseID);
        case "BB":
            return findreqBB(courseID);
        case "PH":
            return findreqPH(courseID);
        case "CH":
            return findreqCH(courseID);
        case "DS":
            return findreqDS(courseID);
        case "RBE":
            return findreqRBE(courseID);
        case "IMGD":
            return findreqIMGD(courseID);
        case "AB":
            return findreqAB(courseID);
        case "AR":
            return findreqAR(courseID);
        case "CN":
            return findreqCN(courseID);
        case "EN":
            return findreqEN(courseID);
        case "GN":
            return findreqGN(courseID);
        case "HI":
            return findreqHI(courseID);
        case "ISE":
            return findreqISE(courseID);
        case "MU":
            return findreqMU(courseID);
        case "PY":
            return findreqPY(courseID);
        case "SP":
            return findreqSP(courseID);
        case "WR":
            return findreqWR(courseID);
        case "ECON":
            return findreqECON(courseID);
        case "DEV":
            return findreqDEV(courseID);
    }
    return [];
}