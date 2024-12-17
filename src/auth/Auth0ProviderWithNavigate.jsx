// import { AppState, Auth0Provider } from "@auth0/auth0-react";
// // import { useNavigate } from "react-router-dom";

// type Props = {
//     children: React.ReactNode;
// }

// const Auth0ProviderWithNavigate = ({children}: props) => {
//     const domain = import.meta.env.VITE_AUTH0_DOMAIN;
//     const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
//     const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

//     if(!domain || !clientId || redirectUri){
//         throw new Error("unable to initialize auth");
//     }

//     const onRedirectCallback = (appState?: AppState) => {
//         //navigate(appState?.returnTo || "/auth-callback");
//         console.log("USER",user);
        
//     };

//     return (
//         <Auth0Provider
//           domain={domain}
//           clientId={clientId}
//           authorizationParams={{
//             redirect_uri: redirectUri,
//           }}
//           onRedirectCallback={onRedirectCallback}
//         >
//             {children}
//         </Auth0Provider>
//     )
// }



import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithNavigate = ({ children }) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri) {
        throw new Error("unable to initialize auth");
    }

    const onRedirectCallback = (appState) => {
        // navigate(appState?.returnTo || "/auth-callback");
        console.log("USER", user);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;


// import React from 'react';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';

// const Auth0ProviderWithNavigate = ({ children }) => {
//   const navigate = useNavigate();
//   // const { createUser } = useCreateMyUser();

//   const domain = import.meta.env.VITE_AUTH0_DOMAIN;
//   const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
//   const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
//   const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

//   if (!domain || !clientId || !redirectUri || !audience) {
//     throw new Error("unable to initialise auth");
//   }

//   const onRedirectCallback = (appState) => {
//     navigate(appState?.returnTo || "/auth-callback");
//     // console.log("USER", user);
//   };

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       authorizationParams={{
//         redirect_uri: redirectUri,
//         audience,
//       }}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// export default Auth0ProviderWithNavigate;
