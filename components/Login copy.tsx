import { At, GoogleLogo, Password } from "phosphor-react";
import Link from "next/link";
import { FormEvent, useRef } from "react";

type Props = {
    loginWithGoogle: () => void,
    loginWithEmailAndPassword: (email: string, password: string) => void
}

export function Login({ loginWithGoogle, loginWithEmailAndPassword }: Props) {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (email.current && password.current) {
            loginWithEmailAndPassword(email.current.value, password.current.value);
        }
    }

    return (
        <div className="bg-white md:w-[500px] p-8 rounded-xl">
        <h2 className="mt-20 mb-8 text-3xl font-bold text-center text-gray-800">Welcome back</h2>
        <button
            onClick={loginWithGoogle}
            className="flex items-center justify-center w-full px-6 mb-8 text-black border border-gray-500 rounded-xl gap-x-4 h-11">
            <GoogleLogo className='w-6 h-6' />
            <span className="relative text-base font-light">with Google</span>
        </button>
        <p className='mb-8 text-center'>Or</p>
        <form
            className="space-y-8"
            onSubmit={handleSubmit}
        >
            <div className="space-y-4">
                <div className="relative flex items-center">
                    <At className='absolute inset-y-0 w-6 h-6 my-auto left-4' />
                    <input
                        ref={email}
                        type="email"
                        name="email"
                        placeholder="Insert your email"
                        className="block w-full h-12 pl-12 pr-4 text-gray-600 placeholder-gray-500 transition duration-300 bg-gray-100 focus:outline-none rounded-xl invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
                    />
                </div>
            </div>
            <div className="my-6 space-y-4">
                <div className="relative flex items-center">
                    <Password className='absolute inset-y-0 w-6 h-6 my-auto left-4' />
                    <input
                        ref={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Insert your password"
                        className="block w-full h-12 pl-12 pr-4 text-gray-600 placeholder-gray-500 transition duration-300 bg-gray-100 focus:outline-none rounded-xl invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
                    />
                </div>
            </div>
            <button type="submit"
                className="flex items-center justify-center w-full px-6 bg-black rounded-xl h-11">
                <span
                    className="text-base font-light text-white">
                    Login
                </span>
            </button>
            <p className="pt-6 text-sm text-center text-gray-500 border-t border-gray-100">
                Don't have an account ?<Link href="/sign-up" className="text-black"> Sign up</Link>
            </p>
        </form>
    </div>
    )
}