import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Auth from "./Authenticate";
import { makePath } from "./Paths";

export default function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = Auth("", "", makePath);
    navigate(path);
  });
}
