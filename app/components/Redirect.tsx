import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

export default function Redirect() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    });
};