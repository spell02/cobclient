import * as React from "react";
import { style, classes } from "./NavigationMenu.st.css";
import { Link, NavLink } from "react-router-dom";

export interface NavigationMenuItem {
    label: string;
    path: string;
    exact?: boolean;
}

export interface NavigationMenuProperties {
    showLogo?: boolean;
    logoPath?: string;
    logoImagePath?: string;
    items: NavigationMenuItem[];
}

export const NavigationMenu = (props: NavigationMenuProperties) => (
    <div id="navigation-menu" className={style(classes.root)}>
        <div className={style(classes.item)}>
            <Link to="/">
                <div id="navigation-logo" className={style(classes.logo)}>
                    Call of <span className={style(classes.bloodText)}>Blood</span>
                </div>
            </Link>
        </div>

        {props.items.map((item, index) => (
            <div className={style(classes.item)} key={index}>
                <NavLink to={item.path} exact={item.exact}>{item.label}</NavLink>
            </div>
        ))}
    </div>
);
