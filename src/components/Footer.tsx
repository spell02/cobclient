import * as React from "react";
import { style, classes } from "./Footer.st.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => (
    <div id="footer-container" className={style(classes.root)}>
        <h1 className={style(classes.header)}>Call of Blood</h1>
        <ul className={style(classes.social)}>
            <li>
                <a href="https://youtube.com/channel/CallOfBloodAD">
                    <FontAwesomeIcon icon={faYoutube}/>
                    <span className={style(classes.iconLabel)}>YouTube</span>
                </a>
            </li>
            <li>
                <a href="https://twitch.tv/CallOfBloodTV">
                    <FontAwesomeIcon icon={faTwitch}/>
                    <span className={style(classes.iconLabel)}>Twitch</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/CallOfBloodAD">
                    <FontAwesomeIcon icon={faTwitter}/>
                    <span className={style(classes.iconLabel)}>Twitter</span>
                </a>
            </li>
        </ul>
    </div>
)