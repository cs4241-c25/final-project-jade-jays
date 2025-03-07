import { AppShell, Group, Title, UnstyledButton } from "@mantine/core";
import {Outlet, NavLink, useNavigate} from "react-router-dom";
import cx from "clsx";

import classes from "./appLayout.module.css";
import {useState} from "react";
import {loggedIn} from "@/hooks/authenticate.ts";

function LogButton() {
  if (loggedIn()) {
    return "Logout"
  }
  return "";
}

export function AppLayout() {
  const [loggedIn, setLoggedIn] = useState(LogButton());

  return (
    <AppShell withBorder={false} header={{ height: "50", offset: true }}>
      <AppShell.Header className={classes.header}>
        <Group>
          <UnstyledButton
            renderRoot={({ className, ...others }) => (
              <NavLink to={"/"} className={cx(className)} {...others} />
            )}
          >
            <Title order={2} fw={"700"}>
              Planner
            </Title>
          </UnstyledButton>
          <UnstyledButton
              renderRoot={({ className, ...others }) => (
                  <NavLink className={cx(className)} {...others} />
              )}
              onClick={() => {
                localStorage.setItem("user", "");
                localStorage.setItem("pass", "");
                localStorage.setItem("logged", "false");
                window.location.replace("/login");
              }}
          >
            <Title order={2} fw={"700"}>
              {loggedIn}
            </Title>
          </UnstyledButton>
        </Group>
        <div className={classes.headerGroup}>
          <div className={classes.headerMenu}>
            <UnstyledButton
              className={classes.menuButton}
              renderRoot={({ className, ...others }) => (
                <NavLink to={"/"} className={cx(className)} {...others} />
              )}
            >
              <Title order={4} fw={"600"}>
                Courses
              </Title>
            </UnstyledButton>
          </div>
          <div className={classes.headerMenu}>
            <UnstyledButton
              className={classes.menuButton}
              renderRoot={({ className, ...others }) => (
                <NavLink
                  to={"/schedule"}
                  className={cx(className)}
                  {...others}
                />
              )}
            >
              <Title order={4} fw={"600"}>
                Schedule
              </Title>
            </UnstyledButton>
          </div>
          <div className={classes.headerMenu}>
            <UnstyledButton
              className={classes.menuButton}
              renderRoot={({ className, ...others }) => (
                <NavLink
                  to={"/tracking"}
                  className={cx(className)}
                  {...others}
                />
              )}
            >
              <Title order={4} fw={"600"}>
                Tracking
              </Title>
            </UnstyledButton>
          </div>
          <div className={classes.headerMenu}>
            <UnstyledButton
              className={classes.menuButton}
              renderRoot={({ className, ...others }) => (
                <NavLink to={"/flow"} className={cx(className)} {...others} />
              )}
            >
              <Title order={4} fw={"600"}>
                Flow Chart
              </Title>
            </UnstyledButton>
          </div>
        </div>
      </AppShell.Header>
      <AppShell.Main className={classes.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}