import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Auth from "./Authenticate";
import {flowPath, makePath, rootPath, trackPath} from "./Paths";

export default function Navbar() {
    const navigate = useNavigate();

    function logButton() {
        const path = Auth("", "", makePath);
        if (path === rootPath) {
            return <button id={"login-button"} onClick={() => {
                navigate(rootPath);
            }}>Login</button>
        }
        else {
            return <button id={"logout-button"} onClick={() => {
                localStorage.setItem("user", "");
                localStorage.setItem("pass", "");
                navigate(rootPath);
            }}>Logout</button>
        }
    }

    return (
        <>
            {logButton()}
            <button id={"make-button"} onClick={() => {
                navigate(makePath);
            }}>Make Schedule
            </button>
            <button id={"flow-button"} onClick={() => {
                navigate(flowPath);
            }}>Flow Chart
            </button>
            <button id={"track-button"} onClick={() => {
                navigate(trackPath);
            }}>Tracking Sheet
            </button>

        </>
    );
}