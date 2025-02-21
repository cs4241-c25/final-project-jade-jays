import {useEffect} from "react";
import Auth from "./Authenticate";
import {useNavigate} from "react-router-dom";
import {makePath, rootPath} from "./Paths";


export default function TrackSheet() {
    const navigate = useNavigate();

    useEffect(() => {
        const path = Auth("", "", makePath);
        if (path === rootPath) {
            navigate(path);
        }
    });

    return (
        <>
            <h1>Tracking Sheet</h1>
        </>
    );
}