import { Text, UnstyledButton } from "@mantine/core";

import { ClientSubjectType } from "@repo/app-commons/types/persistent.types.ts";
import classes from "./courses.module.css";

type SidebarItemProp = {
  subject: ClientSubjectType;
  onClick: () => void;
};

export function SidebarItem({ subject, ...props }: SidebarItemProp) {

  return (
    <UnstyledButton className={classes.sidebarPanelItem} {...props}>
      <Text size={"sm"}>{subject.type}</Text>
    </UnstyledButton>
  );
}