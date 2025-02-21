import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

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