import { useQueryClient } from "@tanstack/react-query";
import { fetchCourseData } from "@/hooks/data-fetches.ts";
import { Text, UnstyledButton } from "@mantine/core";

import { ClientSubjectType } from "../../../../app-packages/types/persistent.types.ts";
import classes from "@/routes/Courses/courses.module.css";

type SidebarItemProp = {
  subject: ClientSubjectType;
  onClick: () => void;
};

export function SidebarItem({ subject, ...props }: SidebarItemProp) {
  const queryClient = useQueryClient();

  const prefetch = () => {
    queryClient.prefetchQuery({
      queryKey: [`course${subject._id}`],
      queryFn: () => fetchCourseData(subject._id),
      staleTime: 1000 * 60,
    });
  };

  return (
    <UnstyledButton className={classes.sidebarPanelItem} {...props}>
      <Text size={"sm"}>{subject.type}</Text>
    </UnstyledButton>
  );
}
