import * as React from "react";
import { style, classes } from "./Application.st.css";

import { Navigation } from "./Navigation";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { News } from "./news";
import { Footer } from "./Footer";
import { Cover } from "./Cover";

export const Application = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Cover />
                </Route>
                <Route>
                    <div className={style(classes.root)}>
                        <div className={style(classes.header)}>
                            <Navigation />
                        </div>
                        <div className={style(classes.content)}>
                            <News />
                        </div>
                        <div className={style(classes.footer)}>
                            <Footer />
                        </div>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
