import * as React from "react";

export interface ApplicationProperties {
    compiler: string;
    framework: string;
}

export const Application = (props: ApplicationProperties) => (
    <h1>Hello, from {props.compiler} and {props.framework}!</h1>
);
