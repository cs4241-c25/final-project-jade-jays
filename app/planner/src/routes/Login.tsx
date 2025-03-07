import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../components/Authenticate";
// import { makePath, rootPath } from "./Paths";

try {
  localStorage.getItem("user");
  localStorage.getItem("pass");
} catch (e) {
  console.log("Credentials not stored");
  localStorage.setItem("user", "");
  localStorage.setItem("pass", "");
}

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCred("user"));
  const [pass, setPass] = useState(getCred("pass"));

  function getCred(cred: string): string {
    try {
      return localStorage.getItem(cred) as string;
    } catch (e) {
      return "";
    }
  }

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  /*

    useEffect(() => {
        const path = Auth("", "", makePath);
        if (path !== rootPath) {
            navigate(makePath);
        }
    });

     */

  return (
    <>
      <h1>Login</h1>
      <form id={"login"} action={"/api/auth/login"} method={"post"}></form>
      <input
        type={"text"}
        id={"username"}
        placeholder={"Username"}
        onChange={changeUser}
        value={user || ""}
        autoComplete="off"
      ></input>
      <br />
      <input
        type={"text"}
        id={"password"}
        placeholder={"Password"}
        onChange={changePass}
        value={pass || ""}
        autoComplete="off"
      ></input>
      <br />
      <br />
      <button
        onClick={() => {
          const path = Auth(user, pass, "/");
          navigate(path);
        }}
      >
        Login
      </button>
      <p>
        {user}:{pass}
      </p>
    </>
  );
}
