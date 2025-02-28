import { useQueryClient } from "@tanstack/react-query";
import { getCourseData } from "@/hooks/data-fetches.ts";
import { Text, UnstyledButton } from "@mantine/core";

import { ClientSubjectType } from "app-packages/types/persistent.types.ts";
import classes from "@/styles/courses.module.css";

type SidebarItemProp = {
  subject: ClientSubjectType;
  onClick: () => void;
};

export function SidebarItem({ subject, ...props }: SidebarItemProp) {
  const queryClient = useQueryClient();

  const prefetch = () => {
    queryClient.prefetchQuery({
      queryKey: [`course${subject._id}`],
      queryFn: () => getCourseData(subject._id),
      staleTime: 1000 * 60,
    });
  };

  return (
    <UnstyledButton
      className={classes.sidebarPanelItem}
      mod={{ _id: subject._id }}
      onMouseOver={() => prefetch()}
      {...props}
    >
      <Text size={"sm"}>{subject.type}</Text>
    </UnstyledButton>
  );
}
