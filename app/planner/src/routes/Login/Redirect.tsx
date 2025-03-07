import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Auth from "@/hooks/authenticate.ts";

export default function Redirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const path = Auth("", "", "/");
        navigate(path);
    });

    return <></>;
};