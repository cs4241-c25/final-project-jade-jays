import {useEffect} from "react";
import Auth from "./Authenticate";
import {useNavigate} from "react-router-dom";
import {makePath, rootPath} from "./Paths";


export default function FlowChart() {
    const navigate = useNavigate();

    /*
    useEffect(() => {
        const path = Auth("", "", makePath);
        if (path === rootPath) {
            navigate(path);
        }
    });

     */

    return (
        <>
            <h1>Flow Chart</h1>
        </>
    );
}