import { Fragment } from 'react'
import * as React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Nav } from '../types/types'

const NavBar = ({nav}:{nav:Nav}) =>{
    const navigation = [
        { name: 'Repositories', href: '/repositories', current: false },
        { name: 'Profile', href: '/profile', current: false },
      ]
      navigation[nav.current].current = true
      
      const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
      }
      
    return(
        <Disclosure as="nav" className="shadow bg-hello-white">
        {({ open }) => (
        <>
            <div className="w-4/5 mx-auto">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-hello-white hover:bg-hello-blue-light hover:text-hello-blue-dark focus:outline-none focus:ring-0">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                        ) : (
                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                    <div className="flex items-center flex-shrink-0">
                        <img
                            className="block w-auto h-8 lg:hidden"
                            src="/hellobuild.png"
                            alt="Hello Build"
                            />
                        <img
                            className="hidden w-auto h-8 lg:block"
                            src="/hellobuild.png"
                            alt="Hello Build"
                        />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <div
                                    className={classNames(
                                        item.current ? 'bg-hello-blue-light text-hello-blue-dark/60' : 'text-hello-blue-dark/60 hover:bg-hello-blue-light hover:text-hello-blue-dark',
                                        'px-3 py-2 rounded-md text-sm cursor-pointer'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                        type="button"
                        className="p-1 rounded-full text-hello-white/10 bg-hello-blue-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <Menu as="div" className="relative ml-3">
                        <div>
                        <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            {nav.image == undefined &&(
                                    <img
                                    className="w-8 h-8 rounded-full"
                                    src="/favicon.png"
                                    alt=""
                                />
                            )}
                            {nav.image &&(
                                <img
                                className="w-8 h-8 rounded-full"
                                src={nav.image}
                                alt=""
                                />                                
                            )}

      
                        </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-hello-green ring-1 ring-hello-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={'/repositories'}
                                >
                                    <div
                                        className={classNames(active ? 'bg-hello-green' : '', 'block px-4 py-2 text-sm text-hello-white cursor-pointer')}
                                    >
                                        Repositories
                                    </div>
                                </Link>
                           
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={'/profile'}
                                >
                                    <div
                                        className={classNames(active ? 'bg-hello-green' : '', 'block px-4 py-2 text-sm text-hello-white cursor-pointer')}
                                    >
                                        Profile
                                    </div>
                                </Link>
                           
                            )}
                            </Menu.Item>                            
                            <Menu.Item>
                            {({ active }) => (

                                <button 
                                    className={classNames(active ? 'bg-hello-green' : '', 'block px-4 py-2 text-sm text-hello-white')}
                                    onClick={()=> signOut()}
                                >
                                    Change GitHub
                                </button>
                           
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (

                                <Link
                                href={'/'}
                            >

<div 
                                    className={classNames(active ? 'bg-hello-green' : '', 'block px-4 py-2 text-sm text-hello-white cursor-pointer')}
                                    onClick={()=> {}}
                                >
                                    Log Out
                                </div>                                
                            </Link>                           
                            )}
                            </Menu.Item>                            
                        </Menu.Items>
                        </Transition>
                    </Menu>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                    item.current ? 'bg-hello-green text-hello-white' : 'text-gray-300 hover:bg-hello-blue-light hover:text-hello-blue-dark',
                    'block px-3 py-2 rounded-md text-base'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>

    )
}

export default NavBar