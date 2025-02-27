import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'
import { useCourseContext } from '@/components/CourseProvider/CourseProvider.tsx'

import classes from "@/routes/courses.module.css"

export function Courses() {
    const courses = useCourseContext();

    return (
        <PanelGroup
            style={{
                minHeight: "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
                gap: "calc(var(--app-shell-padding)/4)"
            }}
            direction={"horizontal"}>
            <Panel
                className={classes.panel}
                id={"sidebar"}
                defaultSize={15}
                minSize={10}
                maxSize={20}
                order={1}>
            </Panel>
            <PanelResizeHandle className={classes.panelHandle}/>
            <Panel
                className={classes.panel}
                id={"course-list"}
                minSize={25}
                order={2}>
                Main
            </Panel>
            <PanelResizeHandle className={classes.panelHandle}/>
            <Panel
                id={"course-info-group"}
                defaultSize={20}
                maxSize={35}
                minSize={10}
                order={3}>
                <PanelGroup
                    style={{ gap: "calc(var(--app-shell-padding)/4)" }}
                    direction={"vertical"}>
                    <Panel
                        className={classes.panel}
                        id={"course-description"}
                        defaultSize={70}
                        minSize={70}
                        order={1}>
                        Main
                    </Panel>
                    <PanelResizeHandle className={classes.panelHandle}/>
                    <Panel
                        className={classes.panel}
                        id={"courses-added"}
                        defaultSize={30}
                        minSize={15}
                        order={1}>
                        Main
                    </Panel>
                </PanelGroup>
            </Panel>
        </PanelGroup>
    );
}