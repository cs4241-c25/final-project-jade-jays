import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    };

    return (
        <>
            <h1>Login</h1>
            <form id={"login"}></form>
            <input type={"text"} id={"username"} placeholder={"Username"} onChange={changeUser}></input>
            <br/>
            <input type={"text"} id={"password"} placeholder={"Password"} onChange={changePass}></input>
            <br/>
            <br/>
            <button onClick={() => {
                if (user !== "" && pass !== "") {
                    navigate("/app");
                }
            }}>Login</button>
            <p>{user}:{pass}</p>
        </>
    );
}