import { init } from "next-firebase-auth";
import { FIREBASE_API_KEY, FIREBASE_APROJECT_ID } from "./firebase.config";

const initAuth = () => {
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    firebaseAuthEmulatorHost: "localhost:9099",
    firebaseAdminInitConfig: {
      credential: {
        projectId: FIREBASE_APROJECT_ID,
        clientEmail: "example-abc123@my-example-app.iam.gserviceaccount.com",
        // The private key must not be accessible on the client side.
        privateKey: FIREBASE_API_KEY,
      },
      //   databaseURL: 'https://my-example-app.firebaseio.com',
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDaOwS1ze5hLC1T-hMXwdfTR_kR--t88So", // required
      authDomain: "control-of-invoices.firebaseapp.com",
      //   databaseURL: 'https://my-example-app.firebaseio.com',
      projectId: "control-of-invoices",
    },
    cookies: {
      name: "cookies-control-invoices", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
