import * as React from "react";
import { style, classes } from "./Cover.st.css";
import { Link } from "react-router-dom";
import { NewsCard } from "./news/NewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "./Navigation";

export const Cover = () => (
    <div className={style(classes.root)}>
        <div className={style(classes.nav)}>
            <Navigation />
        </div>

        <div className={style(classes.desc)}>
            <h1 className={style(classes.logoText)}>Call of Blood</h1>
            <p className={style(classes.descText)}>An European World of Warcraft raiding guild situated on the Argent Dawn realm.</p>
            <div className={style(classes.ctaButtonContainer)}>
                <Link to="/recruitment">
                    <button className={style(classes.ctaButton)}>
                        Apply now!
                    </button>
                </Link>
            </div>
        </div>

        <div className={style(classes.news)}>
            <div className={style(classes.newsHeader)}>Latest news</div>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <div className={style(classes.newsFooter)}>
                All news <FontAwesomeIcon icon={faAngleDoubleRight} />
            </div>
        </div>
    </div>
);
