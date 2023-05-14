import { Fragment } from 'react'
import './Navbar.css';
import { Disclosure, Menu, Transition, } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'EN', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-light navbarStyle">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                {/* Logo and Navigation */}
                <div className="flex flex-shrink-0 grow-0 items-center">
                  <img
                    className="block h-10 w-auto md:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-12 w-auto md:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block md:grow md:flex md:justify-end">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 navBarLinks' : 'navBarLinks hover:bg-gray-700 hover:text-white',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="button"
                    >
                      Login
                    </button>
                    <div className='cart-icon'>
                        <span className='cart-number'>0</span>
                        <img src={cart} alt="" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            {/* Mobile dropdown button and list of navigation */}
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div>
                <div className='cart-icon my-5'>
                  <span className='cart-number'>0</span>
                  <img src={cart} alt="" />
                </div>
                <button
                  type="button"
                  className="button"
                >
                  Login
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default Navbar;