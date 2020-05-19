import * as React from "react";

export interface RosterEntry {
    name: string;
    raceName: string;
    className: string;
    rank: number;
}

export interface RosterProperties {
    entries: RosterEntry[];
}

export const Roster = (props: RosterProperties) => (
    <div id="roster-container">
        {props.entries.map((entry, index) => {
            <div>{entry.name}</div>
        })}
    </div>
);
