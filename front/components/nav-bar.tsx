import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Repositories', href: '/repositories', current: true },
  { name: 'Profile', href: '/profile', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const NavBar = () =>{
    return(
        <Disclosure as="nav" className="shadow bg-hello-white">
        {({ open }) => (
        <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
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
                                    item.current ? 'bg-hello-green text-hello-white' : 'text-hello-green/20 hover:bg-hello-blue-light hover:text-hello-blue-dark',
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
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                        className="w-8 h-8 rounded-full"
                        src="/favicon.png"
                        alt=""
                        />
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
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-hello-green ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(active ? 'bg-hello-green' : '', 'block px-4 py-2 text-sm text-hello-black')}
                            >
                            Your Profile
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(active ? 'bg-hello-green' : '', 'block px-4 py-2 text-sm text-hello-black')}
                            >
                            Sign out
                            </a>
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