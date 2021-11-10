// src/auth/index.js
import config from "../auth/auth_config.js";

async function createClient() {
    let auth0Client = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });

    return auth0Client;
}

async function loginWithPopup(client, options) {
    try {
        await client.loginWithPopup(options);
    } catch (e) {
        // eslint-disable-next-line
        console.error(e);
    }
}

function logout(client) {
    return client.logout();
}

const auth = {
    createClient,
    loginWithPopup,
    logout
};

export default auth;