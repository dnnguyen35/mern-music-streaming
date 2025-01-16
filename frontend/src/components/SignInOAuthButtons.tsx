import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();

  const signInWithGoogle = () => {
    signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };

  if (!isLoaded) return null;
  return (
    <Button
      onClick={signInWithGoogle}
      className="w-full text-pink border-zinc-200 h11"
      variant={"secondary"}
    >
      <img src="./google.png" alt="Google" className="size-5" />
      Continue With Google
    </Button>
  );
};

export default SignInOAuthButtons;
