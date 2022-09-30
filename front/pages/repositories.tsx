import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/nav-bar'
import {useSession, signIn, signOut } from 'next-auth/react'
import useSWR from 'swr'
import { Repository } from '../types/repository'
import RepositoryCard from '../components/repository-card'
const fetcher = (...args: any) => fetch(args,args).then((res) => res.json())


const Repositories: NextPage = () => {
    const { data: session } = useSession()
    const { data, error } = useSWR('/api/repositories', fetcher)
    if (error && session) return <div>Failed to load</div>
    if (!data && session) return <div>Loading...</div>
    let repositories:Repository[] = data;
    console.log({repositories})
    return (

        <div className='h-full bg-hello-blue-dark'>
            <Head>
                <title>{session?.user?.name} Repositories - Hello Build</title>
                <meta name="description" content="Repositories hello build" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <NavBar></NavBar>
            {!session &&(
                <main>
                    <button onClick={()=> signIn()}>
                        para ver los repositorios danos permiso
                    </button>
                </main>
            )}
            {session &&(
                <main>
                    {(repositories.length>0 && repositories.map( (repository:Repository,index:number) => (
                        <RepositoryCard key={index}></RepositoryCard>
                    ) ) ) }
 
                </main>            
            )}



            <footer>
            </footer>
        </div>
    
    )
}

export default Repositories