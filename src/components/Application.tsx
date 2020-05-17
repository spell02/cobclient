import * as React from "react";
import * as MSAL from "msal";

const msalConfig: MSAL.Configuration = {
    auth: {
        clientId: "74bda2a2-4daf-452c-87d7-24def39aab9d",
        redirectUri: "http://localhost:8080"
    },
};

const auth = new MSAL.UserAgentApplication(msalConfig);

export const Application = () => {
    const [user, setUser] = React.useState<MSAL.Account | null>(null);
    
    React.useEffect(() => {
        setUser(auth.getAccount());
        console.log(user);
    });

    return (
        <div>
            {user && <p>Hello, {user.name}!</p>}
            {user 
                ? <button onClick={() => auth.logout()}>Log out</button>
                : <button onClick={() => auth.loginRedirect()}>Log in</button>}
        </div>
    );
};
