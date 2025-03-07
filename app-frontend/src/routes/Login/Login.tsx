import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Auth, {initAuth} from "@/hooks/authenticate.ts";

import "./login.css";

import { Button, Input } from "@material-tailwind/react";

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
        htmlCode = <div className={"login-container"}>
            <h1 className={"login-title"}>WPI Planner Login</h1>
            {/*<input type={"text"} id={"username"} placeholder={"Username"} onChange={changeUser} value={user || ""} autoComplete="off"></input>*/}
            {/*<br/>*/}
            {/*<input type={"password"} id={"password"} placeholder={"Password"} onChange={changePass} value={pass || ""} autoComplete="off"></input>*/}

            <Input className={"log-field"} type={"text"} id={"username"} placeholder={"Username"} onChange={changeUser} value={user || ""} autoComplete="off"></Input>
            <br />
            <Input className={"log-field"} type={"password"} id={"password"} placeholder={"Password"} onChange={changePass} value={pass || ""} autoComplete="off"></Input>
            <br/>
            <br/>
            <Button className={"login"} onClick={() => {
                localStorage.setItem("logged", "true");
                const path = Auth(user, pass, "/");
                if (path !== "/login") {
                    window.location.replace(path);
                }
            }}>Login</Button>
        </div>;
    }

    return (
        htmlCode
    );
}