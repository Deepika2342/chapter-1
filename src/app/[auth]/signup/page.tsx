import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {/* Your signup form here */}

      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-green-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
export default SignupPage
