import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
              ></Image>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-hello-white">
                Register your account
              </h2>
              <p className="mt-2 text-sm text-hello-white">
                Or{' '}
                <a href="/" className="font-medium text-hello-green hover:text-hello-blue-light">
                   Login
                </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" autoComplete='off'>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                            </div>

                            <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Street address
                            </label>
                            <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                State / Province
                            </label>
                            <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                ZIP / Postal code
                            </label>
                            <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            </div>
                        </div>
                        </div>
                        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Save
                        </button>
                        </div>
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
