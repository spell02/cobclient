import * as React from "react";
import * as MSAL from "msal";
import { auth } from "../../auth";

import { style, classes } from "./UserMiniProfile.st.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons"

export const UserMiniProfile = () => {
    const [user, setUser] = React.useState<MSAL.Account | null>(auth.getAccount());

    return (
        <div className={style(classes.root)}>
            {!user &&
                <button className={style(classes.btnSignIn)}
                    onClick={() => auth.loginRedirect()}>
                        <FontAwesomeIcon icon={faBattleNet} size="lg" />
                        Sign in with Battle.net
                    </button>}

            {user &&
                <div>
                    <div>sadasdas</div>
                    <div>Hey there, {user.name}!</div>
                    <div>Do you want to <a onClick={() => auth.logout()}>log out</a>?</div>
                </div>}
        </div>
    );
}