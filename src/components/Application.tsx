import * as React from "react";
import { style, classes } from "./Application.st.css";

import { Navigation } from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { News } from "./news";
import { Footer } from "./Footer";

export const Application = () => {
    return (
        <BrowserRouter>
            <div className={style(classes.root)}>
                <Navigation />
                <div className={style(classes.content)}>
                    <News />
                </div>

                <div className={style(classes.footer)}>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};
