import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Auth from "./Authenticate";

export default function Navbar() {
    const navigate = useNavigate();

    function logButton() {
        const path = Auth("", "", "/app");
        if (path === "/") {
            return <button id={"login-button"} onClick={() => {
                navigate("/");
            }}>Login</button>
        }
    }

    return (
        <>
            <button id={"login-button"} onClick={() => {
                navigate("/");
            }}>Login</button>
            <button id={"main"} onClick={() => {
                navigate("/app");
            }}>Application</button>
        </>
    );
}