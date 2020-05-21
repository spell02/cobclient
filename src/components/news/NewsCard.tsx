import * as React from "react";
import { style, classes } from "./NewsCard.st.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export const NewsCard = () => (
    <div className={style(classes.root)}>
        <div className={style(classes.meta)}>
            <div className={style(classes.metaBox)}> 
                <h1 className={style(classes.newsTitle)}>News Title</h1>
            </div>
            <div className={style(classes.metaBox)}>
                <FontAwesomeIcon icon={faComments} />
                <span className={style(classes.commentCount)}>69</span>
            </div>
        </div>
    </div>
)