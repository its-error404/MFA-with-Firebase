import {At, GoogleLogo, Password} from "phosphor-react";
import Link from "next/link";
import {signInWithGoogle, signUp} from "@/firebase/authentication";
import {notify} from "@/utils/notify";
import {FormEvent, useRef} from "react";

export function SignUp() {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    async function loginWithGoogle() {
        const response = await signInWithGoogle();

        if (response !== true) {
            notify('Something went wrong');
        }
    }

    async function createAnAccount(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (email.current && password.current) {
            const response = await signUp(email.current.value, password.current.value);

            if (!response) {
                notify('Something went wrong.');
            }
        }
    }

    return (
        <div className="bg-white md:w-[500px] rounded-xl p-8">
            <h2 className="mt-20 mb-8 text-3xl font-bold text-center text-gray-800">Create an account</h2>
            <button
                onClick={loginWithGoogle}
                className="relative flex items-center justify-center w-full px-6 mb-8 text-black border border-gray-500 rounded-xl gap-x-4 h-11">
                <GoogleLogo className='w-6 h-6'/>
                <span className="relative text-base font-light">with Google</span>
            </button>
            <p className='mb-8 text-center'>Or</p>
            <form
                className="space-y-8"
                onSubmit={createAnAccount}
            >
                <div className="space-y-4">
                    <div className="relative flex items-center">
                        <At className='absolute inset-y-0 w-6 h-6 my-auto left-4'/>
                        <input
                            ref={email}
                            type="email"
                            name="email"
                            placeholder="Insert your email"
                            className="block w-full h-12 pl-12 pr-4 text-gray-600 placeholder-gray-500 transition duration-300 bg-gray-100 focus:outline-none rounded-xl invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative flex items-center">
                        <Password className='absolute inset-y-0 w-6 h-6 my-auto left-4'/>
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
                        className="relative flex items-center justify-center w-full px-6 bg-black rounded-xl h-11 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span
                                    className="relative text-base font-light text-white">Sign Up</span>
                </button>
                <p className="pt-6 text-sm text-center text-gray-500 border-t border-gray-100">
                    Do you have an account ?<Link href="/login" className="text-black"> Login</Link>
                </p>
            </form>
        </div>
    )
}