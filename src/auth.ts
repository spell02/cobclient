import * as MSAL from "msal";

const msalConfig: MSAL.Configuration = {
    auth: {
        clientId: "74bda2a2-4daf-452c-87d7-24def39aab9d",
        authority: "https://callofblood.b2clogin.com/callofblood.onmicrosoft.com/B2C_1A_BattleNetSignIn",
        validateAuthority: false,
        redirectUri: "http://localhost:8080"
    },
};

export const auth = new MSAL.UserAgentApplication(msalConfig);

auth.handleRedirectCallback((error, response) => {
    if (error) {
        console.log(error);
    }
});
