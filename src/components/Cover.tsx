import * as React from "react";
import { style, classes } from "./Cover.st.css";
import { Link } from "react-router-dom";

export const Cover = () => (
    <div className={style(classes.root)}>
        <div className={style(classes.left)}>

        </div>
        <div className={style(classes.logo)}>
            <h1 className={style(classes.logoText)}>Call of Blood</h1>
        </div>
        <div className={style(classes.desc)}>
            <p className={style(classes.descText)}>An European World of Warcraft raiding guild situated on the Argent Dawn realm.</p>
            <div className={style(classes.ctaButtonContainer)}>
                <Link to="/recruitment">
                    <button className={style(classes.ctaButton)}>
                        Apply now!
                    </button>
                </Link>
            </div>
        </div>
        <div className={style(classes.bottom)}>
        </div>
    </div>
)