import * as React from "react";
import * as MSAL from "msal";
import { auth } from "../../auth";

import { style, classes } from "./UserMiniProfile.st.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser as iconUser } from "@fortawesome/free-solid-svg-icons";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons"

export const UserMiniProfile = () => {
    const [user, setUser] = React.useState<MSAL.Account | null>(auth.getAccount());
    console.log(user?.idToken);

    return (
        <div className={style(classes.root)}>
            {!user &&
                <button className={style(classes.btnSignIn)}
                    onClick={() => auth.loginRedirect()}>
                        <FontAwesomeIcon icon={faBattleNet} size="lg" />
                        Sign in with Battle.net
                    </button>}

            {user &&
                <div className={classes.message}>
                    <div>Signed in as <span className={classes.username}>{user.name}</span></div>
                    <div className={classes.actions}>
                        <div onClick={() => auth.logout()} className={classes.action}>
                            <FontAwesomeIcon icon={iconUser} />
                            <span className={classes.iconLabel}>Account</span>
                        </div>
                        <div onClick={() => auth.logout()} className={classes.action}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span className={classes.iconLabel}>Sign out</span>
                        </div>
                    </div>
                </div>}
        </div>
    );
}