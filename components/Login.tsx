import { GoogleLogo } from "phosphor-react";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/router";

type Props = {
  loginWithGoogle: () => void;
  loginWithEmailAndPassword: (email: string, password: string) => void;
};

export function Login({ loginWithGoogle, loginWithEmailAndPassword }: Props) {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email.current && password.current) {
      loginWithEmailAndPassword(email.current.value, password.current.value);
    }
  }

  function handleRegisterClick() {
    router.push("/sign-up");
  }

  return (
    <div className="w-full h-screen md:flex">
      <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-tr from-blue-800 to-purple-700 i">
        <div>
          <h1 className="font-sans text-4xl font-bold text-white">Multi Factor Authentication</h1>
          <p className="mt-1 text-white">The Most Needed Security Measure right now !</p>
          <button
            type="button"
            onClick={handleRegisterClick}
            className="block w-40 py-2 mt-4 mb-2 font-semibold text-indigo-800 bg-white rounded-2xl"
          >
            Register Now!
          </button>
        </div>
        <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
        <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
      </div>
      <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="mb-1 text-2xl font-bold text-gray-800">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <button
            type="button"
            onClick={loginWithGoogle}
            className="flex items-center px-3 mb-4 font-bold text-white bg-indigo-600 border-2 rounded-2xl"
          >
            <GoogleLogo className="h-10 mr-2 text-gray-400 w-30 " />
            Login with Google
          </button>
          <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <input
              className="pl-2 border-none outline-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              ref={email}
            />
          </div>
          <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 border-none outline-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              ref={password}
            />
          </div>
          <button
            type="submit"
            className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
