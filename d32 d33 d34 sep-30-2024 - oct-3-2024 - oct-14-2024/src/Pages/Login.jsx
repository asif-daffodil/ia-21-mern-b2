import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import { auth } from "../firebaseConfig";
import { useForm } from "react-hook-form";

const Login = () => {
const [user, loading, error] = useAuthState(auth); // Initialize useAuthState
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    //   react from
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(data.email, data.password);
        } catch (error) {
            console.error(error);
        }
    }

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    if (user) {
        console.log(user);
      navigate("/"); // Redirect user to the home page after login
    }
  }, [user, navigate]); // Make sure to include 'navigate' as a dependency

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto">
      {/* Form with email and password */}
      <div className="w-96 mx-auto border rounded shadow p-6 my-6">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
               })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                    },
                })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
        {/* Sign in with Google */}
        <div className="flex justify-center items-center mt-4">
          <button
            className="bg-red-500 p-2 text-white rounded-md"
            onClick={() => signInWithGoogle()}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
