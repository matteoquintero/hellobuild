import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/nav-bar'
import { Nav } from '../types/types'
import {useSession, signIn, signOut } from 'next-auth/react'

const Profile: NextPage = () => {
    const { data: session } = useSession()

    let nav: Nav = {
        current:1,
        image: session?.user?.image
    }
  return (

    <div className='h-full bg-hello-blue-dark'>
        <Head>
            <title>Profile - Hellobuild</title>
            <meta name="description" content="Profile hellobuild" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <NavBar nav={nav}></NavBar>
        {!session &&(

        <main className='h-[calc(100vh-64px)] overflow-hidden flex items-center justify-center'>
                    <button 
                        className='text-lg text-hello-green'
                        onClick={()=> signIn()}
                    >
                        To see the repositories you must give us permission
                    </button>
                </main>
            )}
            {session &&(
        <main className='h-[calc(100vh-64px)] overflow-hidden flex items-center justify-center'>
   
        <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
          <div className="flex items-center justify-center w-full py-8">
                <div className="rounded shadow bg-hello-black">
                    <div className="relative">
                        <img className="object-cover object-center w-full h-56 rounded-t shadow" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png" alt='' />
                        <div className="absolute inset-0 bottom-0 w-24 h-24 m-auto -mb-12 border-2 border-white rounded shadow xl:ml-10">
                            <img className="object-cover w-full h-full overflow-hidden rounded" src={(session?.user?.image) ? session?.user?.image : ''} alt='profile' />
                        </div>
                    </div>
                    <div className="px-5 pb-10 xl:px-10">
                        <div className="flex justify-center w-full pt-16 xl:justify-end xl:pt-5">
                            <div className="flex items-center">
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between pt-3 xl:pt-5 xl:flex-row xl:items-center">
                            <div className="w-full xl:pr-16 xl:w-2/3">
                                <div className="flex flex-col items-center justify-between mb-3 text-center xl:text-left xl:mb-0 xl:flex-row xl:justify-start">
                                    <h2 className="mb-3 text-2xl font-medium tracking-normal text-gray-800 xl:mb-0 xl:mr-4 dark:text-gray-100">{session?.user?.name}</h2>
                                    <div className="px-5 py-1 text-sm font-normal text-white rounded-full bg-hello-green">Pro</div>
                                </div>
                                <p className="mt-2 text-sm leading-5 tracking-normal text-center text-gray-600 xl:text-left dark:text-gray-400">
                                    {session.user?.email}
                                </p>                                
                                <p className="mt-2 text-sm leading-5 tracking-normal text-center text-gray-600 xl:text-left dark:text-gray-400">
                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia expedita non illo facilis, eaque soluta dicta veniam, fugit optio labore ut sit velit! Soluta, distinctio recusandae. Nemo quisquam mollitia sint! 
                                </p>
                            </div>
                            <div className="flex items-start justify-center w-full py-5 xl:px-10 xl:border-l xl:border-r xl:w-1/3">
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="mb-2 text-xl font-bold leading-6 text-center text-gray-600 dark:text-gray-400 xl:text-2xl">82</h2>
                                    <p className="text-sm leading-5 text-hello-white dark:text-gray-100 xl:text-xl">Reviews</p>
                                </div>
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="mb-2 text-xl font-bold leading-6 text-center text-gray-600 dark:text-gray-400 xl:text-2xl">28</h2>
                                    <p className="text-sm leading-5 text-hello-white dark:text-gray-100 xl:text-xl">Projects</p>
                                </div>
                                <div>
                                    <h2 className="mb-2 text-xl font-bold leading-6 text-center text-gray-600 dark:text-gray-400 xl:text-2xl">42</h2>
                                    <p className="text-sm leading-5 text-hello-white dark:text-gray-100 xl:text-xl">Approved</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full xl:w-2/3 md:flex-row xl:justify-end md:pl-6">
                                <div className="flex items-center justify-center mt-1 mb-5 xl:justify-start md:mt-0 md:mb-0">
                                    <div className="flex items-center justify-center px-6 py-2 text-sm text-gray-600 bg-gray-200 rounded-full dark:text-gray-400">Remote</div>
                                    <div className="flex items-center justify-center px-6 py-2 ml-5 text-sm rounded-full text-hello-whitez bg-hello-blue-dark">Available</div>
                                </div>
                                <button className="px-3 py-2 ml-0 text-sm text-white transition duration-150 ease-in-out rounded bg-hello-green focus:outline-none md:ml-5 hover:bg-hello-blue-light md:px-6">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              
         </div>
        </div>
                        
        </main>

            )}        

        <footer>
        </footer>
    </div>
  
  )
}

export default Profile