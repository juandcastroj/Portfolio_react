import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeSwitcher from './themeSwitcher'
import { Link } from 'react-router-dom'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '/contact' },
  ]


export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return ( 
        <header className="fixed inset-x-0 top-0 z-50">

                {/* Desktop navbar */}
            <nav aria-label="Global" className="animate-fade-down animate-duration-[3000ms] animate-delay-200 mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8">

                {/* <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                        alt=""
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                        />
                    </a>
                </div> */}

                <div className="flex lg:hidden fixed top-6 right-6">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12 bg-amber-100 dark:bg-blue-200 bg-opacity-80 rounded-2xl px-6 py-2 fixed top-8">
                {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="text-sm/6 font-semibold text-green-900 dark:text-gray-600">
                    {item.name}
                    </Link>
                ))}
                </div>
               
                <ThemeSwitcher className="hidden lg:inline"/>

                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
                </div> */}
            </nav>
            

                {/* Mobile Navbar */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-[#2b0076] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=300"
                            className="h-8 w-auto"
                        />
                        </a>


                        <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>

                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">

                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                <a
                                    onClick={() => setMobileMenuOpen(false)}
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-blue-200 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>


                            <div className="py-6">
                                <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-blue-200 hover:bg-gray-50"
                                >
                                Log in
                                </a>
                            </div>

                            <ThemeSwitcher className="inline lg:hidden"/>
                        
                        </div>
                    </div>

                </DialogPanel>
            </Dialog>

        </header>
     );
}
