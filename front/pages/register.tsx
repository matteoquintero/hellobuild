import { UserIcon } from '@heroicons/react/24/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Register: NextPage = () => {
  return (

    <div className='h-full bg-hello-blue-dark'>
        <Head>
            <title>Register - Hellobuild</title>
            <meta name="description" content="Register hellobuild" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main className='h-full'>
        <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className='grid justify-items-center'>
              <Image
                width={146}
                height={60}
                src={'/hellobuild.png'}
                alt='register'
              ></Image>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-hello-white">
                Register your account
              </h2>
              <p className="flex mt-2 text-sm text-hello-white">
                Or
                <Link href="/" >
                 <p className='ml-2 cursor-pointer className="font-medium text-hello-green hover:text-hello-blue-light"'>
                    Log In
                    </p> 
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="/repositories" method="POST" autoComplete='off'>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 border rounded-none appearance-none focus:ring-0 placeholder-white/10 border-black/10 text-hello-white bg-hello-black rounded-t-md focus:z-10 focus:border-hello-blue-light focus:outline-none sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    className="relative block w-full px-3 py-2 border rounded-none appearance-none focus:ring-0 border-black/10 text-hello-white bg-hello-black placeholder-white/10 focus:z-10 focus:border-hello-blue-light focus:outline-none sm:text-sm"
                    placeholder="Name"
                  />
                </div>                
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="relative block w-full px-3 py-2 border rounded-none appearance-none focus:ring-0 border-black/10 text-hello-white bg-hello-black placeholder-white/10 focus:z-10 focus:border-hello-blue-light focus:outline-none sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password-confirmation"
                    name="password-confirmation"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 border rounded-none appearance-none focus:ring-0 border-black/10 text-hello-white bg-hello-black placeholder-white/10 rounded-b-md focus:z-10 focus:border-hello-blue-light focus:outline-none sm:text-sm"
                    placeholder="Password Confirmation"
                  />
                </div>                
              </div>

       

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md text-hello-white hover:text-hello-blue-dark bg-hello-green group hover:bg-hello-blue-light focus:outline-none"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="w-5 h-5 text-hello-black group-hover:text-hello-blue-dark" aria-hidden="true" />
                  </span>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

        <footer>
        </footer>
    </div>
  
  )
}

export default Register
