import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router";

export default function Navbar() {

    return (
        <BrowserRouter>
            <a href={"/"}>
                <button id={"login-button"}>Login</button>
            </a>
            <a href={"/app"}>
                <button id={"main"}>Application</button>
            </a>
        </BrowserRouter>
    );
}