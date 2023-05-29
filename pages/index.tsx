import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col h-screen px-5 py-24 bg-white gap-y-6 md:w-screen sm:px-20 lg:px-80'>
        <header className='flex justify-between mb-40'>
            <p className='text-xl font-bold'>Firebase MFA</p>
            <nav className='flex gap-x-8'>
                <Link className='hover:underline hover:text-sm' href='/login'>Login</Link>
                <Link className='hover:underline hover:text-sm' href='/sign-up'>Sign Up</Link>
            </nav>
        </header>
        <h1 className='text-3xl'>Build Firebase MultiFactor Authentication</h1>
    </div>
  )
}
