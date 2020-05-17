import * as React from "react";
import * as MSAL from "msal";

import {auth} from "../auth";

export const Application = () => {
    const [user, setUser] = React.useState<MSAL.Account | null>(auth.getAccount());

    return (
        <div>
            {user && <p>Hello, {user.name}!</p>}
            {user 
                ? <button onClick={() => auth.logout()}>Log out</button>
                : <button onClick={() => auth.loginRedirect()}>Log in</button>}
        </div>
    );
};
