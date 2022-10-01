import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/nav-bar'
import {useSession, signIn, signOut } from 'next-auth/react'
import useSWR from 'swr'
import { Nav, Repository } from '../types/types'
import RepositoryCard from '../components/repository-card'
const fetcher = (...args: any) => fetch(args,args).then((res) => res.json())


const Repositories: NextPage = () => {
 
    const { data: session } = useSession()
    const { data, error } = useSWR('/api/repositories', fetcher)
    if (error && session) return <div>Failed to load</div>
    if (!data && session) return <div>Loading...</div>
    let repositories:Repository[] = data;
    let nav: Nav = {
        image: session?.user?.image,
        current:0,
    }   
    return (

        <div className='h-full bg-hello-blue-dark'>
            <Head>
                <title>{session?.user?.name} Repositories - Hello Build</title>
                <meta name="description" content="Repositories hello build" />
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
                    <div className='w-4/5 overflow-y-auto h-4/5'>
                        {(repositories.length>0 && repositories.map( (repository:Repository, index:number ) => (
                            <RepositoryCard key={index} repository={repository}></RepositoryCard>
                        ) ) ) }
                    </div>
                </main>            
            )}
            <footer>
            </footer>
        </div>
    
    )
}

export default Repositories