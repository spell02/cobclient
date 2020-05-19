import * as React from "react";
import { NavigationMenu } from "./NavigationMenu";
import { style, classes } from "./Navigation.st.css";
import { UserMiniProfile } from "./UserMiniProfile";

export const Navigation = () => (
    <div className={style(classes.root)}>
        <NavigationMenu items={[
            {label: "Recruitment", path: "/recruitment"},
            {label: "Roster", path: "/roster"},
        ]} />

        <UserMiniProfile />
    </div>
);
