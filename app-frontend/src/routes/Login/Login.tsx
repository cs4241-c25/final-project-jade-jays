import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Auth, {initAuth} from "@/hooks/authenticate.ts";

initAuth();

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState(getCred("user"));
    const [pass, setPass] = useState(getCred("pass"));

    function getCred(cred: string): string {

        try {
            return localStorage.getItem(cred) as string;
        }
        catch (e) {
            return "";
        }
    }

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    useEffect(() => {
        const path = Auth("", "", "/");
        if (path !== "/login") {
            navigate("/");
        }
    });

    let htmlCode = <></>;

    const path = Auth("", "", "/");
    if (path !== "/login") {
        navigate("/");
    }
    else {
        htmlCode = <>
            <h1>Login</h1>
            <form id={"login"}></form>
            <input type={"text"} id={"username"} placeholder={"Username"} onChange={changeUser} value={user || ""} autoComplete="off"></input>
            <br/>
            <input type={"text"} id={"password"} placeholder={"Password"} onChange={changePass} value={pass || ""} autoComplete="off"></input>
            <br/>
            <br/>
            <button onClick={() => {
                localStorage.setItem("logged", "true");
                const path = Auth(user, pass, "/");
                if (path !== "/login") {
                    window.location.replace(path);
                }

            }}>Login</button>
            <p>{user}:{pass}</p>
        </>;
    }

    return (
        htmlCode
    );
}