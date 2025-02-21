import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Auth from "./Authenticate";

export default function Redirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const path = Auth("", "", "/app");
        navigate(path);
    });
};