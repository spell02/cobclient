import * as React from "react";
import { style, classes } from "./Application.st.css";

import { Navigation } from "./Navigation";
import { BrowserRouter } from "react-router-dom";

export const Application = () => {
    return (
        <BrowserRouter>
            <div className={style(classes.root)}>
                <Navigation />
            </div>
        </BrowserRouter>
    );
};
