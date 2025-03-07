import { Group, Title, UnstyledButton } from "@mantine/core";
import { readLocalStorageValue } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import cx from "clsx";

import classes from "@/components/AppLayout/appLayout.module.css";
import { ClientCourseType } from "app-packages/types/persistent.types.ts";

export function Navbar() {
  const value = readLocalStorageValue<{ [key: string]: ClientCourseType }>({
    key: "added_course_list",
  });
  const locked = Object.keys(value).length === 0;

  return (
    <>
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
            mod={{ locked: locked }}
            className={classes.menuButton}
            renderRoot={({ className, ...others }) =>
              locked ? (
                <button className={cx(className)} {...others}></button>
              ) : (
                <NavLink
                  to={"/schedule"}
                  className={cx(className)}
                  {...others}
                />
              )
            }
          >
            <Title order={4} fw={"600"}>
              Schedule
            </Title>
          </UnstyledButton>
        </div>
      </div>
    </>
  );
}
