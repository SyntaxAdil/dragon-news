"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  authClient,
  signInUsingGithub,
  signInUsingGoogle,
} from "../../lib/auth/auth-client";

const SocialMediaLogin = () => {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="w-full space-y-2">
      {!user ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Login With</h2>
          {/* Google */}
          <button
            onClick={async () => await signInUsingGoogle()}
            className="btn btn-outline w-full 
            text-blue-400 font-medium border-blue-400 "
          >
            <FaGoogle />
            Login with Google
          </button>
          {/* GitHub */}
          <button
            className="btn btn-outline  w-full text-black font-medium border-black "
            onClick={async () => await signInUsingGithub()}
          >
            <FaGithub />
            Login with GitHub
          </button>
        </>
      ) : (
        <h2 className="text-xl truncate font-semibold mb-4">Live updates ready</h2>
      )}
    </div>
  );
};

export default SocialMediaLogin;
