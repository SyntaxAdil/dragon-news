import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL,
});

export const signInUsingGithub = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
  return data;
};
export const signInUsingGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  return data;
};
export const {
  signIn,

  signUp,
  useSession,
} = createAuthClient();
