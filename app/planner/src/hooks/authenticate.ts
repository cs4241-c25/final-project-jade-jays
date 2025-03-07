export function initAuth() {
    try {
        localStorage.getItem("user")
        localStorage.getItem("pass")
    }
    catch (e) {
        console.log("Credentials not stored");
        localStorage.setItem("user", "");
        localStorage.setItem("pass", "");
        localStorage.setItem("logged", "false");
        window.dispatchEvent(new Event('storage'));
    }
}

export function loggedIn(): boolean {
    return localStorage.getItem("user") === "admin" && localStorage.getItem("pass") === "admin";
}

export default function Auth(username: string, password: string, targetPath: string) {

    initAuth();

    let path = "/login";

    if (localStorage.getItem("user") !== username && username !== "") {
        localStorage.setItem("user", username);
    }
    if (localStorage.getItem("pass") !== password && password !== "") {
        localStorage.setItem("pass", password);
    }

    if (loggedIn()) {
        path = targetPath;
    }

    return path;
}