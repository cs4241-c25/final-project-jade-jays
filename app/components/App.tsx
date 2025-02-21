import {useEffect} from "react";
import Auth from "./Authenticate";
import {useNavigate} from "react-router-dom";


export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const path = Auth("", "", "/app");
        if (path === "/") {
            navigate(path);
        }
    });

    return (
        <>
            <h1>Main App</h1>
        </>
    );
}