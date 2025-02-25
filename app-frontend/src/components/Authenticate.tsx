import {rootPath} from "./Paths";


try {
    localStorage.getItem("user")
    localStorage.getItem("pass")
}
catch (e) {
    console.log("Credentials not stored");
    localStorage.setItem("user", "");
    localStorage.setItem("pass", "");
    console.error(e);
}

export default function Auth(username: string, password: string, targetPath: string) {

    let path = rootPath;

    if (localStorage.getItem("user") !== username && username !== "") {
        localStorage.setItem("user", username);
    }
    if (localStorage.getItem("pass") !== password && password !== "") {
        localStorage.setItem("pass", password);
    }

    if (localStorage.getItem("user") === "admin" && localStorage.getItem("pass") === "admin") {
        path = targetPath;
    }

    return path;
}