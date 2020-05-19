import * as React from "react";
import {  Link } from "react-router-dom";

export interface NavigationLogoProperties {
    redirectTo: string;
    imagePath: string;
}

export const NavigationLogo = (props: NavigationLogoProperties) => (
    <Link to={props.redirectTo}>
        <img src={props.imagePath} alt="Logo"></img>
    </Link>
);
